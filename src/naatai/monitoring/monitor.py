"""Performance monitor.

Records fills and forecasts, computes running performance/risk metrics, and
watches for model decay or data drift. It closes the loop in two directions:
  * alerts/kill-switch back to risk & execution when something looks wrong
  * a `should_retrain` signal to the continuous-retraining loop
"""

from __future__ import annotations

from typing import Sequence

from naatai.types import Fill, ProbabilityForecast


class PerformanceMonitor:
    def __init__(self) -> None:
        self._fills: list[Fill] = []

    def record(
        self,
        forecasts: Sequence[ProbabilityForecast],
        fills: Sequence[Fill],
    ) -> None:
        """Persist this cycle's forecasts and fills for later evaluation."""
        self._fills.extend(fills)

    def metrics(self) -> dict[str, float]:
        """Return running metrics: PnL, Sharpe, hit-rate, drawdown, calibration."""
        raise NotImplementedError("Implement performance/risk metric computation.")

    def should_retrain(self) -> bool:
        """Signal the retraining loop when decay/drift crosses a threshold."""
        raise NotImplementedError("Implement drift/decay detection.")
