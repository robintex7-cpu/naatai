#!/usr/bin/env python3
"""Crypto directional scanner (CoinGecko-backed).

Offshore derivatives exchanges (Binance, Bybit, OKX) block US/cloud IPs, and
GitHub's hosted runners are US-based — so those APIs return 451/403 in CI.
CoinGecko's public API is globally reachable, needs no key, and returns hundreds
of coins WITH a 7-day hourly price history in a single call, which is enough to
compute real trend/momentum signals, volatility-based stops, and an honest
backtest hit-rate.

The output is a directional BULL / BEAR / NEUTRAL call per major coin. Direction
is what matters for taking a long/short on the perpetual — spot and perp move
together — so these signals are tradeable on your exchange of choice.

Pure standard library: the GitHub Action stays dependency-free.
"""

from __future__ import annotations

import json
import time
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

BASE = "https://api.coingecko.com/api/v3"
PAGES = 2            # 250 coins/page -> top ~500 by volume
PER_PAGE = 250
MIN_VOL = 10_000_000  # skip coins with < $10M 24h volume
OUT = Path(__file__).resolve().parents[1] / "docs" / "data.json"


def _get(path: str, params: dict | None = None, retries: int = 4):
    qs = ""
    if params:
        qs = "?" + "&".join(f"{k}={v}" for k, v in params.items())
    url = BASE + path + qs
    last = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "naatai-scanner/1.0",
                                                       "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.loads(r.read().decode())
        except urllib.error.HTTPError as e:
            last = f"HTTP {e.code}"
            if e.code in (429, 503, 502):     # rate limited / transient
                time.sleep(3 * (attempt + 1))
                continue
            time.sleep(1)
        except Exception as e:  # noqa: BLE001
            last = f"{type(e).__name__}: {e}"
            time.sleep(2)
    raise RuntimeError(f"request failed: {url} ({last})")


def ema(values: list[float], period: int) -> list[float]:
    if not values:
        return []
    k = 2 / (period + 1)
    out = [values[0]]
    for v in values[1:]:
        out.append(v * k + out[-1] * (1 - k))
    return out


def rsi(closes: list[float], period: int = 14) -> float:
    if len(closes) <= period:
        return 50.0
    gains, losses = [], []
    for i in range(1, len(closes)):
        d = closes[i] - closes[i - 1]
        gains.append(max(d, 0.0))
        losses.append(max(-d, 0.0))
    avg_g = sum(gains[:period]) / period
    avg_l = sum(losses[:period]) / period
    for i in range(period, len(gains)):
        avg_g = (avg_g * (period - 1) + gains[i]) / period
        avg_l = (avg_l * (period - 1) + losses[i]) / period
    if avg_l == 0:
        return 100.0
    rs = avg_g / avg_l
    return 100 - (100 / (1 + rs))


def stdev_returns(closes: list[float]) -> float:
    rets = [(closes[i] - closes[i - 1]) / closes[i - 1]
            for i in range(1, len(closes)) if closes[i - 1]]
    if len(rets) < 2:
        return 0.01
    m = sum(rets) / len(rets)
    var = sum((x - m) ** 2 for x in rets) / (len(rets) - 1)
    return var ** 0.5


def backtest_hitrate(closes: list[float], horizon: int = 24) -> tuple[int, int]:
    """Hourly sparkline: when EMA20>EMA50 (bull), was price `horizon` hours
    later higher? Aggregate correct/total."""
    if len(closes) < 60 + horizon:
        return 0, 0
    e20, e50 = ema(closes, 20), ema(closes, 50)
    correct = total = 0
    for i in range(50, len(closes) - horizon):
        bull = e20[i] > e50[i]
        up = closes[i + horizon] > closes[i]
        total += 1
        if bull == up:
            correct += 1
    return correct, total


def score(spark: list[float], c1h: float, c24h: float, c7d: float) -> dict:
    e20, e50 = ema(spark, 20), ema(spark, 50)
    price = spark[-1]
    if e20[-1] > e50[-1]:
        trend = min(1.0, (e20[-1] - e50[-1]) / price * 50)
    else:
        trend = max(-1.0, (e20[-1] - e50[-1]) / price * 50)

    mom1h = max(-1.0, min(1.0, c1h / 3.0))
    mom24 = max(-1.0, min(1.0, c24h / 8.0))
    mom7d = max(-1.0, min(1.0, c7d / 25.0))
    r = rsi(spark, 14)

    s = 0.34 * trend + 0.18 * mom1h + 0.26 * mom24 + 0.22 * mom7d
    s = max(-1.0, min(1.0, s))

    # Which horizon is driving the call -> suggested holding time.
    drivers = {"1h": abs(mom1h), "4h": abs(trend) + abs(mom24), "1d": abs(mom7d)}
    tf = max(drivers, key=drivers.get)
    hold = {"1h": "6-12 hours", "4h": "~2 days", "1d": "several days - 1 week"}[tf]
    return {"score": s, "rsi": r, "price": price, "tf": tf, "hold": hold,
            "vol": max(stdev_returns(spark), 0.004)}


def main() -> None:
    print("Fetching CoinGecko markets (with 7d hourly sparkline) ...")
    coins = []
    for page in range(1, PAGES + 1):
        batch = _get("/coins/markets", {
            "vs_currency": "usd", "order": "volume_desc",
            "per_page": PER_PAGE, "page": page, "sparkline": "true",
            "price_change_percentage": "1h,24h,7d",
        })
        coins.extend(batch)
        time.sleep(1.5)
    print(f"Fetched {len(coins)} coins.")

    signals = []
    hit_c = hit_t = 0
    for c in coins:
        try:
            vol = float(c.get("total_volume") or 0)
            spark = ((c.get("sparkline_in_7d") or {}).get("price")) or []
            if vol < MIN_VOL or len(spark) < 80:
                continue
            c1h = float(c.get("price_change_percentage_1h_in_currency") or 0)
            c24 = float(c.get("price_change_percentage_24h_in_currency") or 0)
            c7d = float(c.get("price_change_percentage_7d_in_currency") or 0)
            sc = score(spark, c1h, c24, c7d)

            hc, ht = backtest_hitrate(spark)
            hit_c += hc
            hit_t += ht

            s = sc["score"]
            direction = "BULL" if s > 0.15 else "BEAR" if s < -0.15 else "NEUTRAL"
            conviction = round(min(0.95, abs(s) * 1.1 + 0.05), 3)
            price = float(c.get("current_price") or sc["price"])
            v = sc["vol"]
            if direction == "BULL":
                stop = price * (1 - 3 * v); tp = price * (1 + 6 * v)
            elif direction == "BEAR":
                stop = price * (1 + 3 * v); tp = price * (1 - 6 * v)
            else:
                stop = tp = 0.0

            signals.append({
                "symbol": c["symbol"].upper() + "-USDT.P",
                "name": c.get("name", ""),
                "price": round(price, 6),
                "signal_tf": sc["tf"],
                "direction": direction,
                "confidence": conviction,
                "hold": sc["hold"] if direction != "NEUTRAL" else "-",
                "entry": round(price, 6) if direction != "NEUTRAL" else 0,
                "stop": round(stop, 6),
                "take_profit": round(tp, 6),
                "rsi": round(sc["rsi"], 1),
                "chg24h": round(c24, 2),
                "vol_pct": round(v * 100, 2),
            })
        except Exception as e:  # noqa: BLE001
            print(f"  skip {c.get('id')}: {e}")

    signals.sort(key=lambda x: (x["direction"] == "NEUTRAL", -x["confidence"]))
    hit_rate = round(100 * hit_c / hit_t, 1) if hit_t else None

    data = {
        "meta": {
            "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
            "mode": "LIVE",
            "source": "CoinGecko (top coins by volume; spot reference, tradeable as perps)",
            "market_type": "Crypto — directional (long/short)",
            "universe_total": len(coins),
            "analysed": len(signals),
            "backtest": {
                "hit_rate_pct": hit_rate,
                "samples": hit_t,
                "method": "Hourly EMA20/50 trend vs price 24h later, across analysed coins (last 7d)",
            },
            "note": "Rules-based technical screen on live market data. NOT financial advice. No signal is "
                    "100% accurate; perps use leverage and can lose more than your margin. Paper-trade and "
                    "verify the hit-rate before risking real money.",
        },
        "timeframe_map": [
            {"tf": "15m", "hold": "1-3 hours"},
            {"tf": "1h",  "hold": "6-12 hours"},
            {"tf": "4h",  "hold": "~2 days"},
            {"tf": "1d",  "hold": "several days - 1 week"},
        ],
        "signals": signals,
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, indent=2))
    print(f"Wrote {OUT} — {len(signals)} signals, backtest hit-rate {hit_rate}% (n={hit_t}).")


if __name__ == "__main__":
    main()
