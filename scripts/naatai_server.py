#!/usr/bin/env python3
"""NaatAI real-time web app - one file, no dependencies.

Runs the NaatAI order-flow scanner continuously in the background, tracks every
BUY/SELL as an open trade until it hits take-profit (WIN) or stop-loss (LOSS),
and serves a live auto-refreshing dashboard you open in any browser - on your
computer or your phone.

RUN IT LOCALLY
    python3 naatai_server.py
    then open http://localhost:8000   (or http://YOUR-PC-IP:8000 from your phone
    on the same wifi)

DEPLOY IT FREE (public URL that works on your phone anywhere)
    Push this repo to a free Python host and use this file as the start command:
        python3 scripts/naatai_server.py
    Hosts that work with zero config (they set the PORT env var, which this app
    reads): Render.com, Railway.app, Replit.com, Fly.io, PythonAnywhere.

Pure standard library - nothing to pip install. NOT financial advice.
"""

from __future__ import annotations

import json
import math
import os
import threading
import time
import urllib.request
import urllib.error
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

# ------------------------------- settings -----------------------------------
TF        = os.environ.get("NAATAI_TF", "15m")       # signal timeframe
MIN_VOL_M = float(os.environ.get("NAATAI_MINVOL", "3"))
TOP       = int(os.environ.get("NAATAI_TOP", "80"))
INTERVAL  = int(os.environ.get("NAATAI_INTERVAL", "60"))   # seconds between scans
PORT      = int(os.environ.get("PORT", "8000"))
# ----------------------------------------------------------------------------

FUT = "https://fapi.binance.com"; MIRROR = "https://data-api.binance.vision"
THR, SPACE, ATR_MULT, RR, VOL_MULT = 20.0, 5, 1.5, 2.0, 1.2

STATE = {"source": "starting...", "updated": None, "tf": TF,
         "open": [], "closed": [], "wins": 0, "losses": 0, "scanned": 0, "scanning": True}
LOCK = threading.Lock()


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
        except Exception as e:  # noqa: BLE001
            last = type(e).__name__; time.sleep(1.5)
    raise RuntimeError(str(last))


def pick_source():
    try:
        get(FUT + "/fapi/v1/ping", timeout=8, retries=1)
        return FUT + "/fapi/v1", "Binance Futures (real taker volume)"
    except Exception:  # noqa: BLE001
        return MIRROR + "/api/v3", "Binance public mirror"


KBASE, SRC = pick_source()


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
        c4 = [x["c"] for x in klines(sym, "4h", 120)]; h20, h50 = ema(c4, 20), ema(c4, 50)
        htf = None if h20[-1] is None or h50[-1] is None else h20[-1] > h50[-1]
    except Exception:  # noqa: BLE001
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
    if not fresh: return None
    dec = 1 if price >= 1000 else 2 if price >= 100 else 4 if price >= 1 else 6
    rn = lambda x: round(x, dec)
    return {"symbol": sym, "type": sig["type"], "entry": rn(sig["entry"]), "sl": rn(sig["sl"]),
            "tp": rn(sig["tp"]), "rsi": round(r[-1], 1) if r[-1] else None, "bias": round(up), "dec": dec}


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


def scanner_loop():
    open_trades = {}; closed = []
    while True:
        try:
            uni, price = universe_and_prices()
            # update open trades against live price
            for sym in list(open_trades):
                tr = open_trades[sym]; p = price.get(sym)
                if not p: continue
                hit_tp = p >= tr["tp"] if tr["type"] == "BUY" else p <= tr["tp"]
                hit_sl = p <= tr["sl"] if tr["type"] == "BUY" else p >= tr["sl"]
                if hit_tp or hit_sl:
                    tr["result"] = "WIN" if hit_tp else "LOSS"; tr["exit"] = round(p, tr["dec"])
                    tr["closed_at"] = datetime.now(timezone.utc).strftime("%H:%M UTC")
                    closed.insert(0, tr); del open_trades[sym]
            # find new signals
            scanned = 0
            for sym in uni:
                if sym in open_trades:
                    scanned += 1; continue
                try:
                    sig = analyse(sym); scanned += 1
                    if sig:
                        sig["opened"] = datetime.now(timezone.utc).strftime("%H:%M UTC")
                        open_trades[sym] = sig
                except Exception:  # noqa: BLE001
                    pass
                time.sleep(0.05)
            # build live view with current P&L
            view = []
            for sym, tr in open_trades.items():
                p = price.get(sym, tr["entry"])
                pnl = (p - tr["entry"]) / tr["entry"] * 100 * (1 if tr["type"] == "BUY" else -1)
                v = dict(tr); v["now"] = round(p, tr["dec"]); v["pnl"] = round(pnl, 2)
                view.append(v)
            view.sort(key=lambda r: -abs(r["bias"] - 50))
            with LOCK:
                STATE.update({
                    "source": SRC, "tf": TF, "scanning": False, "scanned": scanned,
                    "updated": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
                    "open": view, "closed": closed[:20],
                    "wins": sum(1 for c in closed if c["result"] == "WIN"),
                    "losses": sum(1 for c in closed if c["result"] == "LOSS")})
        except Exception as e:  # noqa: BLE001
            with LOCK:
                STATE["source"] = f"{SRC} (retrying: {type(e).__name__})"
        time.sleep(INTERVAL)


PAGE = """<!doctype html><html lang=en><head><meta charset=utf-8>
<meta name=viewport content="width=device-width,initial-scale=1">
<title>NaatAI live</title><style>
:root{--bg:#0b0e14;--panel:#131823;--line:#232b3a;--text:#e6edf3;--muted:#8b98a9;--green:#2ecc71;--red:#ff5c5c;--amber:#f5a623;--blue:#4d9fff}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:14px/1.5 -apple-system,Segoe UI,Roboto,Arial,sans-serif}
.wrap{max-width:1050px;margin:0 auto;padding:18px 14px 60px}
h1{font-size:20px;margin:0 0 2px}h1 span{color:#6c5ce7}
.sub{color:var(--muted);font-size:12px}
.stats{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}
.stat{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:8px 13px;min-width:90px}
.stat .l{color:var(--muted);font-size:10.5px;text-transform:uppercase;letter-spacing:.5px}
.stat .v{font-size:18px;font-weight:800;font-variant-numeric:tabular-nums}
h2{font-size:12px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin:20px 0 8px}
table{width:100%;border-collapse:collapse;background:var(--panel);border:1px solid var(--line);border-radius:10px;overflow:hidden}
th,td{padding:8px 11px;text-align:right;font-size:12.5px;border-bottom:1px solid var(--line);font-variant-numeric:tabular-nums}
th{color:var(--muted);text-transform:uppercase;font-size:10px;letter-spacing:.5px;text-align:right}
th:first-child,td:first-child{text-align:left}tr:last-child td{border-bottom:0}
.buy{color:var(--green);font-weight:700}.sell{color:var(--red);font-weight:700}
.up{color:var(--green)}.dn{color:var(--red)}.mut{color:var(--muted)}
.empty{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:16px;color:var(--muted)}
footer{margin-top:22px;color:var(--muted);font-size:11.5px;text-align:center;line-height:1.6}
.dot{color:var(--green)}
</style></head><body><div class=wrap>
<h1>naat<span>ai</span> · live trades</h1>
<div class=sub id=sub>connecting...</div>
<div class=stats id=stats></div>
<h2>Open trades — running until TP or SL</h2>
<div id=open></div>
<h2>Recently closed</h2>
<div id=closed></div>
<footer>Auto-refreshes every 10s. Educational tool, NOT financial advice. Futures use leverage — you can lose more than your margin. Always place the printed stop-loss.</footer>
</div><script>
const $=id=>document.getElementById(id);
function fmtPnl(x){return (x>=0?'+':'')+x.toFixed(2)+'%';}
async function tick(){
 try{
  const d=await (await fetch('/api?_='+Date.now())).json();
  $('sub').innerHTML='<span class=dot>●</span> '+(d.scanning?'first scan running…':'updated '+d.updated)+' · '+d.source+' · '+d.tf+' · '+d.scanned+' pairs';
  $('stats').innerHTML=
   `<div class=stat><div class=l>Open</div><div class=v>${d.open.length}</div></div>`+
   `<div class=stat><div class=l style="color:var(--green)">Wins</div><div class="v up">${d.wins}</div></div>`+
   `<div class=stat><div class=l style="color:var(--red)">Losses</div><div class="v dn">${d.losses}</div></div>`+
   `<div class=stat><div class=l>Win rate</div><div class=v>${d.wins+d.losses?Math.round(100*d.wins/(d.wins+d.losses))+'%':'—'}</div></div>`;
  $('open').innerHTML = d.open.length ? `<table><tr><th>Pair</th><th>Side</th><th>Bias</th><th>Entry</th><th>Now</th><th>Stop</th><th>Target</th><th>P&L</th></tr>`+
   d.open.map(t=>`<tr><td>${t.symbol}</td><td class=${t.type.toLowerCase()}>${t.type}</td><td>${t.bias}%</td><td>${t.entry}</td><td>${t.now}</td><td class=dn>${t.sl}</td><td class=up>${t.tp}</td><td class=${t.pnl>=0?'up':'dn'}>${fmtPnl(t.pnl)}</td></tr>`).join('')+`</table>`
   : `<div class=empty>No open trades right now — waiting for a fresh BUY/SELL. Most candles are not tradeable, that's normal.</div>`;
  $('closed').innerHTML = d.closed.length ? `<table><tr><th>Pair</th><th>Side</th><th>Entry</th><th>Exit</th><th>Result</th><th>Closed</th></tr>`+
   d.closed.map(t=>`<tr><td>${t.symbol}</td><td class=${t.type.toLowerCase()}>${t.type}</td><td>${t.entry}</td><td>${t.exit}</td><td class=${t.result==='WIN'?'up':'dn'}>${t.result}</td><td class=mut>${t.closed_at}</td></tr>`).join('')+`</table>`
   : `<div class=empty>No closed trades yet.</div>`;
 }catch(e){ $('sub').textContent='reconnecting…'; }
}
tick(); setInterval(tick, 10000);
</script></body></html>"""


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a):  # quiet
        pass

    def do_GET(self):
        if self.path.startswith("/api"):
            with LOCK:
                body = json.dumps(STATE).encode()
            self.send_response(200); self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Content-Length", str(len(body))); self.end_headers()
            self.wfile.write(body)
        else:
            body = PAGE.encode()
            self.send_response(200); self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body))); self.end_headers()
            self.wfile.write(body)


def main():
    print(f"NaatAI server starting - data source: {SRC}")
    threading.Thread(target=scanner_loop, daemon=True).start()
    srv = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    print(f"Open http://localhost:{PORT}  (first scan takes ~1-2 min to populate)")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
