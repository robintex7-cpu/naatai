"""Signal / decision data structures."""
from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import List, Optional


class Side(str, Enum):
    LONG = "LONG"
    SHORT = "SHORT"
    NONE = "NONE"


class Decision(str, Enum):
    TAKE = "TAKE"          # a valid setup fired -> a trade is suggested
    WAIT = "WAIT"          # conditions forming but not confirmed
    NO_TRADE = "NO_TRADE"  # nothing here, stand aside


@dataclass
class Signal:
    symbol: str
    timeframe: str
    decision: Decision
    side: Side = Side.NONE
    label: str = ""                 # e.g. "1st Entry breakout", "Pivot Breaker (2nd entry)"
    price: float = 0.0              # reference / entry price (breakout close)
    stop: Optional[float] = None
    targets: List[float] = field(default_factory=list)
    confidence: int = 0             # 0..100
    box_high: Optional[float] = None
    box_low: Optional[float] = None
    candle_open_time: int = 0       # open time (ms) of the signal candle — used for dedup
    reasons: List[str] = field(default_factory=list)   # why we took it
    blockers: List[str] = field(default_factory=list)  # why we did NOT

    @property
    def risk_reward(self) -> Optional[float]:
        if self.stop is None or not self.targets or self.price == 0:
            return None
        risk = abs(self.price - self.stop)
        if risk == 0:
            return None
        reward = abs(self.targets[0] - self.price)
        return round(reward / risk, 2)

    def is_actionable(self) -> bool:
        return self.decision == Decision.TAKE and self.side != Side.NONE

    def headline(self) -> str:
        if self.decision == Decision.TAKE:
            arrow = "🟢 BUY" if self.side == Side.LONG else "🔴 SELL"
            return f"{arrow} {self.symbol} [{self.timeframe}] — {self.label} ({self.confidence}%)"
        if self.decision == Decision.WAIT:
            return f"🟡 WATCH {self.symbol} [{self.timeframe}] — {self.label}"
        return f"⚪ NO TRADE {self.symbol} [{self.timeframe}]"

    def detail(self) -> str:
        lines = [self.headline()]
        if self.decision == Decision.TAKE:
            lines.append(f"   Entry ≈ {self.price:g}")
            if self.stop is not None:
                lines.append(f"   Stop  = {self.stop:g}")
            if self.targets:
                tg = ", ".join(f"{t:g}" for t in self.targets)
                lines.append(f"   Targets = {tg}")
            rr = self.risk_reward
            if rr is not None:
                lines.append(f"   R:R (to T1) = {rr}")
        if self.reasons:
            lines.append("   Why: " + "; ".join(self.reasons))
        if self.blockers and self.decision != Decision.TAKE:
            lines.append("   Blocked by: " + "; ".join(self.blockers))
        return "\n".join(lines)
