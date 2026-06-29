"""Shared data contracts passed between pipeline stages.

These dataclasses are the *interfaces* between components. Stages depend on
these types rather than on each other's internals, so any stage can be swapped
out as long as it honours the contract.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
from typing import Any, Mapping


class Regime(str, Enum):
    """Market regime label emitted by the regime-detection model."""

    BULL = "bull"
    BEAR = "bear"
    CHOP = "chop"           # range-bound / mean-reverting
    HIGH_VOL = "high_vol"
    CRISIS = "crisis"
    UNKNOWN = "unknown"


class Side(str, Enum):
    BUY = "buy"
    SELL = "sell"
    FLAT = "flat"


@dataclass(frozen=True)
class RawData:
    """A bundle of raw, time-aligned data pulled from the data lake."""

    asof: datetime
    market: Mapping[str, Any] = field(default_factory=dict)
    macro: Mapping[str, Any] = field(default_factory=dict)
    onchain: Mapping[str, Any] = field(default_factory=dict)


@dataclass(frozen=True)
class FeatureVector:
    """Engineered features for a single timestamp/asset."""

    asof: datetime
    symbol: str
    features: Mapping[str, float]


@dataclass(frozen=True)
class ModelForecast:
    """Output of a single predictive model.

    `direction` is a signed expected return (or score); `confidence` is the
    model's self-reported reliability in [0, 1].
    """

    name: str
    symbol: str
    direction: float
    confidence: float
    horizon: str  # e.g. "1h", "1d"
    extra: Mapping[str, Any] = field(default_factory=dict)


@dataclass(frozen=True)
class ProbabilityForecast:
    """Ensemble output: a calibrated probability distribution over outcomes."""

    symbol: str
    asof: datetime
    p_up: float          # probability price is higher at the horizon
    expected_return: float
    regime: Regime
    horizon: str
    contributions: Mapping[str, float] = field(default_factory=dict)


@dataclass(frozen=True)
class TargetPosition:
    """Risk-adjusted position the system wants to hold."""

    symbol: str
    side: Side
    size: float          # in base-currency units or notional
    max_loss: float      # risk budget allocated to this position
    rationale: str = ""


@dataclass(frozen=True)
class Fill:
    """Execution result for a target position."""

    symbol: str
    side: Side
    filled_size: float
    avg_price: float
    fees: float
    submitted_at: datetime
    completed_at: datetime
