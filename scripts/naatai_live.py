#!/usr/bin/env python3
"""NaatAI live scanner - run it on your own computer or in GitHub Actions.

It continuously scans every liquid USDT pair on Binance, computes the NaatAI
order-flow signal engine (real taker buy/sell delta, EMA/RSI/ATR, 4h trend
filter, support/resistance, fib, next-candle bias), and tells you which pairs
have an INSTANT trade - a BUY or SELL that just fired on the last closed candle,
with entry, stop-loss and take-profit ready to place.

Data source: Binance. From your own computer it uses the real futures API
(fapi.binance.com) - true taker volume, open interest, funding. If that host is
geo-blocked (e.g. US / most cloud runners) it automatically falls back to
Binance's public mirror (data-api.binance.vision), which still carries taker-buy
volume, so signals keep working. Pure standard library - nothing to pip install.

USAGE
    python3 naatai_live.py                 # live loop, rescan every 60s
    python3 naatai_live.py --interval 30   # rescan every 30s
    python3 naatai_live.py --once          # one scan and exit (good for cron/CI)
    python3 naatai_live.py --tf 5m         # signal timeframe (default 15m)
    python3 naatai_live.py --min-vol 5     # only pairs with > $5M 24h volume
    python3 naatai_live.py --top 200       # scan up to 200 pairs
    python3 naatai_live.py --consensus     # cross-check each signal on Bybit+MEXC

OPTIONAL PHONE ALERTS (Telegram): set two environment variables and every new
instant trade is pushed to your phone:
    export NAATAI_TG_TOKEN=123456:abc...   (from @BotFather)
    export NAATAI_TG_CHAT=987654321        (your chat id)
"""

from __future__ import annotations

import argparse
import json
import math
import os
import sys
import time
import urllib.request
import urllib.error
import urllib.parse
from datetime import datetime, timezone

# --------------------------- data endpoints --------------------------
FUT = "https://fapi.binance.com"                 # real futures (taker vol, OI, funding)
SPOT_MIRROR = "https://data-api.binance.vision"  # public mirror, reachable from anywhere
BYBIT = "https://api.bybit.com"
MEXC = "https://contract.mexc.com"

# signal engine (identical to the chart, Pine scripts and GitHub bot)
THR = 20.0        # delta % threshold
SPACE = 5         # min bars between signals
ATR_MULT = 1.5    # stop = ATR * this
RR = 2.0          # take-profit R multiple
VOL_MULT = 1.2    # candle volume must exceed 1.2x its 50-bar average

# ------------------------------ colours ------------------------------
class C:
    G = "\033[92m"; R = "\033[91m"; Y = "\033[93m"; B = "\033[94m"
    DIM = "\033[2m"; BOLD = "\033[1m"; END = "\033[0m"; CLR = "\033[2J\033[H"

if os.name == "nt":
    os.system("")  # enable ANSI colours in Windows terminals


def _get(url: str, timeout: int = 20, retries: int = 3):
    last = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": "naatai-live/1.0", "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return json.loads(r.read().decode())
        except urllib.error.HTTPError as e:
            last = f"HTTP {e.code}"
            if e.code in (429, 418, 503, 502):
                time.sleep(2 * (attempt + 1))
                continue
            break
        except Exception as e:  # noqa: BLE001
            last = f"{type(e).__name__}"
            time.sleep(1.5)
    raise RuntimeError(last or "request failed")


# ------------------------ pick the data source -----------------------
class Source:
    """Chooses real futures if reachable, else the public spot mirror."""
    def __init__(self):
        self.futures = self._probe_futures()
        if self.futures:
            self.base = FUT
            self.kbase = FUT + "/fapi/v1"
            self.label = "Binance Futures (real taker volume, OI, funding)"
        else:
            self.base = SPOT_MIRROR
            self.kbase = SPOT_MIRROR + "/api/v3"
            self.label = "Binance public mirror (data-api.binance.vision, spot)"

    def _probe_futures(self) -> bool:
        try:
            r = _get(FUT + "/fapi/v1/ping", timeout=8, retries=1)
            return isinstance(r, dict)
        except Exception:  # noqa: BLE001
            return False

    def klines(self, symbol: str, interval: str, limit: int):
        raw = _get(f"{self.kbase}/klines?symbol={symbol}&interval={interval}&limit={limit}")
        # field 9 = taker-buy base volume on both futures and the spot mirror
        return [{"t": int(k[0]), "o": float(k[1]), "h": float(k[2]), "l": float(k[3]),
                 "c": float(k[4]), "v": float(k[5]), "tb": float(k[9])} for k in raw]

    def tickers(self):
        return _get(f"{self.kbase}/ticker/24hr")


# ----------------------------- indicators ----------------------------
def ema(vals, period):
    out = [None] * len(vals); k = 2 / (period + 1); e = None
    for i, v in enumerate(vals):
        e = v if e is None else v * k + e * (1 - k)
        if i >= period - 1:
            out[i] = e
    return out


def rsi_series(closes, period=14):
    out = [None] * len(closes); g = l = 0.0
    for i in range(1, len(closes)):
        ch = closes[i] - closes[i - 1]; up = max(ch, 0.0); dn = max(-ch, 0.0)
        if i <= period:
            g += up; l += dn
            if i == period:
                g /= period; l /= period
                out[i] = 100.0 if l == 0 else 100 - 100 / (1 + g / l)
        else:
            g = (g * (period - 1) + up) / period
            l = (l * (period - 1) + dn) / period
            out[i] = 100.0 if l == 0 else 100 - 100 / (1 + g / l)
    return out


def atr_series(bars, period=14):
    out = [None] * len(bars); a = None
    for i in range(1, len(bars)):
        tr = max(bars[i]["h"] - bars[i]["l"], abs(bars[i]["h"] - bars[i - 1]["c"]),
                 abs(bars[i]["l"] - bars[i - 1]["c"]))
        a = tr if a is None else (a * (period - 1) + tr) / period
        if i >= period:
            out[i] = a
    return out


def support_resistance(bars, price, k=8):
    n = len(bars); highs = []; lows = []
    for i in range(k, n - k):
        h, l = bars[i]["h"], bars[i]["l"]
        if all(bars[j]["h"] <= h for j in range(i - k, i + k + 1)):
            highs.append(h)
        if all(bars[j]["l"] >= l for j in range(i - k, i + k + 1)):
            lows.append(l)
    res = sorted({h for h in highs if h > price}, key=lambda x: x - price)[:1]
    sup = sorted({l for l in lows if l < price}, key=lambda x: price - x)[:1]
    return (sup[0] if sup else None), (res[0] if res else None)


# --------------------- multi-exchange consensus ----------------------
def consensus(base: str) -> float | None:
    """Buy% across Binance + Bybit + MEXC recent trades. None if unavailable."""
    tb = ts = 0.0
    try:
        tr = _get(f"{FUT}/fapi/v1/aggTrades?symbol={base}USDT&limit=500", timeout=8, retries=1)
        for t in tr:
            q = float(t["p"]) * float(t["q"])
            ts += q if t["m"] else 0.0; tb += 0.0 if t["m"] else q
    except Exception:  # noqa: BLE001
        pass
    try:
        j = _get(f"{BYBIT}/v5/market/recent-trade?category=linear&symbol={base}USDT&limit=500", timeout=8, retries=1)
        for t in (j.get("result", {}).get("list") or []):
            q = float(t["price"]) * float(t["size"])
            tb += q if t["side"] == "Buy" else 0.0; ts += q if t["side"] == "Sell" else 0.0
    except Exception:  # noqa: BLE001
        pass
    try:
        j = _get(f"{MEXC}/api/v1/contract/deals/{base}_USDT", timeout=8, retries=1)
        for t in (j.get("data") or []):
            q = float(t["p"]) * float(t["v"])
            tb += q if t["T"] == 1 else 0.0; ts += q if t["T"] == 2 else 0.0
    except Exception:  # noqa: BLE001
        pass
    tot = tb + ts
    return None if tot <= 0 else tb / tot * 100


# ------------------------------- scan --------------------------------
def analyse(src: Source, symbol: str, tf: str):
    bars = src.klines(symbol, tf, 300)
    if len(bars) < 60:
        return None
    closes = [b["c"] for b in bars]; n = len(bars)
    e20, e50, e200 = ema(closes, 20), ema(closes, 50), ema(closes, 200)
    rsi = rsi_series(closes, 14); atr = atr_series(bars, 14)
    delta = [2 * b["tb"] - b["v"] for b in bars]

    vavg = [0.0] * n; s = 0.0
    for i in range(n):
        s += bars[i]["v"]
        if i >= 50:
            s -= bars[i - 50]["v"]
        vavg[i] = s / min(i + 1, 50)

    # real 4h trend filter
    try:
        c4 = [b["c"] for b in src.klines(symbol, "4h", 120)]
        h20, h50 = ema(c4, 20), ema(c4, 50)
        htf_up = None if h20[-1] is None or h50[-1] is None else h20[-1] > h50[-1]
    except Exception:  # noqa: BLE001
        htf_up = None

    last_i = -99; sig = None
    for i in range(50, n - 1):
        if i - last_i < SPACE:
            continue
        v = bars[i]["v"]
        if not v or rsi[i] is None or atr[i] is None or v < VOL_MULT * vavg[i]:
            continue
        dp = delta[i] / v * 100
        typ = None
        if dp >= THR and htf_up is not False and rsi[i] < 70:
            typ = "BUY"
        elif dp <= -THR and htf_up is not True and rsi[i] > 30:
            typ = "SELL"
        if not typ:
            continue
        entry = bars[i]["c"]; d = atr[i] * ATR_MULT
        sl = entry - d if typ == "BUY" else entry + d
        tp = entry + d * RR if typ == "BUY" else entry - d * RR
        sig = {"i": i, "type": typ, "entry": entry, "sl": sl, "tp": tp, "dp": dp}
        last_i = i

    c = bars[-1]["c"]
    dp_now = delta[-1] / bars[-1]["v"] * 100 if bars[-1]["v"] else 0.0
    cvd_slope = sum(delta[-10:]) if n >= 10 else sum(delta)
    score = (dp_now / 25.0 + (0.5 if htf_up else -0.5)
             + (0.4 if cvd_slope > 0 else -0.4)
             + (0.3 if c > (e20[-1] or c) else -0.3))
    up = max(15.0, min(85.0, 50 + 50 * math.tanh(score)))

    # a signal is "instant" only if it fired on the last CLOSED candle and the
    # current bias still agrees (so it is actionable right now, not stale)
    fresh = sig and sig["i"] >= n - 2
    if fresh and ((sig["type"] == "BUY" and up < 50) or (sig["type"] == "SELL" and up > 50)):
        fresh = False

    dec = 1 if c >= 1000 else 2 if c >= 100 else 4 if c >= 1 else 6
    rnd = lambda x: None if x is None else round(x, dec)
    sup, res = support_resistance(bars, c)
    return {
        "symbol": symbol, "price": rnd(c), "instant": bool(fresh),
        "type": sig["type"] if fresh else None,
        "entry": rnd(sig["entry"]) if fresh else None,
        "sl": rnd(sig["sl"]) if fresh else None,
        "tp": rnd(sig["tp"]) if fresh else None,
        "delta_pct": round(dp_now, 1), "rsi": round(rsi[-1], 1) if rsi[-1] else None,
        "up_prob": round(up), "htf_up": htf_up,
        "support": rnd(sup), "resistance": rnd(res),
    }


def universe(src: Source, min_vol_usd: float, top: int):
    rows = []
    for t in src.tickers():
        sym = t.get("symbol", "")
        if not sym.endswith("USDT"):
            continue
        if any(x in sym for x in ("UPUSDT", "DOWNUSDT", "BULLUSDT", "BEARUSDT")):
            continue
        if sym in ("USDCUSDT", "FDUSDUSDT", "TUSDUSDT", "BUSDUSDT", "EURUSDT"):
            continue
        vol = float(t.get("quoteVolume") or 0)
        if vol >= min_vol_usd:
            rows.append((sym, vol))
    rows.sort(key=lambda x: -x[1])
    return rows[:top]


def tg_alert(text: str):
    tok = os.environ.get("NAATAI_TG_TOKEN"); chat = os.environ.get("NAATAI_TG_CHAT")
    if not tok or not chat:
        return
    try:
        url = (f"https://api.telegram.org/bot{tok}/sendMessage?chat_id={chat}"
               f"&text={urllib.parse.quote(text)}&parse_mode=HTML")
        _get(url, timeout=8, retries=1)
    except Exception:  # noqa: BLE001
        pass


import urllib.parse  # noqa: E402  (used by tg_alert)


def scan_once(src: Source, args, seen: set):
    uni = universe(src, args.min_vol * 1e6, args.top)
    instants = []; scanned = 0
    for sym, vol in uni:
        try:
            r = analyse(src, sym, args.tf)
            scanned += 1
            if r and r["instant"]:
                if args.consensus:
                    r["consensus"] = consensus(sym.replace("USDT", ""))
                instants.append(r)
        except Exception:  # noqa: BLE001
            pass
        time.sleep(0.08)
    instants.sort(key=lambda r: -abs(r["up_prob"] - 50))

    now = datetime.now(timezone.utc).strftime("%H:%M:%S UTC")
    print(C.CLR, end="")
    print(f"{C.BOLD}NaatAI live scanner{C.END}  {C.DIM}{now}  ·  {src.label}  ·  "
          f"{args.tf} signals  ·  {scanned} pairs{C.END}\n")
    if not instants:
        print(f"{C.DIM}No instant trades right now across {scanned} pairs. "
              f"Waiting for a clean setup - most candles are not tradeable.{C.END}")
    else:
        print(f"{C.BOLD}INSTANT TRADES ({len(instants)}){C.END}")
        hdr = f"  {'PAIR':<12}{'SIDE':<6}{'BIAS':<7}{'ENTRY':<13}{'STOP':<13}{'TARGET':<13}{'RSI':<6}"
        if args.consensus:
            hdr += "CONSENSUS"
        print(C.DIM + hdr + C.END)
        for r in instants:
            col = C.G if r["type"] == "BUY" else C.R
            key = r["symbol"] + str(r["entry"])
            new = " *NEW*" if key not in seen else ""
            line = (f"  {r['symbol']:<12}{col}{r['type']:<6}{C.END}"
                    f"{r['up_prob']}%{'':<3}{str(r['entry']):<13}"
                    f"{C.R}{str(r['sl']):<13}{C.END}{C.G}{str(r['tp']):<13}{C.END}"
                    f"{str(r['rsi'] or '-'):<6}")
            if args.consensus and r.get("consensus") is not None:
                cc = r["consensus"]
                line += f"{(C.G if cc>=50 else C.R)}{'Buy' if cc>=50 else 'Sell'} {max(cc,100-cc):.0f}%{C.END}"
            print(line + f"{col}{new}{C.END}")
            if new:
                tg_alert(f"NaatAI: <b>{r['type']} {r['symbol']}</b> @ {r['entry']}  "
                         f"SL {r['sl']}  TP {r['tp']}  (bias {r['up_prob']}%)")
                if os.name != "nt":
                    sys.stdout.write("\a")  # terminal bell on a new signal
    print(f"\n{C.DIM}Educational tool - NOT financial advice. Futures use leverage; "
          f"you can lose more than your margin. Always place the printed stop-loss.{C.END}")
    return {r["symbol"] + str(r["entry"]) for r in instants}


def main():
    ap = argparse.ArgumentParser(description="NaatAI live order-flow scanner")
    ap.add_argument("--interval", type=int, default=60, help="seconds between scans (loop mode)")
    ap.add_argument("--once", action="store_true", help="scan once and exit")
    ap.add_argument("--tf", default="15m", help="signal timeframe (1m/5m/15m/1h/4h)")
    ap.add_argument("--min-vol", type=float, default=3.0, help="min 24h $ volume in millions")
    ap.add_argument("--top", type=int, default=150, help="max pairs to scan")
    ap.add_argument("--consensus", action="store_true", help="cross-check each signal on Bybit+MEXC")
    args = ap.parse_args()

    print("Connecting to Binance ...")
    src = Source()
    print(f"Data source: {src.label}\n")

    seen: set = set()
    try:
        while True:
            t0 = time.time()
            seen = scan_once(src, args, seen)
            if args.once:
                break
            wait = max(5, args.interval - (time.time() - t0))
            print(f"{C.DIM}Next scan in {int(wait)}s ... (Ctrl+C to stop){C.END}")
            time.sleep(wait)
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
