"""On-chain data source: flows, active addresses, exchange balances, fees."""

from __future__ import annotations

from datetime import datetime
from typing import Any, Mapping


class OnChainDataSource:
    """Pulls blockchain metrics (e.g. from Glassnode-style providers / nodes)."""

    def __init__(self, metrics: tuple[str, ...] = ("exchange_netflow", "active_addresses")):
        self.metrics = metrics

    def fetch(self, asof: datetime) -> Mapping[str, Any]:
        """Return on-chain metrics at or before `asof`."""
        raise NotImplementedError("Wire up an on-chain data provider here.")
