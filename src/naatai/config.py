"""Central configuration.

Values are read from environment variables where it makes sense so the same
code runs in backtest, paper, and live modes. Nothing here is secret by
default; real credentials should come from the environment, never the repo.
"""

from __future__ import annotations

import os
from dataclasses import dataclass, field
from enum import Enum


class RunMode(str, Enum):
    BACKTEST = "backtest"
    PAPER = "paper"
    LIVE = "live"


@dataclass(frozen=True)
class Config:
    mode: RunMode = RunMode.BACKTEST
    symbols: tuple[str, ...] = ("BTC-USD", "ETH-USD")
    horizon: str = "1h"

    # Risk
    max_gross_exposure: float = 1.0      # fraction of equity
    max_position_risk: float = 0.02      # fraction of equity per position
    target_volatility: float = 0.20      # annualised

    # Retraining
    retrain_every: str = "1d"
    min_sharpe_to_deploy: float = 0.5

    data_lake_uri: str = field(
        default_factory=lambda: os.getenv("NAATAI_DATA_LAKE_URI", "file://./data")
    )

    @classmethod
    def from_env(cls) -> "Config":
        mode = RunMode(os.getenv("NAATAI_MODE", RunMode.BACKTEST.value))
        return cls(mode=mode)
