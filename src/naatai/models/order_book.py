"""Order-book model: short-horizon signal from market microstructure.

Inputs are order-book features (depth imbalance, spread, microprice, queue
dynamics). Typically the fastest-decaying of the three signals.
"""

from __future__ import annotations

from typing import Any, Sequence

from naatai.models.base import Model
from naatai.types import FeatureVector, ModelForecast, Regime


class OrderBookModel(Model):
    name = "order_book"

    def predict(
        self, features: Sequence[FeatureVector], regime: Regime
    ) -> list[ModelForecast]:
        raise NotImplementedError("Implement order-book model inference.")

    def fit(self, training_data: Any) -> None:
        raise NotImplementedError("Implement order-book model training.")
