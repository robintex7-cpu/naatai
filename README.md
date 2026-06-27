# Naatai — Binance Futures swing-trade signal engine

Naatai turns the hand-drawn **"SuperAreas" price-action setup** into a working
program that scans Binance USDⓈ-M Futures, decides **take the trade / don't take
the trade**, and **alerts you** with a clear buy/sell plan (entry, stop, targets,
confidence).

It is built for **positional / swing trading** — holds of **hours to days**, not
minute scalps — so it works on the **1h, 4h and 1d** timeframes by default.

> ⚠️ **Signals & alerts only. Naatai never places orders and never needs your
> Binance API keys.** It only reads public market data. You stay in full control
> of every trade. Nothing here is financial advice — markets are risky and you
> can lose money. Test on paper first.

---

## The setup, straight from your two photos

The hand-drawn chart ("I took more than 1000 trades using this setup") describes
a repeatable **contraction -> breakout** pattern. Here is how each label maps to
code:

| On the chart | What it means | In Naatai |
|---|---|---|
| **Range Expansion** / full-body candles | "Institutional interest" — a strong impulse leg | `body_ratio >= impulse_body_ratio` candle in the trend direction |
| **Range Contraction** — "candle size getting smaller" | Pressure fading, price coils into a tight box | average candle range over the box window shrinks vs the impulse window |
| **Breakout -> 1st Entry** | Price closes out of the box | a full-body candle **closes** beyond the box edge + a buffer (anti-fakeout) |
| **Expansion** | Strong continuation | the breakout candle's own body strength feeds the confidence score |
| **Pivot Breaker / Late IB -> 2nd Entry** | A second, higher contraction breaks the prior swing pivot | breakout that also clears the last swing pivot -> labelled "2nd entry", higher confidence |

Only **closed candles** are used, so a signal never repaints (it won't appear and
then vanish mid-candle).

### When Naatai says **TAKE** the trade

All of these must line up:
1. A clear **impulse / expansion** leg just happened (institutional footprint).
2. Price then **contracted** — candles got smaller and the box is tight.
3. A **full-body candle closed** beyond the box edge by more than the buffer.
4. It agrees with the **higher-timeframe trend** (EMA-20 vs EMA-50 stack).
5. **Volume** on the breakout is above its recent average.

### When Naatai says **NO TRADE / WAIT**

It tells you *why* — e.g. "range not contracting", "breakout against trend",
"breakout volume below average", "consolidation box too wide". `WAIT` means a
contraction has formed and it's watching the box edges (enable `alert_on_watch`
to be pinged on these too).

---

## Quick start

No installation required — Naatai runs on the **Python 3.9+ standard library**.

```bash
# 1) See it work offline on a synthetic setup (no network, no keys)
python run.py demo

# 2) One live scan of a few coins (needs internet + Binance reachable)
python run.py scan --symbols BTCUSDT ETHUSDT SOLUSDT --timeframes 4h 1d

# 3) Run it continuously and get alerted on new setups
cp config.example.json config.json     # then edit it
python run.py watch
```

> **Note:** Binance blocks some hosting regions (you'll see `HTTP 451`). Run
> Naatai from a location where `https://fapi.binance.com` is reachable (e.g. your
> own computer). No VPN logic is built in on purpose.

---

## Configuration (`config.json`)

Copy `config.example.json` to `config.json` and edit. Key options:

```jsonc
{
  "symbols": ["BTCUSDT", "ETHUSDT", "SOLUSDT"], // coins to watch
  "auto_top_symbols": 0,        // >0 = auto-scan the N most active perps instead
  "timeframes": ["4h", "1d"],   // swing horizons (hours -> days)
  "poll_interval_seconds": 300, // how often to re-scan
  "min_confidence": 60,         // ignore weak TAKE signals below this score
  "alert_on_watch": false,      // also alert when a contraction is forming
  "alerts": {
    "console": true,
    "file": "signals.log",      // every signal appended as JSON
    "telegram_token": "",       // get from @BotFather  (or env NAATAI_TELEGRAM_TOKEN)
    "telegram_chat_id": "",     // your chat id          (or env NAATAI_TELEGRAM_CHAT_ID)
    "webhook_url": ""           // Discord/Slack incoming webhook (or env NAATAI_WEBHOOK_URL)
  },
  "strategy": { /* fine-tune detection — see config.example.json */ }
}
```

### Alerts to your phone (Telegram)

1. Message **@BotFather** on Telegram -> `/newbot` -> copy the **token**.
2. Message your new bot once, then open
   `https://api.telegram.org/bot<TOKEN>/getUpdates` to find your **chat id**.
3. Put both in `config.json` (or set `NAATAI_TELEGRAM_TOKEN` /
   `NAATAI_TELEGRAM_CHAT_ID`). Discord/Slack work via `webhook_url`.

---

## Backtesting

Check how the setup behaved on real history before trusting it live:

```bash
python run.py backtest --symbols BTCUSDT ETHUSDT --timeframes 4h --limit 1000
```

It walks forward candle by candle (no look-ahead), enters at the next open, exits
on stop / first target / timeout, and reports win rate, average **R**, total R and
profit factor. Treat results as a sanity check, not a promise.

---

## What an alert looks like

```
🟢 BUY BTCUSDT [4h] — Breakout (1st entry) (75%)
   Entry ≈ 64210
   Stop  = 62980
   Targets = 65440, 66670, 67900
   R:R (to T1) = 1.0
   Why: range contracted after an impulse leg; full-body breakout candle
        (body 71% of range); aligned with higher-timeframe trend (EMA stack);
        breakout backed by above-average volume
```

- **Entry** — the breakout candle's close (where you'd enter at market now).
- **Stop** — just beyond the opposite box edge; if price returns there, the setup
  is invalid.
- **Targets** — 1R / 2R / 3R (multiples of your entry-to-stop risk). Scale out.
- **Confidence** — transparent 0–100 score; raise `min_confidence` to be pickier.

---

## Project layout

```
naatai/
  indicators.py   Candle geometry, EMA, ATR, swing pivots (pure Python)
  datafeed.py     Binance public klines + a synthetic feed for offline tests
  strategy.py     The SuperAreas contraction->breakout logic (the brain)
  signals.py      Signal/decision objects + human-readable explanations
  alerts.py       Console / Telegram / webhook / file sinks with de-dup
  engine.py       The scan-poll-alert loop
  backtest.py     Honest walk-forward backtester
  cli.py          scan / watch / backtest / demo commands
tests/            pytest suite (run: python -m pytest)
```

## Roadmap ideas

- Retest entries (wait for price to return to the box edge for a tighter stop).
- Multi-timeframe confluence (4h setup confirmed by 1d trend).
- The `naatai-ai` repo is reserved for an optional AI layer (e.g. ranking setups
  or summarising market context).

---

*Built to match the price-action setup in the two reference images. Use responsibly.*
