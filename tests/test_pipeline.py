"""Smoke tests for the scaffold.

These verify the architecture is *wired* correctly — components instantiate and
the contracts line up — without asserting any (not-yet-implemented) behaviour.
"""

from __future__ import annotations

from datetime import datetime, timezone

import pytest

from naatai import Config, RunMode, build_default
from naatai.pipeline import Pipeline


def test_build_default_wires_all_stages():
    pipeline = build_default(Config(mode=RunMode.BACKTEST))
    assert isinstance(pipeline, Pipeline)
    # All three models are present and uniquely named.
    names = {m.name for m in pipeline.models}
    assert names == {"price", "order_book", "macro"}


def test_step_runs_until_first_unimplemented_stage():
    """`step` should reach the data lake first and surface NotImplementedError,
    proving the orchestration order is intact rather than failing on wiring."""
    pipeline = build_default(Config(mode=RunMode.BACKTEST))
    with pytest.raises(NotImplementedError):
        pipeline.step(datetime(2026, 1, 1, tzinfo=timezone.utc), equity=100_000.0)
