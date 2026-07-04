# ============================================================================
# NaatAI live scanner + trade tracker - GOOGLE COLAB version.
# HOW TO USE: colab.research.google.com -> New notebook -> paste this WHOLE
# block into one code cell -> press the play button (Shift+Enter).
#
# It scans every liquid Binance pair, and when a BUY/SELL fires it OPENS a trade
# and KEEPS tracking it every scan - showing it as RUNNING with live profit -
# until price hits the take-profit (WIN) or stop-loss (LOSS). For each open trade
# it also draws the candlestick chart with entry / SL / TP lines.
# Press the stop button to end. NOT financial advice.
# ============================================================================
import json, math, time, urllib.request, urllib.error
from datetime import datetime, timezone
import matplotlib.pyplot as plt

# ------------------------------- settings -----------------------------------
TF        = "15m"   # signal timeframe: "5m", "15m", "1h", "4h"
MIN_VOL_M = 3       # only pairs with more than this many $millions 24h volume
TOP       = 120     # scan up to this many pairs
LOOPS     = 30      # how many times to rescan (60s apart). 30 = ~30 minutes.
SHOW_CHART = True   # draw the candlestick chart for each open trade
# ----------------------------------------------------------------------------

FUT = "https://fapi.binance.com"; MIRROR = "https://data-api.binance.vision"
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
            if e.code in (429, 418, 503, 502): time.sleep(2 * (a + 1)); continue
            break
        except Exception as e:
            last = type(e).__name__; time.sleep(1.5)
    raise RuntimeError(str(last))


try:
    get(FUT + "/fapi/v1/ping", timeout=8, retries=1)
    KBASE, SRC = FUT + "/fapi/v1", "Binance Futures (real taker volume)"
except Exception:
    KBASE, SRC = MIRROR + "/api/v3", "Binance public mirror"


def klines(sym, interval, limit):
    raw = get(f"{KBASE}/klines?symbol={sym}&interval={interval}&limit={limit}")
    return [{"t": int(k[0]), "o": float(k[1]), "h": float(k[2]), "l": float(k[3]),
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
            if i == p: g /= p; l /= p; out[i] = 100.0 if l == 0 else 100 - 100 / (1 + g / l)
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
    """Returns (signal_dict_or_None, bars). Signal is only returned when it is
    FRESH - fired on the last closed candle and the current bias still agrees."""
    b = klines(sym, TF, 300)
    if len(b) < 60: return None, b
    c = [x["c"] for x in b]; n = len(b)
    e20 = ema(c, 20); r = rsi(c, 14); at = atr(b, 14)
    delta = [2 * x["tb"] - x["v"] for x in b]
    vavg = [0.0] * n; s = 0.0
    for i in range(n):
        s += b[i]["v"]
        if i >= 50: s -= b[i - 50]["v"]
        vavg[i] = s / min(i + 1, 50)
    try:
        c4 = [x["c"] for x in klines(sym, "4h", 120)]; h20, h50 = ema(c4, 20), ema(c4, 50)
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
    price = b[-1]["c"]; dp_now = delta[-1] / b[-1]["v"] * 100 if b[-1]["v"] else 0
    up = max(15, min(85, 50 + 50 * math.tanh(dp_now / 25 + (0.5 if htf else -0.5)
             + (0.4 if sum(delta[-10:]) > 0 else -0.4) + (0.3 if price > (e20[-1] or price) else -0.3))))
    fresh = sig and sig["i"] >= n - 2
    if fresh and ((sig["type"] == "BUY" and up < 50) or (sig["type"] == "SELL" and up > 50)):
        fresh = False
    if not fresh: return None, b
    dec = 1 if price >= 1000 else 2 if price >= 100 else 4 if price >= 1 else 6
    rn = lambda x: round(x, dec)
    return {"symbol": sym, "type": sig["type"], "entry": rn(sig["entry"]), "sl": rn(sig["sl"]),
            "tp": rn(sig["tp"]), "rsi": round(r[-1], 1) if r[-1] else None, "bias": round(up),
            "dec": dec}, b


def universe_and_prices():
    rows = []; price = {}
    for t in get(f"{KBASE}/ticker/24hr"):
        sym = t.get("symbol", "")
        if not sym.endswith("USDT"): continue
        price[sym] = float(t.get("lastPrice") or 0)
        if any(x in sym for x in ("UPUSDT", "DOWNUSDT", "BULLUSDT", "BEARUSDT")): continue
        if sym in ("USDCUSDT", "FDUSDUSDT", "TUSDUSDT", "BUSDUSDT", "EURUSDT"): continue
        vol = float(t.get("quoteVolume") or 0)
        if vol >= MIN_VOL_M * 1e6: rows.append((sym, vol))
    rows.sort(key=lambda x: -x[1])
    return [s for s, _ in rows[:TOP]], price


def plot_trade(tr, bars):
    b = bars[-60:]
    fig, ax = plt.subplots(figsize=(11, 4.2))
    for i, k in enumerate(b):
        col = "#2ecc71" if k["c"] >= k["o"] else "#ff5c5c"
        ax.plot([i, i], [k["l"], k["h"]], color=col, linewidth=0.8)
        ax.add_patch(plt.Rectangle((i - 0.3, min(k["o"], k["c"])), 0.6,
                     max(abs(k["c"] - k["o"]), 1e-9), color=col))
    ax.axhline(tr["entry"], color="#e6edf3", ls="--", lw=1, label=f"ENTRY {tr['entry']}")
    ax.axhline(tr["sl"], color="#ff5c5c", ls="--", lw=1, label=f"SL {tr['sl']}")
    ax.axhline(tr["tp"], color="#2ecc71", ls="--", lw=1, label=f"TP {tr['tp']}")
    ax.set_title(f"{tr['symbol']}  {tr['type']}  ({TF})  bias {tr['bias']}%", fontsize=11)
    ax.legend(loc="upper left", fontsize=8); ax.set_xticks([])
    ax.set_facecolor("#0b0e14"); fig.patch.set_facecolor("#0b0e14")
    ax.tick_params(colors="#8b98a9"); ax.title.set_color("#e6edf3")
    for s in ax.spines.values(): s.set_color("#232b3a")
    plt.tight_layout(); plt.show()


open_trades = {}   # symbol -> trade dict (persists across scans)
history = []       # closed trades


def scan(loop_no):
    uni, price = universe_and_prices()
    now = datetime.now(timezone.utc).strftime("%H:%M:%S UTC")

    # 1) update OPEN trades against the live price -> WIN / LOSS / still RUNNING
    just_closed = []
    for sym, tr in list(open_trades.items()):
        p = price.get(sym)
        if not p: continue
        hit_tp = p >= tr["tp"] if tr["type"] == "BUY" else p <= tr["tp"]
        hit_sl = p <= tr["sl"] if tr["type"] == "BUY" else p >= tr["sl"]
        if hit_tp or hit_sl:
            tr["result"] = "WIN (+2R)" if hit_tp else "LOSS (-1R)"
            tr["closed_price"] = p; just_closed.append(tr)
            history.append(tr); del open_trades[sym]

    # 2) look for NEW signals; open a trade for any not already open
    new_trades = []
    for sym in uni:
        if sym in open_trades:
            continue
        try:
            sig, bars = analyse(sym)
            if sig:
                sig["opened"] = now; open_trades[sym] = sig
                new_trades.append((sig, bars))
        except Exception:
            pass
        time.sleep(0.08)

    # 3) print
    print("=" * 78)
    print(f"NaatAI  |  scan {loop_no}  |  {now}  |  {SRC}  |  {TF}")
    print("=" * 78)
    wins = sum(1 for h in history if h["result"].startswith("WIN"))
    losses = sum(1 for h in history if h["result"].startswith("LOSS"))
    if history:
        print(f"Record so far: {wins} WIN / {losses} LOSS")

    for tr in just_closed:
        tag = "WIN " if tr["result"].startswith("WIN") else "LOSS"
        print(f"  >> CLOSED {tr['symbol']} {tr['type']}  ->  {tr['result']}  @ {tr['closed_price']}")

    if open_trades:
        print(f"\nOPEN TRADES ({len(open_trades)}) - running until TP or SL:")
        print(f"  {'PAIR':<12}{'SIDE':<6}{'ENTRY':<12}{'NOW':<12}{'STOP':<12}{'TARGET':<12}{'P&L'}")
        for sym, tr in open_trades.items():
            p = price.get(sym, tr["entry"])
            pnl = (p - tr["entry"]) / tr["entry"] * 100 * (1 if tr["type"] == "BUY" else -1)
            print(f"  {sym:<12}{tr['type']:<6}{str(tr['entry']):<12}{round(p, tr['dec']):<12}"
                  f"{str(tr['sl']):<12}{str(tr['tp']):<12}{pnl:+.2f}%")
    else:
        print("\nNo open trades. Waiting for a fresh BUY/SELL - most candles are not tradeable.")

    if new_trades:
        print(f"\n*** {len(new_trades)} NEW TRADE(S) THIS SCAN ***")
        for sig, bars in new_trades:
            print(f"  {sig['type']} {sig['symbol']}  entry {sig['entry']}  "
                  f"SL {sig['sl']}  TP {sig['tp']}  (bias {sig['bias']}%)")
            if SHOW_CHART:
                plot_trade(sig, bars)
    print("Educational tool - NOT financial advice. Always place the printed stop-loss.\n")


print(f"Data source: {SRC}\n")
scan(1)
for i in range(2, LOOPS + 1):
    time.sleep(60)
    scan(i)
print("Finished all scans. Run the cell again to keep going.")
