"""Regime detection model.

A concrete version might use a Hidden Markov Model, a Gaussian mixture, or a
classifier over volatility/trend/liquidity features. Output is a single
`Regime` label (plus, optionally, class probabilities in `extra`).
"""

from __future__ import annotations

from naatai.types import FeatureVector, Regime


class RegimeDetector:
    def detect(self, features: list[FeatureVector]) -> Regime:
        """Return the prevailing market regime given the latest features."""
        raise NotImplementedError("Implement regime classification.")
