#!/usr/bin/env python3
"""NaatAI order-flow bot.

Computes the same order-flow signal engine as docs/chart.html and the Pine
scripts, but server-side in GitHub Actions, and writes docs/signals.json for
the viewer page (docs/signals.html). Because the Action does the fetching and
commits the result, the viewer works even from networks where Binance is
blocked - nobody's browser has to reach Binance.

Data source: data-api.binance.vision (Binance's official public data mirror).
Unlike fapi.binance.com it is reachable from US/cloud IPs, and serves the same
kline format including taker-buy base volume (field 9), which is what real
order-flow delta is built from. Pure standard library - the Action stays
dependency-free.
"""

from __future__ import annotations

import json
import time
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

BASE = "https://data-api.binance.vision/api/v3"
OUT = Path(__file__).resolve().parents[1] / "docs" / "signals.json"

# Symbols to scan (Binance spot symbols; they track the perps 1:1 in direction).
SYMBOLS = ["BTCUSDT", "ETHUSDT", "SOLUSDT", "BNBUSDT", "XRPUSDT",
           "DOGEUSDT", "ADAUSDT", "AVAXUSDT", "LINKUSDT", "LTCUSDT"]

# Signal engine parameters - identical to chart.html and the Pine scripts.
THR = 20.0        # delta % threshold
SPACE = 5         # min bars between signals
ATR_MULT = 1.5    # stop = ATR * this
RR = 2.0          # take-profit R multiple
VOL_MULT = 1.2    # candle volume must exceed 1.2x its 50-bar average


def _get(path: str, params: dict, retries: int = 4):
    qs = "?" + "&".join(f"{k}={v}" for k, v in params.items())
    url = BASE + path + qs
    last = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": "naatai-bot/1.0", "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.loads(r.read().decode())
        except urllib.error.HTTPError as e:
            last = f"HTTP {e.code}"
            if e.code in (429, 503, 502):
                time.sleep(3 * (attempt + 1))
                continue
            time.sleep(1)
        except Exception as e:  # noqa: BLE001
            last = f"{type(e).__name__}: {e}"
            time.sleep(2)
    raise RuntimeError(f"request failed: {url} ({last})")


def klines(symbol: str, interval: str, limit: int):
    raw = _get("/klines", {"symbol": symbol, "interval": interval, "limit": limit})
    # [openTime, open, high, low, close, volume, closeTime, quoteVol,
    #  trades, takerBuyBase, takerBuyQuote, ignore]
    return [{
        "t": int(k[0]), "o": float(k[1]), "h": float(k[2]), "l": float(k[3]),
        "c": float(k[4]), "v": float(k[5]), "tb": float(k[9]),
    } for k in raw]


# ---------------------------- indicators ----------------------------
def ema(vals: list[float], period: int) -> list[float | None]:
    out: list[float | None] = [None] * len(vals)
    k = 2 / (period + 1)
    e = None
    for i, v in enumerate(vals):
        e = v if e is None else v * k + e * (1 - k)
        if i >= period - 1:
            out[i] = e
    return out


def rsi_series(closes: list[float], period: int = 14) -> list[float | None]:
    out: list[float | None] = [None] * len(closes)
    g = l = 0.0
    for i in range(1, len(closes)):
        ch = closes[i] - closes[i - 1]
        up, dn = max(ch, 0.0), max(-ch, 0.0)
        if i <= period:
            g += up
            l += dn
            if i == period:
                g /= period
                l /= period
                out[i] = 100.0 if l == 0 else 100 - 100 / (1 + g / l)
        else:
            g = (g * (period - 1) + up) / period
            l = (l * (period - 1) + dn) / period
            out[i] = 100.0 if l == 0 else 100 - 100 / (1 + g / l)
    return out


def atr_series(bars, period: int = 14) -> list[float | None]:
    out: list[float | None] = [None] * len(bars)
    a = None
    for i in range(1, len(bars)):
        tr = max(bars[i]["h"] - bars[i]["l"],
                 abs(bars[i]["h"] - bars[i - 1]["c"]),
                 abs(bars[i]["l"] - bars[i - 1]["c"]))
        a = tr if a is None else (a * (period - 1) + tr) / period
        if i >= period:
            out[i] = a
    return out


def heikin_ashi(bars):
    out = []
    po = pc = None
    for k in bars:
        c4 = (k["o"] + k["h"] + k["l"] + k["c"]) / 4
        o4 = (k["o"] + k["c"]) / 2 if po is None else (po + pc) / 2
        out.append({"o": o4, "h": max(k["h"], o4, c4),
                    "l": min(k["l"], o4, c4), "c": c4})
        po, pc = o4, c4
    return out


def fib_618(bars) -> float | None:
    look = bars[-100:] if len(bars) >= 100 else bars
    if len(look) < 20:
        return None
    hh = max(b["h"] for b in look)
    ll = min(b["l"] for b in look)
    hi_i = max(range(len(look)), key=lambda i: look[i]["h"])
    lo_i = min(range(len(look)), key=lambda i: look[i]["l"])
    up = hi_i > lo_i
    return hh - (hh - ll) * 0.618 if up else ll + (hh - ll) * 0.618


def analyse(symbol: str) -> dict:
    bars = klines(symbol, "15m", 500)
    if len(bars) < 60:
        raise RuntimeError("not enough bars")
    closes = [b["c"] for b in bars]
    n = len(bars)

    e20, e50, e200 = ema(closes, 20), ema(closes, 50), ema(closes, 200)
    rsi = rsi_series(closes, 14)
    atr = atr_series(bars, 14)
    delta = [2 * b["tb"] - b["v"] for b in bars]
    cvd = []
    acc = 0.0
    for d in delta:
        acc += d
        cvd.append(acc)

    # 50-bar rolling volume average
    vavg = [0.0] * n
    s = 0.0
    for i in range(n):
        s += bars[i]["v"]
        if i >= 50:
            s -= bars[i - 50]["v"]
        vavg[i] = s / min(i + 1, 50)

    # higher-timeframe (4h) trend
    try:
        c4 = [b["c"] for b in klines(symbol, "4h", 120)]
        h20, h50 = ema(c4, 20), ema(c4, 50)
        htf_up = None
        if h20[-1] is not None and h50[-1] is not None:
            htf_up = h20[-1] > h50[-1]
    except Exception:  # noqa: BLE001
        htf_up = None

    # signal engine (closed candles only)
    signals = []
    last_i = -99
    for i in range(50, n - 1):
        if i - last_i < SPACE:
            continue
        v = bars[i]["v"]
        if not v or rsi[i] is None or atr[i] is None:
            continue
        if v < VOL_MULT * vavg[i]:
            continue
        dp = delta[i] / v * 100
        typ = None
        if dp >= THR and htf_up is not False and rsi[i] < 70:
            typ = "BUY"
        elif dp <= -THR and htf_up is not True and rsi[i] > 30:
            typ = "SELL"
        if not typ:
            continue
        entry = bars[i]["c"]
        d = atr[i] * ATR_MULT
        sl = entry - d if typ == "BUY" else entry + d
        tp = entry + d * RR if typ == "BUY" else entry - d * RR
        signals.append({"i": i, "type": typ, "t": bars[i]["t"],
                        "entry": entry, "sl": sl, "tp": tp,
                        "delta_pct": round(dp, 1)})
        last_i = i

    last = bars[-1]
    dp_now = delta[-1] / last["v"] * 100 if last["v"] else 0.0

    # next-candle probability (same heuristic as the chart)
    import math
    cvd_slope = cvd[-1] - cvd[-11] if n > 11 else 0.0
    score = (dp_now / 25.0
             + (0.5 if htf_up else -0.5)
             + (0.4 if cvd_slope > 0 else -0.4)
             + (0.3 if last["c"] > (e20[-1] or last["c"]) else -0.3))
    up_prob = max(15.0, min(85.0, 50 + 50 * math.tanh(score)))

    # Heikin Ashi trend (1h)
    try:
        h1 = klines(symbol, "1h", 200)
        ha = heikin_ashi(h1)
        ha_up = ha[-1]["c"] >= ha[-1]["o"]
        ha_rsi = rsi_series([b["c"] for b in h1], 14)[-1]
        ha_flip = ha_up != (ha[-2]["c"] >= ha[-2]["o"]) if len(ha) > 1 else False
    except Exception:  # noqa: BLE001
        ha_up, ha_rsi, ha_flip = None, None, False

    # trend label from EMA stack
    c = last["c"]
    if e200[-1] is not None and c > e20[-1] > e50[-1] > e200[-1]:
        trend = "Uptrend"
    elif e200[-1] is not None and c < e20[-1] < e50[-1] < e200[-1]:
        trend = "Downtrend"
    elif e200[-1] is not None and c > e200[-1]:
        trend = "Up (choppy)"
    else:
        trend = "Down (choppy)"

    recent = signals[-1] if signals else None
    # "live" signal = a signal on one of the last 3 closed candles
    live_sig = recent["type"] if recent and recent["i"] >= n - 4 else "WAIT"

    dec = 1 if c >= 1000 else 2 if c >= 100 else 4 if c >= 1 else 6
    rnd = lambda x: round(x, dec) if x is not None else None

    return {
        "symbol": symbol,
        "price": rnd(c),
        "signal": live_sig,
        "trend": trend,
        "htf_up": htf_up,
        "rsi": round(rsi[-1], 1) if rsi[-1] is not None else None,
        "delta": round(delta[-1], 1),
        "delta_pct": round(dp_now, 1),
        "cvd": round(cvd[-1], 1),
        "buy_vol": round((last["v"] + delta[-1]) / 2, 1),
        "sell_vol": round((last["v"] - delta[-1]) / 2, 1),
        "atr": round(atr[-1], dec) if atr[-1] is not None else None,
        "fib_618": rnd(fib_618(bars)),
        "up_prob": round(up_prob),
        "ha_up": ha_up,
        "ha_rsi": round(ha_rsi, 1) if ha_rsi is not None else None,
        "ha_flip": ha_flip,
        "last_signal": None if not recent else {
            "type": recent["type"],
            "entry": rnd(recent["entry"]),
            "sl": rnd(recent["sl"]),
            "tp": rnd(recent["tp"]),
            "delta_pct": recent["delta_pct"],
            "bars_ago": n - 1 - recent["i"],
            "at": datetime.fromtimestamp(recent["t"] / 1000, timezone.utc)
                    .strftime("%Y-%m-%d %H:%M UTC"),
        },
        "signals_24h": sum(1 for s in signals if s["i"] >= n - 96),
    }


def main() -> None:
    print(f"NaatAI bot scanning {len(SYMBOLS)} symbols via {BASE} ...")
    results = []
    for sym in SYMBOLS:
        try:
            r = analyse(sym)
            results.append(r)
            print(f"  {sym:9s} {r['signal']:4s} price={r['price']} "
                  f"delta%={r['delta_pct']} htf={r['htf_up']} up={r['up_prob']}%")
        except Exception as e:  # noqa: BLE001
            print(f"  {sym}: FAILED {e}")
        time.sleep(0.4)

    # rank: live BUY/SELL first, then by conviction (distance of up_prob from 50)
    def rank(r):
        active = 0 if r["signal"] in ("BUY", "SELL") else 1
        return (active, -abs(r["up_prob"] - 50))
    results.sort(key=rank)

    data = {
        "meta": {
            "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
            "source": "Binance public data mirror (data-api.binance.vision), 15m klines",
            "engine": {
                "delta_threshold_pct": THR, "min_volume_x_avg": VOL_MULT,
                "min_bars_between_signals": SPACE,
                "stop_atr_mult": ATR_MULT, "take_profit_R": RR,
                "htf_trend": "4h EMA20 vs EMA50", "ha_panel": "1h Heikin Ashi",
            },
            "note": "Rules-based order-flow screen computed in GitHub Actions. NOT "
                    "financial advice. No signal is 100% accurate; futures use leverage "
                    "and can lose more than your margin. Paper-trade first.",
        },
        "symbols": results,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, indent=2))
    active = sum(1 for r in results if r["signal"] in ("BUY", "SELL"))
    print(f"Wrote {OUT} - {len(results)} symbols, {active} active signals.")


if __name__ == "__main__":
    main()
