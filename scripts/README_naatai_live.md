# NaatAI live scanner

A single Python file that runs on **your own computer** (or GitHub Actions) and
continuously tells you **which pair has an instant BUY or SELL** right now, with
entry, stop-loss and take-profit ready to place.

It scans every liquid USDT pair on Binance and computes the same order-flow
engine as the naatai chart and Pine scripts: real taker buy/sell delta, EMA
20/50/200, RSI, ATR-based stop/target, a 4-hour trend filter, support/resistance,
fib levels and a next-candle bias. A signal is shown only when it fires on the
**last closed candle** and the current bias still agrees — so it's actionable now,
not stale.

## Why run it locally

From your own computer (in a region where Binance works) it uses the **real
Binance Futures API** — true taker volume, open interest, funding. That's better
data than any browser page or TradingView indicator can get. If the futures host
is blocked, it automatically falls back to Binance's public mirror, so it keeps
working anywhere.

## Install (2 minutes)

You only need **Python 3.8+** — no packages to install (pure standard library).

1. Install Python from https://www.python.org/downloads/ (tick "Add to PATH" on
   Windows).
2. Download `naatai_live.py` from this folder.
3. Open a terminal in that folder and run:

```bash
python3 naatai_live.py
```

(On Windows use `python naatai_live.py`.)

It refreshes every 60 seconds and prints the instant trades. Press `Ctrl+C` to stop.

## Options

```bash
python3 naatai_live.py --interval 30    # rescan every 30 seconds
python3 naatai_live.py --tf 5m          # 5-minute signals (faster, more noise)
python3 naatai_live.py --min-vol 5      # only pairs with > $5M 24h volume
python3 naatai_live.py --top 200        # scan up to 200 pairs
python3 naatai_live.py --consensus      # cross-check each signal on Bybit + MEXC
python3 naatai_live.py --once           # one scan and exit (for cron / CI)
```

## Get the signals on your phone (Telegram)

1. In Telegram, message **@BotFather**, send `/newbot`, follow the steps, copy the
   token it gives you.
2. Message **@userinfobot** to get your numeric chat id.
3. Set two environment variables and run:

```bash
export NAATAI_TG_TOKEN=123456:AA...    # your bot token
export NAATAI_TG_CHAT=987654321        # your chat id
python3 naatai_live.py
```

Every new instant trade is pushed to your phone as `BUY SOLUSDT @ 81.73  SL ...  TP ...`.

## Run it 24/7 in GitHub Actions

Add a workflow that runs `python scripts/naatai_live.py --once` on a schedule and
set the `NAATAI_TG_TOKEN` / `NAATAI_TG_CHAT` repository secrets so alerts reach
your phone even when your computer is off. (GitHub runners are US-based, so it
uses the public-mirror fallback automatically.)

## Honest limits

- It's a **rules-based screen, not a crystal ball.** No signal wins every time.
  The printed stop-loss and risking ≤ 1–2% per trade are what keep you alive.
- "From everywhere" in practice means **Binance is the core** (deepest book, real
  taker data) with an optional Bybit + MEXC consensus check via `--consensus`.
  CoinGecko is a price aggregator with no order-flow data, so it can't drive
  buy/sell signals.
- Paper-trade it first and confirm it fits your style before risking real money.
