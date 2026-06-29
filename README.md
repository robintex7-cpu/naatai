# naatai

A modular, AI-driven trading system. This repository is a **scaffold**: the full
architecture is laid out as independent, swappable stages connected by typed data
contracts. The wiring and interfaces are complete; the model/strategy internals
are stubs (`NotImplementedError`) ready to be filled in stage by stage.

## Architecture

```
                         DATA LAKE
                            |
        +-------------------+-------------------+
   Market Data          Macro Data         On-chain Data
        +-------------------+-------------------+
                            |
                   Feature Engineering
                            |
                   Regime Detection AI
                            |
        +---------------+---+-----------+
   Price Model     Order Book AI     Macro AI
        +---------------+---------------+
                            |
                    Ensemble Engine
                            |
                  Probability Forecast
                            |
                  Risk Management AI
                            |
                    Execution Engine
                            |
                  Performance Monitor
                            |
                 Continuous Retraining  --> refreshes models, closes the loop
```

## Layout

| Stage | Package | Responsibility |
|-------|---------|----------------|
| Data lake | `naatai.data_lake` | Ingest market / macro / on-chain data; serve point-in-time snapshots |
| Feature engineering | `naatai.features` | Turn a raw snapshot into model-ready feature vectors |
| Regime detection | `naatai.regime` | Classify the current market regime; gates everything downstream |
| Models | `naatai.models` | Price, order-book, and macro forecasts behind one `Model` interface |
| Ensemble | `naatai.ensemble` | Regime-aware weighting + calibration -> probability forecast |
| Risk management | `naatai.risk` | Size positions, enforce limits, hold veto/kill-switch power |
| Execution | `naatai.execution` | Work orders into the market (simulated in backtest/paper, live otherwise) |
| Monitoring | `naatai.monitoring` | Track PnL/risk, detect decay/drift, trigger retraining |
| Retraining | `naatai.retraining` | Refit -> walk-forward validate -> gated promotion |

Stages communicate **only** through the dataclasses in `naatai.types`
(`RawData`, `FeatureVector`, `ModelForecast`, `ProbabilityForecast`,
`TargetPosition`, `Fill`), so any single stage can be replaced without touching
the others. The orchestrator lives in `naatai.pipeline`.

## Quick start

```bash
python -m pip install -e ".[dev]"
pytest -q
```

```python
from naatai import build_default, Config, RunMode

pipeline = build_default(Config(mode=RunMode.BACKTEST))
# pipeline.step(asof, equity)  # raises NotImplementedError until stages are filled in
```

## Implementation order (suggested)

1. **Data lake** — get clean, point-in-time data flowing first; everything else
   is meaningless without leakage-safe inputs.
2. **Feature engineering** — deterministic, no look-ahead.
3. **One model end-to-end** (start with `PriceModel`) + a trivial ensemble.
4. **Risk + execution** in backtest mode -> first PnL curve.
5. **Monitoring**, then **regime detection**, then the remaining models.
6. **Continuous retraining** last — it's the easiest place to overfit, so build
   the validation gate carefully.

## Status

Scaffold only. No strategy logic, no live trading. Not investment advice.
