"""Risk management.

Converts edge (the probability forecast) into a position, subject to hard
constraints. This stage has veto power: it can flatten or refuse a trade
regardless of how strong the signal looks.

Responsibilities:
  * sizing — e.g. fractional-Kelly / vol-targeting from `p_up` and expected_return
  * limits — per-position risk, gross exposure, per-regime caps
  * portfolio — correlation/concentration, drawdown throttle, kill-switch
"""

from __future__ import annotations

from typing import Sequence

from naatai.config import Config
from naatai.types import ProbabilityForecast, TargetPosition


class RiskManager:
    def __init__(self, config: Config):
        self.config = config

    def size(
        self,
        forecasts: Sequence[ProbabilityForecast],
        equity: float,
    ) -> list[TargetPosition]:
        """Produce risk-capped target positions for the given equity."""
        raise NotImplementedError(
            "Implement position sizing and risk limit enforcement."
        )
