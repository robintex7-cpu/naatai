"""Storage layer that fronts the three sources and assembles a `RawData` bundle.

In production the read path would hit a columnar store (Parquet on object
storage, a time-series DB, etc.). Here it simply orchestrates the sources and
returns a point-in-time, leakage-safe snapshot.
"""

from __future__ import annotations

from datetime import datetime

from naatai.data_lake.macro_data import MacroDataSource
from naatai.data_lake.market_data import MarketDataSource
from naatai.data_lake.onchain_data import OnChainDataSource
from naatai.types import RawData


class DataLake:
    def __init__(
        self,
        market: MarketDataSource,
        macro: MacroDataSource,
        onchain: OnChainDataSource,
    ):
        self.market = market
        self.macro = macro
        self.onchain = onchain

    def snapshot(self, asof: datetime) -> RawData:
        """Assemble a time-aligned snapshot. Must be point-in-time correct:
        only data observable at or before `asof` may be returned."""
        return RawData(
            asof=asof,
            market=self.market.fetch(asof),
            macro=self.macro.fetch(asof),
            onchain=self.onchain.fetch(asof),
        )
