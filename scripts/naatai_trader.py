#!/usr/bin/env python3
"""NaatAI trading bot - Binance USDⓈ-M Futures (python-binance).

Scans every liquid pair, and when a fresh BUY/SELL fires it places a REAL order
on Binance with a stop-loss and take-profit attached on the exchange, sized to
risk a fixed % of your balance. Then it lets the exchange manage the trade to
TP or SL.

  >>> DEFAULTS TO BINANCE TESTNET (fake money). <<<
Prove it works on testnet for days before going anywhere near real money.

SETUP
  1. pip install python-binance
  2. Get TESTNET futures keys (free, fake money) at:
        https://testnet.binancefuture.com/  ->  API Key
     (For live later, use https://www.binance.com/en/my/settings/api-management
      with Futures enabled, WITHDRAWALS DISABLED, and IP-restricted.)
  3. Set environment variables and run:
        export BINANCE_KEY=your_key
        export BINANCE_SECRET=your_secret
        python3 naatai_trader.py

SAFETY KNOBS (env vars)
  NAATAI_TESTNET   default "true"  -> testnet. Set "false" ONLY for live money.
  NAATAI_CONFIRM_LIVE            must equal "YES-I-ACCEPT-THE-RISK" to trade live.
  NAATAI_DRYRUN    default "false" -> "true" logs orders without sending them.
  NAATAI_RISK_PCT  default 1.0     -> risk this % of balance per trade.
  NAATAI_LEVERAGE  default 5
  NAATAI_MAX_POS   default 3       -> max simultaneous open positions.
  NAATAI_DAILY_LOSS_PCT default 5  -> stop trading for the day after this % loss.
  NAATAI_TF        default 15m     NAATAI_TOP default 80   NAATAI_MINVOL default 3

This automates YOUR OWN account. It is not financial advice. Automated trading
can lose money quickly through bugs, bad fills, or volatility. You accept that risk.
"""

from __future__ import annotations

import json
import math
import os
import time
import urllib.request
import urllib.error
from datetime import datetime, timezone

try:
    from binance.client import Client
    from binance.exceptions import BinanceAPIException
except ImportError:
    raise SystemExit("Missing dependency. Run:  pip install python-binance")

# ------------------------------- config -------------------------------------
TESTNET   = os.environ.get("NAATAI_TESTNET", "true").lower() != "false"
DRYRUN    = os.environ.get("NAATAI_DRYRUN", "false").lower() == "true"
RISK_PCT  = float(os.environ.get("NAATAI_RISK_PCT", "1.0"))
LEVERAGE  = int(os.environ.get("NAATAI_LEVERAGE", "5"))
MAX_POS   = int(os.environ.get("NAATAI_MAX_POS", "3"))
DAILY_LOSS_PCT = float(os.environ.get("NAATAI_DAILY_LOSS_PCT", "5"))
TF        = os.environ.get("NAATAI_TF", "15m")
TOP       = int(os.environ.get("NAATAI_TOP", "80"))
MIN_VOL_M = float(os.environ.get("NAATAI_MINVOL", "3"))
INTERVAL  = int(os.environ.get("NAATAI_INTERVAL", "60"))
KEY       = os.environ.get("BINANCE_KEY", "")
SECRET    = os.environ.get("BINANCE_SECRET", "")

THR, SPACE, ATR_MULT, RR, VOL_MULT = 20.0, 5, 1.5, 2.0, 1.2
# data source for signals (read-only) - public mirror is reachable anywhere
DATA = "https://data-api.binance.vision/api/v3"


def log(*a):
    print(datetime.now(timezone.utc).strftime("%H:%M:%S"), *a, flush=True)


# --------------------------- signal engine (read-only) ----------------------
def _get(url, timeout=20, retries=3):
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


def klines(sym, interval, limit):
    raw = _get(f"{DATA}/klines?symbol={sym}&interval={interval}&limit={limit}")
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
    return sig if fresh else None


def universe():
    rows = []
    for t in _get(f"{DATA}/ticker/24hr"):
        sym = t.get("symbol", "")
        if not sym.endswith("USDT"): continue
        if any(x in sym for x in ("UPUSDT", "DOWNUSDT", "BULLUSDT", "BEARUSDT")): continue
        if sym in ("USDCUSDT", "FDUSDUSDT", "TUSDUSDT", "BUSDUSDT", "EURUSDT"): continue
        vol = float(t.get("quoteVolume") or 0)
        if vol >= MIN_VOL_M * 1e6: rows.append((sym, vol))
    rows.sort(key=lambda x: -x[1])
    return [s for s, _ in rows[:TOP]]


# ------------------------------ execution -----------------------------------
class Trader:
    def __init__(self):
        if not KEY or not SECRET:
            raise SystemExit("Set BINANCE_KEY and BINANCE_SECRET environment variables.")
        if not TESTNET and os.environ.get("NAATAI_CONFIRM_LIVE") != "YES-I-ACCEPT-THE-RISK":
            raise SystemExit("Refusing to trade LIVE money. To go live set "
                             "NAATAI_TESTNET=false AND NAATAI_CONFIRM_LIVE=YES-I-ACCEPT-THE-RISK")
        self.client = Client(KEY, SECRET, testnet=TESTNET)
        self.filters = {}          # symbol -> (qtyPrec, pricePrec, minNotional)
        self.start_balance = self.balance()
        self.day = datetime.now(timezone.utc).date()
        self._load_filters()
        mode = "DRY-RUN" if DRYRUN else ("TESTNET" if TESTNET else "*** LIVE MONEY ***")
        log(f"Trader ready [{mode}]  balance={self.start_balance:.2f} USDT  "
            f"risk={RISK_PCT}%  lev={LEVERAGE}x  max_pos={MAX_POS}")

    def _load_filters(self):
        info = self.client.futures_exchange_info()
        for s in info["symbols"]:
            mn = 5.0
            for f in s.get("filters", []):
                if f.get("filterType") == "MIN_NOTIONAL":
                    mn = float(f.get("notional", f.get("minNotional", 5.0)))
            self.filters[s["symbol"]] = (int(s["quantityPrecision"]), int(s["pricePrecision"]), mn)

    def balance(self):
        for b in self.client.futures_account_balance():
            if b["asset"] == "USDT":
                return float(b["balance"])
        return 0.0

    def open_symbols(self):
        out = set()
        for p in self.client.futures_position_information():
            if abs(float(p["positionAmt"])) > 0:
                out.add(p["symbol"])
        return out

    def _round(self, x, prec):
        return round(x, prec)

    def place(self, sig, sym):
        if sym not in self.filters:
            return
        qprec, pprec, min_notional = self.filters[sym]
        entry, sl, tp = sig["entry"], sig["sl"], sig["tp"]
        risk_usd = self.balance() * RISK_PCT / 100.0
        dist = abs(entry - sl)
        if dist <= 0:
            return
        qty = self._round(risk_usd / dist, qprec)
        if qty <= 0 or qty * entry < min_notional:
            qty = self._round(min_notional / entry * 1.02, qprec)  # bump to min notional
        side = "BUY" if sig["type"] == "BUY" else "SELL"
        close_side = "SELL" if side == "BUY" else "BUY"
        sl_p = self._round(sl, pprec); tp_p = self._round(tp, pprec)
        if DRYRUN:
            log(f"[DRYRUN] would {side} {qty} {sym} @~{entry}  SL {sl_p}  TP {tp_p}  (risk {risk_usd:.2f})")
            return
        try:
            self.client.futures_change_leverage(symbol=sym, leverage=LEVERAGE)
            self.client.futures_create_order(symbol=sym, side=side, type="MARKET", quantity=qty)
            # stop-loss and take-profit that close the whole position on the exchange
            self.client.futures_create_order(symbol=sym, side=close_side, type="STOP_MARKET",
                                              stopPrice=sl_p, closePosition=True, workingType="MARK_PRICE")
            self.client.futures_create_order(symbol=sym, side=close_side, type="TAKE_PROFIT_MARKET",
                                              stopPrice=tp_p, closePosition=True, workingType="MARK_PRICE")
            log(f"OPENED {side} {qty} {sym} @~{entry}  SL {sl_p}  TP {tp_p}  (risk {risk_usd:.2f} USDT)")
        except BinanceAPIException as e:
            log(f"ORDER FAILED {sym}: {e.message}")

    def daily_guard(self):
        # reset the baseline each UTC day; stop if today's loss exceeds the limit
        today = datetime.now(timezone.utc).date()
        if today != self.day:
            self.day = today; self.start_balance = self.balance()
        bal = self.balance()
        dd = (self.start_balance - bal) / self.start_balance * 100 if self.start_balance else 0
        return dd < DAILY_LOSS_PCT, dd


def main():
    t = Trader()
    while True:
        try:
            ok, dd = t.daily_guard()
            if not ok:
                log(f"Daily loss {dd:.1f}% >= {DAILY_LOSS_PCT}% - trading paused until next UTC day.")
                time.sleep(INTERVAL); continue
            held = t.open_symbols()
            room = MAX_POS - len(held)
            uni = universe()
            log(f"scan: {len(uni)} pairs · {len(held)} open · {room} slots · bal {t.balance():.2f}")
            for sym in uni:
                if room <= 0:
                    break
                if sym in held:
                    continue
                try:
                    sig = analyse(sym)
                    if sig:
                        t.place(sig, sym)
                        held.add(sym); room -= 1
                except Exception as e:  # noqa: BLE001
                    log(f"skip {sym}: {type(e).__name__}")
                time.sleep(0.05)
        except Exception as e:  # noqa: BLE001
            log(f"loop error: {type(e).__name__}: {e}")
        time.sleep(INTERVAL)


if __name__ == "__main__":
    main()
