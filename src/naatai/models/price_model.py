"""Price model: directional / expected-return forecast from price features.

Candidate implementations: gradient-boosted trees, a temporal CNN, or an LSTM
over the price/returns feature block.
"""

from __future__ import annotations

from typing import Any, Sequence

from naatai.models.base import Model
from naatai.types import FeatureVector, ModelForecast, Regime


class PriceModel(Model):
    name = "price"

    def __init__(self, horizon: str = "1h"):
        self.horizon = horizon

    def predict(
        self, features: Sequence[FeatureVector], regime: Regime
    ) -> list[ModelForecast]:
        raise NotImplementedError("Implement price-model inference.")

    def fit(self, training_data: Any) -> None:
        raise NotImplementedError("Implement price-model training.")
