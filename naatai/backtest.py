"""A simple, honest walk-forward backtester for the setup.

For every closed candle it re-evaluates the strategy using *only* the candles
up to that point (no look-ahead), simulates entering at the next candle's open,
and exits on stop, first target, or a max-hold timeout.  Reports win rate,
average R, profit factor and an equity curve in R multiples.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import List, Optional, Sequence

from .indicators import Candle
from .signals import Decision, Side
from .strategy import Strategy, StrategyConfig


@dataclass
class Trade:
    side: str
    entry_time: int
    entry: float
    stop: float
    target: float
    exit_time: int = 0
    exit: float = 0.0
    outcome: str = ""      # "target" | "stop" | "timeout"
    r: float = 0.0         # realized reward in R (risk multiples)


@dataclass
class BacktestResult:
    symbol: str
    timeframe: str
    trades: List[Trade] = field(default_factory=list)

    @property
    def n(self) -> int:
        return len(self.trades)

    @property
    def wins(self) -> int:
        return sum(1 for t in self.trades if t.r > 0)

    @property
    def win_rate(self) -> float:
        return self.wins / self.n if self.n else 0.0

    @property
    def total_r(self) -> float:
        return sum(t.r for t in self.trades)

    @property
    def avg_r(self) -> float:
        return self.total_r / self.n if self.n else 0.0

    @property
    def profit_factor(self) -> float:
        gains = sum(t.r for t in self.trades if t.r > 0)
        losses = -sum(t.r for t in self.trades if t.r < 0)
        return gains / losses if losses else float("inf")

    def summary(self) -> str:
        if not self.n:
            return f"{self.symbol} {self.timeframe}: no trades."
        pf = self.profit_factor
        pf_s = "inf" if pf == float("inf") else f"{pf:.2f}"
        return (
            f"{self.symbol} {self.timeframe}: {self.n} trades | "
            f"win {self.win_rate:.0%} | avg {self.avg_r:+.2f}R | "
            f"total {self.total_r:+.2f}R | PF {pf_s}"
        )


def backtest(symbol: str, timeframe: str, candles: Sequence[Candle],
             config: Optional[StrategyConfig] = None,
             max_hold_bars: int = 30,
             warmup: Optional[int] = None) -> BacktestResult:
    cfg = config or StrategyConfig()
    strat = Strategy(cfg)
    result = BacktestResult(symbol, timeframe)
    n = len(candles)
    start = warmup if warmup is not None else cfg.min_candles
    in_trade_until = -1   # index up to which we're already in a position

    for i in range(start, n - 1):
        if i <= in_trade_until:
            continue
        window = candles[:i + 1]              # closed candles up to & incl. i
        sig = strat.evaluate(symbol, timeframe, window)
        if sig.decision != Decision.TAKE or sig.side == Side.NONE:
            continue
        if sig.stop is None or not sig.targets:
            continue

        entry_candle = candles[i + 1]         # enter at next open
        entry = entry_candle.open
        stop = sig.stop
        target = sig.targets[0]
        risk = abs(entry - stop)
        if risk <= 0:
            continue
        trade = Trade(side=sig.side.value, entry_time=entry_candle.open_time,
                      entry=entry, stop=stop, target=target)

        # walk forward until stop / target / timeout
        exit_idx = min(i + 1 + max_hold_bars, n - 1)
        for j in range(i + 1, exit_idx + 1):
            c = candles[j]
            if sig.side == Side.LONG:
                if c.low <= stop:
                    trade.outcome, trade.exit = "stop", stop
                    break
                if c.high >= target:
                    trade.outcome, trade.exit = "target", target
                    break
            else:
                if c.high >= stop:
                    trade.outcome, trade.exit = "stop", stop
                    break
                if c.low <= target:
                    trade.outcome, trade.exit = "target", target
                    break
            trade.exit_time = c.close_time
            trade.exit = c.close
        else:
            j = exit_idx
        if not trade.outcome:
            trade.outcome = "timeout"
        trade.exit_time = candles[j].close_time
        # realized R
        if sig.side == Side.LONG:
            trade.r = (trade.exit - entry) / risk
        else:
            trade.r = (entry - trade.exit) / risk
        result.trades.append(trade)
        in_trade_until = j                    # no overlapping trades

    return result
