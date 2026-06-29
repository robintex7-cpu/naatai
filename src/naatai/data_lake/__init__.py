"""Data lake: ingestion of market, macro, and on-chain data, plus storage.

The lake is the single source of truth. Each source is responsible for pulling
its own data and writing it in a consistent, queryable shape; downstream stages
only ever read from the lake, never directly from an exchange or API.
"""

from naatai.data_lake.market_data import MarketDataSource
from naatai.data_lake.macro_data import MacroDataSource
from naatai.data_lake.onchain_data import OnChainDataSource
from naatai.data_lake.storage import DataLake

__all__ = [
    "MarketDataSource",
    "MacroDataSource",
    "OnChainDataSource",
    "DataLake",
]
