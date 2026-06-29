"""Common model interface.

Every predictive model is a `Model`: it can be trained on historical features
and produces a `ModelForecast` per symbol at inference time. Keeping one
interface lets the ensemble, retraining loop, and monitor stay model-agnostic.
"""

from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any, Sequence

from naatai.types import FeatureVector, ModelForecast, Regime


class Model(ABC):
    name: str = "base"

    @abstractmethod
    def predict(
        self, features: Sequence[FeatureVector], regime: Regime
    ) -> list[ModelForecast]:
        """Produce one forecast per symbol present in `features`."""

    @abstractmethod
    def fit(self, training_data: Any) -> None:
        """Train or refit the model. Called by the retraining loop."""
