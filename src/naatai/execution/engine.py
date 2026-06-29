"""Execution engine.

Takes target positions, diffs them against current holdings, and works the
resulting orders into the market while minimising slippage and fees (limit vs
market, TWAP/VWAP slicing, post-only, etc.). In backtest/paper mode this
simulates fills; in live mode it talks to the broker/exchange.
"""

from __future__ import annotations

from typing import Sequence

from naatai.config import Config, RunMode
from naatai.types import Fill, TargetPosition


class ExecutionEngine:
    def __init__(self, config: Config):
        self.config = config

    def execute(self, targets: Sequence[TargetPosition]) -> list[Fill]:
        """Submit/work orders to reach `targets`; return resulting fills."""
        if self.config.mode is RunMode.LIVE:
            raise NotImplementedError("Wire up the live broker/exchange client.")
        raise NotImplementedError("Implement simulated execution for backtest/paper.")
