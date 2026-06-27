"""Pure-Python technical indicators (no numpy / pandas dependency).

Every function works on plain lists of floats or on ``Candle`` objects, so the
whole engine runs on a stock Python install with nothing to compile.
"""
from __future__ import annotations

from dataclasses import dataclass
from typing import List, Optional, Sequence


@dataclass
class Candle:
    """A single OHLCV candle (one row of a Binance kline)."""

    open_time: int          # ms epoch of the candle open
    open: float
    high: float
    low: float
    close: float
    volume: float
    close_time: int         # ms epoch of the candle close

    # ---- derived candle geometry -------------------------------------
    @property
    def body(self) -> float:
        """Absolute body size (|close - open|)."""
        return abs(self.close - self.open)

    @property
    def range(self) -> float:
        """Full high-low range of the candle."""
        return self.high - self.low

    @property
    def body_ratio(self) -> float:
        """Body as a fraction of the full range (0..1).

        A high body ratio = a "full body" candle, which the setup treats as a
        footprint of institutional interest / genuine expansion.  A low ratio
        means long wicks = indecision / likely fakeout.
        """
        r = self.range
        return self.body / r if r > 0 else 0.0

    @property
    def bullish(self) -> bool:
        return self.close >= self.open

    @property
    def bearish(self) -> bool:
        return self.close < self.open


def ema(values: Sequence[float], period: int) -> List[Optional[float]]:
    """Exponential moving average. Returns a list aligned with ``values``;
    the first ``period-1`` entries are ``None`` (not enough data yet)."""
    out: List[Optional[float]] = [None] * len(values)
    if period <= 0 or len(values) < period:
        return out
    k = 2.0 / (period + 1.0)
    seed = sum(values[:period]) / period          # SMA seed
    out[period - 1] = seed
    prev = seed
    for i in range(period, len(values)):
        prev = values[i] * k + prev * (1.0 - k)
        out[i] = prev
    return out


def true_range(c: Candle, prev_close: Optional[float]) -> float:
    if prev_close is None:
        return c.range
    return max(c.high - c.low, abs(c.high - prev_close), abs(c.low - prev_close))


def atr(candles: Sequence[Candle], period: int) -> List[Optional[float]]:
    """Average True Range (Wilder smoothing). Aligned to ``candles``."""
    n = len(candles)
    out: List[Optional[float]] = [None] * n
    if n < period + 1:
        return out
    trs = [true_range(candles[i], candles[i - 1].close if i > 0 else None)
           for i in range(n)]
    # Wilder seed = simple average of first `period` true ranges (skip index 0
    # which has no previous close).
    seed = sum(trs[1:period + 1]) / period
    out[period] = seed
    prev = seed
    for i in range(period + 1, n):
        prev = (prev * (period - 1) + trs[i]) / period
        out[i] = prev
    return out


def pivot_high(candles: Sequence[Candle], idx: int, left: int, right: int) -> bool:
    """True if candle ``idx`` is a swing-high pivot (its high is strictly the
    highest within ``left`` bars before and ``right`` bars after)."""
    if idx - left < 0 or idx + right >= len(candles):
        return False
    h = candles[idx].high
    for j in range(idx - left, idx + right + 1):
        if j != idx and candles[j].high >= h:
            return False
    return True


def pivot_low(candles: Sequence[Candle], idx: int, left: int, right: int) -> bool:
    if idx - left < 0 or idx + right >= len(candles):
        return False
    lo = candles[idx].low
    for j in range(idx - left, idx + right + 1):
        if j != idx and candles[j].low <= lo:
            return False
    return True


def last_pivot_high(candles: Sequence[Candle], upto: int, left: int, right: int) -> Optional[float]:
    """Most recent confirmed swing-high price at or before index ``upto``."""
    for idx in range(upto - right, left - 1, -1):
        if pivot_high(candles, idx, left, right):
            return candles[idx].high
    return None


def last_pivot_low(candles: Sequence[Candle], upto: int, left: int, right: int) -> Optional[float]:
    for idx in range(upto - right, left - 1, -1):
        if pivot_low(candles, idx, left, right):
            return candles[idx].low
    return None
