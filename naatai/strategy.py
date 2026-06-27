"""The SuperAreas contraction -> breakout setup, expressed as code.

Mapping from the hand-drawn chart to the algorithm
--------------------------------------------------
* "Full body candles ... sign of institutional interest"  -> ``body_ratio``
  above ``impulse_body_ratio`` in the trend direction (the *expansion* /
  *range-expansion* leg).
* "Range Contraction ... candle size getting smaller"     -> a window of
  candles whose ATR and average body have shrunk versus the prior impulse,
  and which sit inside a tight high/low *box*.
* "Breakout -> 1st Entry"                                  -> a full-body
  candle that *closes* beyond the box edge in the trend direction.
* "Pivot Breaker / Late IB -> 2nd Entry"                   -> the same
  breakout that additionally clears the most recent swing pivot; flagged as a
  higher-conviction continuation entry.

The strategy only ever looks at *closed* candles, so a signal never repaints.
"""
from __future__ import annotations

from dataclasses import dataclass
from typing import List, Optional, Sequence

from .indicators import (
    Candle,
    atr,
    ema,
    last_pivot_high,
    last_pivot_low,
)
from .signals import Decision, Side, Signal


@dataclass
class StrategyConfig:
    # --- timeframe is informational; the engine fetches the right klines ---
    # --- trend filter ---
    ema_fast: int = 20
    ema_slow: int = 50
    use_trend_filter: bool = True

    # --- contraction box (the consolidation we trade the break of) ---
    box_bars: int = 6              # candles that form the contraction box
    contraction_ratio: float = 0.75  # box ATR must be <= this * prior impulse ATR
    max_box_atr_mult: float = 2.5  # box height must be <= this * current ATR (keep it tight)

    # --- impulse / expansion (institutional footprint) ---
    impulse_lookback: int = 6      # window before the box where we look for the impulse
    impulse_body_ratio: float = 0.55  # "full body" threshold

    # --- breakout ---
    breakout_body_ratio: float = 0.5   # breakout candle must itself be a strong candle
    breakout_buffer: float = 0.0008    # close must clear the box edge by this fraction (anti-fakeout)
    require_volume: bool = True
    volume_mult: float = 1.1           # breakout volume vs recent average

    # --- pivot breaker (2nd entry) ---
    pivot_left: int = 3
    pivot_right: int = 3

    # --- risk model ---
    atr_period: int = 14
    target_r_multiples: tuple = (1.0, 2.0, 3.0)  # measured-move multiples of box height

    # --- general ---
    min_candles: int = 60          # need at least this much history to judge


class Strategy:
    """Stateless evaluator: feed it closed candles, get a :class:`Signal`."""

    def __init__(self, config: Optional[StrategyConfig] = None):
        self.cfg = config or StrategyConfig()

    # ------------------------------------------------------------------
    def evaluate(self, symbol: str, timeframe: str, candles: Sequence[Candle]) -> Signal:
        cfg = self.cfg
        n = len(candles)
        sig = Signal(symbol=symbol, timeframe=timeframe, decision=Decision.NO_TRADE)

        if n < cfg.min_candles:
            sig.blockers.append(f"not enough history ({n} < {cfg.min_candles} candles)")
            return sig

        i = n - 1                       # last CLOSED candle = the potential breakout
        sig.candle_open_time = candles[i].open_time
        brk = candles[i]

        closes = [c.close for c in candles]
        ema_f = ema(closes, cfg.ema_fast)
        ema_s = ema(closes, cfg.ema_slow)
        atrs = atr(candles, cfg.atr_period)

        cur_atr = atrs[i]
        if cur_atr is None or cur_atr <= 0:
            sig.blockers.append("ATR not ready")
            return sig

        # --- trend context ---------------------------------------------------
        up_trend = down_trend = False
        if ema_f[i] is not None and ema_s[i] is not None:
            up_trend = ema_f[i] > ema_s[i] and brk.close > ema_s[i]
            down_trend = ema_f[i] < ema_s[i] and brk.close < ema_s[i]

        # --- the contraction box (candles just before the breakout) ----------
        box_start = i - cfg.box_bars
        box_end = i                      # exclusive of breakout candle i
        if box_start < cfg.impulse_lookback:
            sig.blockers.append("not enough room for box")
            return sig
        box = candles[box_start:box_end]
        box_high = max(c.high for c in box)
        box_low = min(c.low for c in box)
        box_height = box_high - box_low
        sig.box_high, sig.box_low = box_high, box_low

        # impulse window sits just before the box
        imp_start = box_start - cfg.impulse_lookback
        impulse = candles[imp_start:box_start]

        # --- contraction test ------------------------------------------------
        # Detected from the candles' own geometry over these two short windows
        # (the chart's "candle size is getting smaller"), not the laggy global
        # ATR — Wilder smoothing over 14 bars can't react inside 6 candles.
        contracting = False
        avg_box_range = sum(c.range for c in box) / len(box)
        avg_imp_range = sum(c.range for c in impulse) / len(impulse) if impulse else 0.0
        avg_box_body = sum(c.body for c in box) / len(box)
        avg_imp_body = sum(c.body for c in impulse) / len(impulse) if impulse else 0.0
        if avg_imp_range > 0 and avg_imp_body > 0:
            range_shrunk = avg_box_range <= cfg.contraction_ratio * avg_imp_range
            body_shrunk = avg_box_body < avg_imp_body
            tight_box = box_height <= cfg.max_box_atr_mult * avg_imp_range
            contracting = range_shrunk and body_shrunk and tight_box
            if not range_shrunk:
                sig.blockers.append("range not contracting (candles not getting smaller)")
            if not body_shrunk:
                sig.blockers.append("candle bodies not shrinking")
            if not tight_box:
                sig.blockers.append("consolidation box too wide")
        else:
            sig.blockers.append("no measurable impulse before the box")

        # --- impulse / institutional footprint -------------------------------
        long_impulse = any(c.bullish and c.body_ratio >= cfg.impulse_body_ratio for c in impulse)
        short_impulse = any(c.bearish and c.body_ratio >= cfg.impulse_body_ratio for c in impulse)

        # --- volume confirmation --------------------------------------------
        vol_ok = True
        if cfg.require_volume:
            recent = candles[i - cfg.box_bars - cfg.impulse_lookback:i]
            avg_vol = sum(c.volume for c in recent) / len(recent) if recent else 0
            vol_ok = avg_vol == 0 or brk.volume >= cfg.volume_mult * avg_vol
            if not vol_ok:
                sig.blockers.append("breakout volume below average")

        # --- breakout test ---------------------------------------------------
        breakout_long = (
            brk.close > box_high * (1 + cfg.breakout_buffer)
            and brk.bullish
            and brk.body_ratio >= cfg.breakout_body_ratio
        )
        breakout_short = (
            brk.close < box_low * (1 - cfg.breakout_buffer)
            and brk.bearish
            and brk.body_ratio >= cfg.breakout_body_ratio
        )

        # --- pivot breaker (2nd-entry continuation) --------------------------
        piv_hi = last_pivot_high(candles, i - 1, cfg.pivot_left, cfg.pivot_right)
        piv_lo = last_pivot_low(candles, i - 1, cfg.pivot_left, cfg.pivot_right)
        pivot_break_long = piv_hi is not None and brk.close > piv_hi
        pivot_break_short = piv_lo is not None and brk.close < piv_lo

        # --- decide ----------------------------------------------------------
        side = Side.NONE
        if contracting and breakout_long and long_impulse and vol_ok:
            if not cfg.use_trend_filter or up_trend:
                side = Side.LONG
            else:
                sig.blockers.append("long breakout against higher-timeframe trend")
        elif contracting and breakout_short and short_impulse and vol_ok:
            if not cfg.use_trend_filter or down_trend:
                side = Side.SHORT
            else:
                sig.blockers.append("short breakout against higher-timeframe trend")

        if side == Side.NONE:
            # Forming-but-not-confirmed -> WATCH, so the user can pre-position.
            if contracting and (long_impulse or short_impulse):
                sig.decision = Decision.WAIT
                sig.label = "contraction formed — waiting for breakout"
                watch_side = Side.LONG if long_impulse else Side.SHORT
                sig.side = watch_side
                sig.reasons.append("range is contracting after an impulse; watch the box edges")
                sig.reasons.append(f"box {box_low:g}–{box_high:g}")
            return sig

        # --- build an actionable signal -------------------------------------
        is_pivot = pivot_break_long if side == Side.LONG else pivot_break_short
        sig.decision = Decision.TAKE
        sig.side = side
        sig.price = brk.close
        # Stop sits beyond the opposite box edge (structure invalidation); a
        # small buffer keeps it off the exact wick. Targets are R-multiples of
        # the actual entry->stop risk, so reward:risk is always well defined.
        if side == Side.LONG:
            sig.stop = round(box_low - 0.1 * cur_atr, 10)
            risk = brk.close - sig.stop
            sig.targets = [round(brk.close + m * risk, 10) for m in cfg.target_r_multiples]
            sig.label = "Pivot Breaker (2nd entry)" if is_pivot else "Breakout (1st entry)"
        else:
            sig.stop = round(box_high + 0.1 * cur_atr, 10)
            risk = sig.stop - brk.close
            sig.targets = [round(brk.close - m * risk, 10) for m in cfg.target_r_multiples]
            sig.label = "Pivot Breaker (2nd entry)" if is_pivot else "Breakdown (1st entry)"

        # confidence scoring (transparent, additive) --------------------------
        score = 50
        sig.reasons.append("range contracted after an impulse leg")
        sig.reasons.append(f"full-body breakout candle (body {brk.body_ratio:.0%} of range)")
        if (side == Side.LONG and up_trend) or (side == Side.SHORT and down_trend):
            score += 15
            sig.reasons.append("aligned with higher-timeframe trend (EMA stack)")
        if vol_ok and cfg.require_volume:
            score += 10
            sig.reasons.append("breakout backed by above-average volume")
        if is_pivot:
            score += 15
            sig.reasons.append("cleared the prior swing pivot (continuation / 2nd entry)")
        if brk.body_ratio >= 0.75:
            score += 10
            sig.reasons.append("very strong expansion candle (institutional footprint)")
        rr = sig.risk_reward
        if rr is not None and rr >= 2:
            score += 5
            sig.reasons.append(f"healthy reward:risk ({rr})")
        sig.confidence = max(0, min(100, score))
        return sig
