"""Market data source: OHLCV, trades, and order-book snapshots."""

from __future__ import annotations

from datetime import datetime
from typing import Any, Mapping


class MarketDataSource:
    """Pulls price/volume and order-book data from exchanges.

    A concrete implementation would wrap exchange REST/websocket clients (e.g.
    ccxt) and normalise symbols, timestamps, and precision.
    """

    def __init__(self, symbols: tuple[str, ...]):
        self.symbols = symbols

    def fetch(self, asof: datetime) -> Mapping[str, Any]:
        """Return market data as of `asof` for all configured symbols.

        Returns a mapping like ``{symbol: {"ohlcv": ..., "order_book": ...}}``.
        """
        raise NotImplementedError("Wire up an exchange client here.")
