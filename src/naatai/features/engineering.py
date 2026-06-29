"""Feature engineering.

Transforms a `RawData` snapshot into one `FeatureVector` per symbol. Keep this
deterministic and point-in-time correct: every feature must be computable from
data available at `raw.asof`. Any look-ahead here silently corrupts both the
models and the backtest.
"""

from __future__ import annotations

from naatai.types import FeatureVector, RawData


class FeatureEngineer:
    def __init__(self, symbols: tuple[str, ...]):
        self.symbols = symbols

    def transform(self, raw: RawData) -> list[FeatureVector]:
        """Compute features for each symbol.

        Typical feature families:
          * price/returns: momentum, volatility, RSI, MACD, realised vol
          * order book: depth imbalance, spread, microprice
          * macro: rate level/changes, risk-on/off proxies
          * on-chain: net exchange flows, address activity, fee pressure
        """
        vectors: list[FeatureVector] = []
        for symbol in self.symbols:
            features = self._compute(symbol, raw)
            vectors.append(
                FeatureVector(asof=raw.asof, symbol=symbol, features=features)
            )
        return vectors

    def _compute(self, symbol: str, raw: RawData) -> dict[str, float]:
        raise NotImplementedError("Implement feature computation per symbol.")
