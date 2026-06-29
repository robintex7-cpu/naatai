"""Regime detection: classify the current market state.

The regime gates everything downstream — which models to trust, how aggressive
risk should be, and whether to trade at all.
"""

from naatai.regime.detector import RegimeDetector

__all__ = ["RegimeDetector"]
