"""End-to-end orchestrator wiring every stage of the architecture together.

    data lake -> features -> regime -> models -> ensemble
              -> risk -> execution -> monitor -> (retraining)

`build_default` assembles a pipeline from a `Config`; `Pipeline.step` runs a
single decision cycle for one timestamp. The stubs raise `NotImplementedError`,
so this is the skeleton you flesh out component by component.
"""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from typing import Sequence

from naatai.config import Config
from naatai.data_lake import DataLake, MacroDataSource, MarketDataSource, OnChainDataSource
from naatai.ensemble import EnsembleEngine
from naatai.execution import ExecutionEngine
from naatai.features import FeatureEngineer
from naatai.models import MacroModel, Model, OrderBookModel, PriceModel
from naatai.monitoring import PerformanceMonitor
from naatai.regime import RegimeDetector
from naatai.retraining import RetrainingLoop
from naatai.risk import RiskManager
from naatai.types import Fill


@dataclass
class Pipeline:
    config: Config
    data_lake: DataLake
    features: FeatureEngineer
    regime: RegimeDetector
    models: Sequence[Model]
    ensemble: EnsembleEngine
    risk: RiskManager
    execution: ExecutionEngine
    monitor: PerformanceMonitor
    retraining: RetrainingLoop

    def step(self, asof: datetime, equity: float) -> list[Fill]:
        """Run one decision cycle for timestamp `asof`."""
        raw = self.data_lake.snapshot(asof)
        feats = self.features.transform(raw)
        regime = self.regime.detect(feats)

        forecasts = []
        for model in self.models:
            forecasts.extend(model.predict(feats, regime))

        probs = self.ensemble.combine(forecasts, regime, asof)
        targets = self.risk.size(probs, equity)
        fills = self.execution.execute(targets)

        self.monitor.record(probs, fills)
        if self.monitor.should_retrain():
            self.retraining.run_once()
        return fills


def build_default(config: Config | None = None) -> Pipeline:
    """Assemble a pipeline with default component wiring from `config`."""
    config = config or Config.from_env()
    symbols = config.symbols

    data_lake = DataLake(
        market=MarketDataSource(symbols),
        macro=MacroDataSource(),
        onchain=OnChainDataSource(),
    )
    models: list[Model] = [
        PriceModel(horizon=config.horizon),
        OrderBookModel(),
        MacroModel(),
    ]
    return Pipeline(
        config=config,
        data_lake=data_lake,
        features=FeatureEngineer(symbols),
        regime=RegimeDetector(),
        models=models,
        ensemble=EnsembleEngine(),
        risk=RiskManager(config),
        execution=ExecutionEngine(config),
        monitor=PerformanceMonitor(),
        retraining=RetrainingLoop(config, models),
    )
