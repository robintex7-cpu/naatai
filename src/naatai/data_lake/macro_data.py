"""Macro data source: rates, FX, equity indices, liquidity, calendar events."""

from __future__ import annotations

from datetime import datetime
from typing import Any, Mapping


class MacroDataSource:
    """Pulls macroeconomic series (e.g. from FRED, central banks, providers)."""

    def __init__(self, series: tuple[str, ...] = ("DXY", "US10Y", "VIX")):
        self.series = series

    def fetch(self, asof: datetime) -> Mapping[str, Any]:
        """Return the latest value of each macro series at or before `asof`."""
        raise NotImplementedError("Wire up a macro data provider here.")
