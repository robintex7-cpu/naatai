# NaatAI OrderFlow Candles — Trading Guide

## 1. Correct chart setup (do this first)

1. Add **NaatAI OrderFlow Candles** to the chart.
2. Hide TradingView's own candles: click the **eye icon** next to the symbol
   name (top-left). Only the indicator's delta-colored candles should remain.
3. Add **NaatAI Heikin Ashi Panel** below (set its timeframe one step above
   your chart, e.g. chart 15m → HA panel 1h).
4. Zoom in until footprint numbers are readable. If it looks cluttered,
   lower "Footprint: last N bars" or turn footprint cells off and keep only
   the delta labels.

## 2. Why signals only appear at candle close

The buy/sell volume, delta and probability update live during a candle.
A signal is only **confirmed when the candle closes** — this prevents
"repainting" (signals appearing then disappearing mid-candle). Never act on
what the dashboard shows mid-candle; wait for the close.

## 3. What a valid BUY looks like (all at once)

- **Signal**: green BUY triangle printed at candle close
- **Delta**: strongly positive (dashboard delta ≥ +15%)
- **HTF trend**: UP (dashboard row) — you are trading with the bigger trend
- **RSI**: between 40 and 75 (momentum, but not overbought)
- **Fibonacci**: price bouncing off / holding above the 0.382–0.618 zone
- **Heikin Ashi panel**: green candles on the higher timeframe

A valid SELL is the mirror image. If 1–2 of these are missing, skip the
trade — the next signal always comes.

## 4. Entry, stop-loss, take-profit

Each signal prints a label with suggested levels:

- **Entry**: close of the signal candle
- **Stop-loss**: 1.5 × ATR(14) beyond the entry (below for BUY, above for SELL)
- **Take-profit**: 2R by default (risk $1 to make $2) — configurable

Management rules:

- Risk a fixed **1% (max 2%) of account per trade**. Position size =
  (account × 1%) / distance to stop.
- Move stop to break-even once price has moved 1R in your favor.
- Optional: take half at 1R, let the rest run to 2R or trail behind the
  Heikin Ashi panel (exit when HA flips color).

## 5. When to exit / how long to hold

Hold while the trade thesis is alive; exit when any of these happens:

1. **Take-profit or stop-loss hits** (mechanical — preferred).
2. **Heikin Ashi flips** against you on your trading timeframe.
3. **Delta flips hard** against you (e.g. long, and two consecutive candles
   close with delta ≤ −15%).
4. **Opposite signal** prints.

Typical holding time by chart timeframe:

| Chart TF | Style | Typical hold | HTF filter |
|---|---|---|---|
| 5m | Scalping | 15 min – 2 h | 1h |
| **15m** | **Day trading (recommended)** | **1 – 6 h** | **4h (default)** |
| 1h | Intraday swing | 4 h – 2 days | D |
| 4h | Swing | 1 – 7 days | D or W |

15m–1h is the sweet spot: enough intrabar volume data for accurate
buy/sell splitting, and fewer whipsaws than 1m–5m. Avoid 1m charts — the
noise makes any signal engine unreliable.

## 6. Best times to trade (liquidity)

- **Crypto**: 13:00–21:00 UTC (US session) has the strongest orderflow.
- **Indices / futures**: first 2 hours and last hour of the exchange session.
- **Avoid**: 15 min before/after major news (CPI, FOMC, NFP), weekends and
  holidays in crypto, and the first 5 minutes of any session open.

## 7. Tuning for accuracy vs. frequency

| Want | Change |
|---|---|
| Fewer, stronger signals | Probability threshold 65 → 70–75, Min delta% 15 → 20 |
| More signals | Threshold → 60, Min delta% → 10, turn HTF filter off |
| Choppy market | Increase "Min bars between signals" 10 → 20 |
| Strong trend day | HTF filter on, take only signals in HTF direction |

## 8. Discipline checklist (print this)

- [ ] Signal confirmed at candle close (not mid-candle)
- [ ] HTF trend agrees
- [ ] Delta ≥ threshold in signal direction
- [ ] Near a fib level / not chasing an extended move
- [ ] Risk ≤ 1% with stop placed BEFORE entry
- [ ] No red-flag news in the next hour
- [ ] Journal the trade (screenshot entry + exit)

> **Important:** no indicator predicts the future — the probability engine
> reports statistical tendencies from past data. Expect losing trades; the
> edge comes from taking only A-grade setups and keeping losses at 1R.
> This is educational material, not financial advice.
