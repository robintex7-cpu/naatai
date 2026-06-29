"""Continuous retraining loop.

Periodically (or when the monitor flags decay) refits the models on fresh data,
validates them out-of-sample, and only promotes a new version if it clears a
performance bar. This is where overfitting is most dangerous, so validation and
the deploy gate matter more than the training itself.
"""

from __future__ import annotations

from typing import Sequence

from naatai.config import Config
from naatai.models.base import Model


class RetrainingLoop:
    def __init__(self, config: Config, models: Sequence[Model]):
        self.config = config
        self.models = list(models)

    def run_once(self) -> dict[str, bool]:
        """Refit each model, validate, and promote if it beats the deploy gate.

        Returns a map of ``{model_name: promoted}``.
        """
        raise NotImplementedError(
            "Implement refit -> walk-forward validation -> gated promotion."
        )

    def _passes_gate(self, sharpe: float) -> bool:
        return sharpe >= self.config.min_sharpe_to_deploy
