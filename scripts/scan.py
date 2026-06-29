#!/usr/bin/env python3
"""Binance USDT-perpetual scanner.

Pulls the full perp universe from Binance Futures public API (no key needed),
computes real technical signals on the liquid subset, scores each pair
BULL / BEAR / NEUTRAL with a conviction, derives entry/stop/take-profit and a
suggested holding time from the dominant timeframe, and writes docs/data.json
for the dashboard.

Also runs a lightweight historical backtest of the signal logic so the
dashboard can show an HONEST realised hit-rate (it will not be 100%).

Pure standard library on purpose: the GitHub Action stays dependency-free.
"""

from __future__ import annotations

import json
import time
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

# Binance USDT-M futures public base. May be geo-blocked (HTTP 451) on some
# runners; we try a few hosts before giving up.
BASES = [
    "https://fapi.binance.com",
    "https://fapi1.binance.com",
    "https://fapi2.binance.com",
]

TOP_N = 120          # detailed analysis on the N most-liquid pairs
MIN_QUOTE_VOL = 5_000_000   # skip pairs with < $5M 24h volume (too illiquid)
OUT = Path(__file__).resolve().parents[1] / "docs" / "data.json"


def _get(path: str, params: dict | None = None, retries: int = 3):
    qs = ""
    if params:
        qs = "?" + "&".join(f"{k}={v}" for k, v in params.items())
    last = None
    for base in BASES:
        url = base + path + qs
        for attempt in range(retries):
            try:
                req = urllib.request.Request(url, headers={"User-Agent": "naatai-scanner/1.0"})
                with urllib.request.urlopen(req, timeout=20) as r:
                    return json.loads(r.read().decode())
            except urllib.error.HTTPError as e:
                last = f"HTTP {e.code} on {url}"
                if e.code in (418, 429):       # rate limited — back off
                    time.sleep(2 * (attempt + 1))
                    continue
                if e.code == 451:              # geo-blocked — try next host
                    break
                last = f"HTTP {e.code} on {url}"
            except Exception as e:             # noqa: BLE001
                last = f"{type(e).__name__}: {e} on {url}"
                time.sleep(1)
    raise RuntimeError(f"request failed: {path} ({last})")


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


def closes_of(klines: list) -> list[float]:
    return [float(k[4]) for k in klines]


def atr_pct(klines: list, period: int = 14) -> float:
    """Average true range as a fraction of price (volatility proxy)."""
    trs = []
    for i in range(1, len(klines)):
        h, l, pc = float(klines[i][2]), float(klines[i][3]), float(klines[i - 1][4])
        trs.append(max(h - l, abs(h - pc), abs(l - pc)))
    if not trs:
        return 0.0
    window = trs[-period:]
    atr = sum(window) / len(window)
    last_close = float(klines[-1][4])
    return atr / last_close if last_close else 0.0


def score_pair(k4h: list, k1h: list, chg24h: float, funding: float) -> dict:
    """Combine indicators into a signed score in roughly [-1, 1]."""
    c4 = closes_of(k4h)
    c1 = closes_of(k1h)
    e20, e50 = ema(c4, 20), ema(c4, 50)
    price = c4[-1]

    trend = 0.0
    if e20[-1] > e50[-1]:
        trend = min(1.0, (e20[-1] - e50[-1]) / price * 40)
    else:
        trend = max(-1.0, (e20[-1] - e50[-1]) / price * 40)

    r = rsi(c1, 14)
    momentum = (r - 50) / 50.0                      # -1..1

    above = 1.0 if price > e20[-1] else -1.0
    chg = max(-1.0, min(1.0, chg24h / 8.0))         # 8% move ~ full
    fund = max(-1.0, min(1.0, -funding * 1000))     # crowded longs slightly bearish

    score = (0.42 * trend + 0.28 * momentum + 0.12 * above + 0.12 * chg + 0.06 * fund)
    score = max(-1.0, min(1.0, score))

    # Which timeframe is "driving" the call -> holding suggestion.
    if abs(momentum) > abs(trend):
        sig_tf, hold = "1h", "6-12 hours"
    else:
        sig_tf, hold = "4h", "~2 days"

    return {"score": score, "rsi": r, "price": price, "atr_pct": atr_pct(k4h),
            "signal_tf": sig_tf, "hold": hold}


def backtest_hitrate(k4h: list, horizon: int = 12) -> tuple[int, int]:
    """How often did the 4h EMA20>EMA50 (bull) / < (bear) call match the move
    `horizon` bars later? Returns (correct, total)."""
    c = closes_of(k4h)
    e20, e50 = ema(c, 20), ema(c, 50)
    correct = total = 0
    for i in range(50, len(c) - horizon):
        bull = e20[i] > e50[i]
        moved_up = c[i + horizon] > c[i]
        total += 1
        if bull == moved_up:
            correct += 1
    return correct, total


def main() -> None:
    print("Fetching 24h tickers ...")
    tickers = _get("/fapi/v1/ticker/24hr")
    info = _get("/fapi/v1/exchangeInfo")
    perps = {
        s["symbol"] for s in info["symbols"]
        if s.get("contractType") == "PERPETUAL"
        and s.get("quoteAsset") == "USDT"
        and s.get("status") == "TRADING"
    }
    universe_total = len(perps)

    rows = [t for t in tickers if t["symbol"] in perps
            and float(t.get("quoteVolume", 0)) >= MIN_QUOTE_VOL]
    rows.sort(key=lambda t: float(t["quoteVolume"]), reverse=True)
    rows = rows[:TOP_N]
    print(f"{universe_total} perps total; analysing top {len(rows)} by volume.")

    # Funding rates (one call returns all symbols).
    funding = {}
    try:
        for p in _get("/fapi/v1/premiumIndex"):
            funding[p["symbol"]] = float(p.get("lastFundingRate", 0) or 0)
    except Exception as e:  # noqa: BLE001
        print("funding fetch skipped:", e)

    signals = []
    hit_c = hit_t = 0
    for t in rows:
        sym = t["symbol"]
        try:
            k4h = _get("/fapi/v1/klines", {"symbol": sym, "interval": "4h", "limit": 200})
            k1h = _get("/fapi/v1/klines", {"symbol": sym, "interval": "1h", "limit": 120})
            if len(k4h) < 60 or len(k1h) < 30:
                continue
            chg = float(t.get("priceChangePercent", 0) or 0)
            sc = score_pair(k4h, k1h, chg, funding.get(sym, 0.0))

            c, tot = backtest_hitrate(k4h)
            hit_c += c
            hit_t += tot

            s = sc["score"]
            direction = "BULL" if s > 0.15 else "BEAR" if s < -0.15 else "NEUTRAL"
            conviction = round(min(0.95, abs(s) * 1.1 + 0.05), 3)
            price = sc["price"]
            vol = max(sc["atr_pct"], 0.004)
            if direction == "BULL":
                stop = price * (1 - 2 * vol); tp = price * (1 + 4 * vol)
            elif direction == "BEAR":
                stop = price * (1 + 2 * vol); tp = price * (1 - 4 * vol)
            else:
                stop = tp = 0.0

            signals.append({
                "symbol": sym.replace("USDT", "-USDT") + ".P",
                "price": round(price, 6),
                "signal_tf": sc["signal_tf"],
                "direction": direction,
                "confidence": conviction,
                "hold": sc["hold"] if direction != "NEUTRAL" else "-",
                "entry": round(price, 6) if direction != "NEUTRAL" else 0,
                "stop": round(stop, 6),
                "take_profit": round(tp, 6),
                "rsi": round(sc["rsi"], 1),
                "chg24h": round(chg, 2),
                "vol_pct": round(vol * 100, 2),
            })
            time.sleep(0.05)  # be gentle on rate limits
        except Exception as e:  # noqa: BLE001
            print(f"  skip {sym}: {e}")

    signals.sort(key=lambda x: (x["direction"] == "NEUTRAL", -x["confidence"]))
    hit_rate = round(100 * hit_c / hit_t, 1) if hit_t else None

    data = {
        "meta": {
            "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
            "mode": "LIVE",
            "source": "Binance USDT-M Perpetual Futures (public API)",
            "market_type": "Perpetual Futures",
            "universe_total": universe_total,
            "analysed": len(signals),
            "backtest": {
                "hit_rate_pct": hit_rate,
                "samples": hit_t,
                "method": "4h EMA20/50 trend vs price 12 bars (~2 days) later, across analysed universe",
            },
            "note": "Rules-based technical screen. NOT financial advice. No signal is 100% accurate; "
                    "futures use leverage and can lose more than your margin. Paper-trade and verify the "
                    "hit-rate before risking real money.",
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
