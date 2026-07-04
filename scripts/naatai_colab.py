# ============================================================================
# NaatAI live scanner - GOOGLE COLAB version.
# HOW TO USE: open https://colab.research.google.com  ->  New notebook  ->  paste
# this WHOLE block into one code cell  ->  press the play button (or Shift+Enter).
# It scans every liquid Binance pair and prints which pairs have an INSTANT
# BUY or SELL right now, with entry / stop-loss / take-profit.
# Press the stop button to end it. NOT financial advice.
# ============================================================================
import json, math, time, urllib.request, urllib.error
from datetime import datetime, timezone

# ------------------------------- settings -----------------------------------
TF          = "15m"   # signal timeframe: "5m", "15m", "1h", "4h"
MIN_VOL_M   = 3       # only pairs with more than this many $millions 24h volume
TOP         = 120     # scan up to this many pairs
LOOPS       = 0       # 0 = scan once; e.g. 20 = rescan 20 times, 60s apart
# ----------------------------------------------------------------------------

FUT = "https://fapi.binance.com"
MIRROR = "https://data-api.binance.vision"
THR, SPACE, ATR_MULT, RR, VOL_MULT = 20.0, 5, 1.5, 2.0, 1.2


def get(url, timeout=20, retries=3):
    last = None
    for a in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "naatai/1.0"})
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return json.loads(r.read().decode())
        except urllib.error.HTTPError as e:
            last = e.code
            if e.code in (429, 418, 503, 502):
                time.sleep(2 * (a + 1)); continue
            break
        except Exception as e:
            last = type(e).__name__; time.sleep(1.5)
    raise RuntimeError(str(last))


# pick real futures if reachable (best data), else the public mirror
try:
    get(FUT + "/fapi/v1/ping", timeout=8, retries=1)
    KBASE, SRC = FUT + "/fapi/v1", "Binance Futures (real taker volume)"
except Exception:
    KBASE, SRC = MIRROR + "/api/v3", "Binance public mirror (data-api.binance.vision)"


def klines(sym, interval, limit):
    raw = get(f"{KBASE}/klines?symbol={sym}&interval={interval}&limit={limit}")
    return [{"o": float(k[1]), "h": float(k[2]), "l": float(k[3]),
             "c": float(k[4]), "v": float(k[5]), "tb": float(k[9])} for k in raw]


def ema(v, p):
    out = [None] * len(v); e = None; k = 2 / (p + 1)
    for i, x in enumerate(v):
        e = x if e is None else x * k + e * (1 - k)
        if i >= p - 1: out[i] = e
    return out


def rsi(c, p=14):
    out = [None] * len(c); g = l = 0.0
    for i in range(1, len(c)):
        ch = c[i] - c[i - 1]; up = max(ch, 0); dn = max(-ch, 0)
        if i <= p:
            g += up; l += dn
            if i == p:
                g /= p; l /= p; out[i] = 100.0 if l == 0 else 100 - 100 / (1 + g / l)
        else:
            g = (g * (p - 1) + up) / p; l = (l * (p - 1) + dn) / p
            out[i] = 100.0 if l == 0 else 100 - 100 / (1 + g / l)
    return out


def atr(b, p=14):
    out = [None] * len(b); a = None
    for i in range(1, len(b)):
        tr = max(b[i]["h"] - b[i]["l"], abs(b[i]["h"] - b[i - 1]["c"]), abs(b[i]["l"] - b[i - 1]["c"]))
        a = tr if a is None else (a * (p - 1) + tr) / p
        if i >= p: out[i] = a
    return out


def analyse(sym):
    b = klines(sym, TF, 300)
    if len(b) < 60: return None
    c = [x["c"] for x in b]; n = len(b)
    e20 = ema(c, 20); r = rsi(c, 14); at = atr(b, 14)
    delta = [2 * x["tb"] - x["v"] for x in b]
    vavg = [0.0] * n; s = 0.0
    for i in range(n):
        s += b[i]["v"]
        if i >= 50: s -= b[i - 50]["v"]
        vavg[i] = s / min(i + 1, 50)
    try:
        c4 = [x["c"] for x in klines(sym, "4h", 120)]
        h20, h50 = ema(c4, 20), ema(c4, 50)
        htf = None if h20[-1] is None or h50[-1] is None else h20[-1] > h50[-1]
    except Exception:
        htf = None
    last_i = -99; sig = None
    for i in range(50, n - 1):
        if i - last_i < SPACE: continue
        v = b[i]["v"]
        if not v or r[i] is None or at[i] is None or v < VOL_MULT * vavg[i]: continue
        dp = delta[i] / v * 100; typ = None
        if dp >= THR and htf is not False and r[i] < 70: typ = "BUY"
        elif dp <= -THR and htf is not True and r[i] > 30: typ = "SELL"
        if not typ: continue
        entry = b[i]["c"]; d = at[i] * ATR_MULT
        sig = {"i": i, "type": typ, "entry": entry,
               "sl": entry - d if typ == "BUY" else entry + d,
               "tp": entry + d * RR if typ == "BUY" else entry - d * RR}
        last_i = i
    price = b[-1]["c"]
    dp_now = delta[-1] / b[-1]["v"] * 100 if b[-1]["v"] else 0
    up = max(15, min(85, 50 + 50 * math.tanh(dp_now / 25 + (0.5 if htf else -0.5)
             + (0.4 if sum(delta[-10:]) > 0 else -0.4) + (0.3 if price > (e20[-1] or price) else -0.3))))
    fresh = sig and sig["i"] >= n - 2
    if fresh and ((sig["type"] == "BUY" and up < 50) or (sig["type"] == "SELL" and up > 50)):
        fresh = False
    if not fresh: return None
    dec = 1 if price >= 1000 else 2 if price >= 100 else 4 if price >= 1 else 6
    rn = lambda x: round(x, dec)
    return {"symbol": sym, "type": sig["type"], "entry": rn(sig["entry"]),
            "sl": rn(sig["sl"]), "tp": rn(sig["tp"]),
            "rsi": round(r[-1], 1) if r[-1] else None, "bias": round(up)}


def universe():
    rows = []
    for t in get(f"{KBASE}/ticker/24hr"):
        sym = t.get("symbol", "")
        if not sym.endswith("USDT"): continue
        if any(x in sym for x in ("UPUSDT", "DOWNUSDT", "BULLUSDT", "BEARUSDT")): continue
        if sym in ("USDCUSDT", "FDUSDUSDT", "TUSDUSDT", "BUSDUSDT", "EURUSDT"): continue
        vol = float(t.get("quoteVolume") or 0)
        if vol >= MIN_VOL_M * 1e6: rows.append((sym, vol))
    rows.sort(key=lambda x: -x[1])
    return [s for s, _ in rows[:TOP]]


def scan():
    uni = universe(); hits = []; done = 0
    for sym in uni:
        try:
            r = analyse(sym)
            done += 1
            if r: hits.append(r)
        except Exception:
            pass
        time.sleep(0.08)
    hits.sort(key=lambda r: -abs(r["bias"] - 50))
    now = datetime.now(timezone.utc).strftime("%H:%M:%S UTC")
    print("=" * 66)
    print(f"NaatAI live  |  {now}  |  {SRC}  |  {TF}  |  {done} pairs scanned")
    print("=" * 66)
    if not hits:
        print("No instant trades right now. Most candles are not tradeable - wait.")
    else:
        print(f"{'PAIR':<12}{'SIDE':<6}{'BIAS':<7}{'ENTRY':<13}{'STOP':<13}{'TARGET':<13}{'RSI'}")
        for r in hits:
            print(f"{r['symbol']:<12}{r['type']:<6}{str(r['bias'])+'%':<7}"
                  f"{str(r['entry']):<13}{str(r['sl']):<13}{str(r['tp']):<13}{r['rsi']}")
    print("Educational tool - NOT financial advice. Always place the printed stop-loss.\n")


print(f"Data source: {SRC}\n")
scan()
for _ in range(LOOPS):
    time.sleep(60)
    scan()
print("Done.")
