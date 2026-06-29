"""Macro model: slower-moving signal from macro and on-chain context.

Captures risk-on/off backdrop and structural flows that bias the shorter-horizon
models. Often used as a conditioning/overlay signal rather than a standalone one.
"""

from __future__ import annotations

from typing import Any, Sequence

from naatai.models.base import Model
from naatai.types import FeatureVector, ModelForecast, Regime


class MacroModel(Model):
    name = "macro"

    def predict(
        self, features: Sequence[FeatureVector], regime: Regime
    ) -> list[ModelForecast]:
        raise NotImplementedError("Implement macro model inference.")

    def fit(self, training_data: Any) -> None:
        raise NotImplementedError("Implement macro model training.")
