"""Market data feed for Binance USDⓈ-M Futures.

Only the *public* market-data endpoint is used (``/fapi/v1/klines``), so **no
API key is required** to pull candles and generate signals.  Keys are only
needed if you later add order execution, which this project deliberately does
not do (signals & alerts only).

Networking uses the standard library (``urllib``) so there is nothing to pip
install for the core engine to run.
"""
from __future__ import annotations

import json
import time
import urllib.parse
import urllib.request
from typing import List, Optional

from .indicators import Candle

# Binance USDⓈ-M Futures base.  Override via env / config if you use a mirror.
FAPI_BASE = "https://fapi.binance.com"

# Binance kline interval strings we support, mapped to seconds (for backtest).
INTERVAL_SECONDS = {
    "15m": 900, "30m": 1800,
    "1h": 3600, "2h": 7200, "4h": 14400, "6h": 21600, "8h": 28800, "12h": 43200,
    "1d": 86400, "3d": 259200, "1w": 604800,
}


class DataFeedError(RuntimeError):
    pass


def _http_get(url: str, timeout: int = 20) -> object:
    req = urllib.request.Request(url, headers={"User-Agent": "naatai/0.1"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:  # type: ignore[attr-defined]
        body = e.read().decode("utf-8", "replace") if hasattr(e, "read") else ""
        raise DataFeedError(f"HTTP {e.code} from Binance: {body[:200]}") from e
    except Exception as e:  # noqa: BLE001
        raise DataFeedError(f"request failed: {e}") from e


def fetch_klines(symbol: str, interval: str, limit: int = 200,
                 base_url: str = FAPI_BASE) -> List[Candle]:
    """Fetch the most recent ``limit`` klines for ``symbol`` (e.g. ``BTCUSDT``).

    The most recent candle returned by Binance is still *open*; we drop it so
    the strategy only ever sees closed candles.
    """
    if interval not in INTERVAL_SECONDS:
        raise DataFeedError(f"unsupported interval '{interval}'")
    params = urllib.parse.urlencode({
        "symbol": symbol.upper(),
        "interval": interval,
        "limit": min(max(limit, 10), 1500),
    })
    url = f"{base_url}/fapi/v1/klines?{params}"
    raw = _http_get(url)
    if not isinstance(raw, list):
        raise DataFeedError(f"unexpected response: {str(raw)[:200]}")
    candles = [_row_to_candle(r) for r in raw]
    # Drop the last (still-forming) candle if it hasn't closed yet.
    now_ms = int(time.time() * 1000)
    if candles and candles[-1].close_time > now_ms:
        candles = candles[:-1]
    return candles


def _row_to_candle(r: list) -> Candle:
    # Binance kline row layout:
    # [openTime, open, high, low, close, volume, closeTime, ...]
    return Candle(
        open_time=int(r[0]),
        open=float(r[1]),
        high=float(r[2]),
        low=float(r[3]),
        close=float(r[4]),
        volume=float(r[5]),
        close_time=int(r[6]),
    )


def fetch_top_symbols(quote: str = "USDT", top: int = 20,
                      base_url: str = FAPI_BASE) -> List[str]:
    """Return the most actively traded perpetuals by 24h quote volume.

    Handy for "scan the whole market" mode instead of a hand-picked list.
    """
    url = f"{base_url}/fapi/v1/ticker/24hr"
    raw = _http_get(url)
    if not isinstance(raw, list):
        raise DataFeedError("unexpected ticker response")
    rows = [r for r in raw if str(r.get("symbol", "")).endswith(quote)]
    rows.sort(key=lambda r: float(r.get("quoteVolume", 0) or 0), reverse=True)
    return [r["symbol"] for r in rows[:top]]


# ----------------------------------------------------------------------
# Synthetic feed — lets the engine and tests run with no network access.
# ----------------------------------------------------------------------
def synthetic_setup(n: int = 80, seed: int = 7) -> List[Candle]:
    """Generate a candle series that deliberately contains the setup:
    impulse up -> contraction -> breakout up.  Used by tests & ``--demo``.
    """
    import random

    rng = random.Random(seed)
    price = 100.0
    candles: List[Candle] = []
    t = 1_700_000_000_000
    step = INTERVAL_SECONDS["1h"] * 1000

    def push(o, h, l, c, v):
        nonlocal t
        candles.append(Candle(t, o, h, l, c, v, t + step - 1))
        t += step

    # 1) quiet base (long enough to satisfy the strategy's min_candles warmup)
    for _ in range(50):
        o = price
        c = price + rng.uniform(-0.3, 0.3)
        h = max(o, c) + rng.uniform(0, 0.2)
        l = min(o, c) - rng.uniform(0, 0.2)
        push(o, h, l, c, rng.uniform(80, 120)); price = c
    # 2) impulse / range expansion (big full-body green candles)
    for _ in range(6):
        o = price
        c = price + rng.uniform(1.5, 2.5)
        h = c + rng.uniform(0, 0.15)
        l = o - rng.uniform(0, 0.15)
        push(o, h, l, c, rng.uniform(250, 350)); price = c
    # 3) contraction (small bodies, tightening)
    for _ in range(6):
        o = price
        c = price + rng.uniform(-0.25, 0.25)
        h = max(o, c) + rng.uniform(0, 0.2)
        l = min(o, c) - rng.uniform(0, 0.2)
        push(o, h, l, c, rng.uniform(70, 110)); price = c
    # 4) breakout (full-body green, high volume)
    o = price
    c = price + 2.2
    h = c + 0.1
    l = o - 0.1
    push(o, h, l, c, 400); price = c
    # 5) follow-through padding so it's the last closed candle that breaks out
    return candles
