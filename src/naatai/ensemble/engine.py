"""Ensemble engine.

Combines the per-model `ModelForecast`s into a single, *calibrated*
`ProbabilityForecast` per symbol. Two responsibilities:

  1. Weighting — how much to trust each model. Weights are regime-aware
     (e.g. the order-book model is downweighted in crisis regimes) and can be
     learned (stacking) or set from rolling out-of-sample performance.
  2. Calibration — map the blended score to an honest probability, so that
     "70%" actually wins ~70% of the time. Risk sizing depends on this.
"""

from __future__ import annotations

from collections import defaultdict
from datetime import datetime
from typing import Mapping, Sequence

from naatai.types import ModelForecast, ProbabilityForecast, Regime


class EnsembleEngine:
    def __init__(self, weights: Mapping[str, float] | None = None):
        # Default: equal weight across models; override per-regime in `combine`.
        self.weights = dict(weights or {})

    def combine(
        self,
        forecasts: Sequence[ModelForecast],
        regime: Regime,
        asof: datetime,
    ) -> list[ProbabilityForecast]:
        """Blend forecasts per symbol and calibrate to a probability."""
        by_symbol: dict[str, list[ModelForecast]] = defaultdict(list)
        for f in forecasts:
            by_symbol[f.symbol].append(f)

        results: list[ProbabilityForecast] = []
        for symbol, group in by_symbol.items():
            results.append(self._combine_symbol(symbol, group, regime, asof))
        return results

    def _combine_symbol(
        self,
        symbol: str,
        group: Sequence[ModelForecast],
        regime: Regime,
        asof: datetime,
    ) -> ProbabilityForecast:
        raise NotImplementedError(
            "Implement regime-aware weighting + probability calibration."
        )
