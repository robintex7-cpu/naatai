# NaatAI OrderFlow Candles (TradingView indicator)

A Pine Script v6 indicator that **replaces your chart's normal candles** with
orderflow/footprint-style candles, and shows in real time:

| Feature | How it appears |
|---|---|
| Buy / sell volume per candle | Footprint cells inside each candle (`sell x buy`), plus dashboard totals |
| Delta & cumulative delta | Colored label under each candle + dashboard |
| Imbalance highlighting | Orange cell borders when one side is ≥ 3x the other (configurable) |
| Next-candle probability | `▲ %` / `▼ %` in the dashboard, from an adaptive statistics engine |
| RSI value | Dashboard (red when > 70, green when < 30) |
| Fibonacci | Auto retracement levels drawn on chart + nearest level in dashboard |
| Buy / sell signals | `BUY` / `SELL` triangles on the chart + alerts |

## Install

1. Open [TradingView](https://tradingview.com) → open any chart.
2. Bottom panel → **Pine Editor** → delete the default code.
3. Paste the contents of [`naatai_orderflow_candles.pine`](naatai_orderflow_candles.pine).
4. Click **Add to chart**.

## Replace the default candles

The indicator draws its own candles on top of the chart. To make them the
*only* candles:

- Click the **eye icon** next to the symbol name (top-left of the chart) to hide
  the main series, **or**
- Right-click the chart → **Settings → Symbol** → set body/wick/border colors
  to fully transparent.

## How buy/sell volume is computed

The script requests **lower-timeframe intrabars** (auto-selected: e.g. 1-minute
bars inside a 15-minute candle) and classifies each intrabar's volume as buy
(closed up) or sell (closed down). On timeframes where no lower data exists it
falls back to a close-location approximation. Values update tick-by-tick on the
live candle.

## Next-candle probability

Every bar is bucketed into one of 12 market states (delta direction × RSI zone ×
EMA trend). The engine tracks how often the *next* candle closed up from each
state on your chart's own history, then blends that with the live buy-pressure
ratio, RSI and trend strength:

```
P(up) = 45% historical state stats + 30% buy volume ratio + 15% RSI + 10% trend
```

This is a statistical estimate, not a prediction guarantee — use it together
with the delta and imbalance information.

## Signals & alerts

- **BUY**: `P(up)` ≥ threshold (default 65%), positive delta, RSI < 75, fast EMA above slow EMA.
- **SELL**: mirror conditions.
- Create alerts via **Alerts → Condition: NaatAI OFC → "NaatAI BUY" / "NaatAI SELL"**.

## Settings worth tuning

| Input | Default | Notes |
|---|---|---|
| Lower timeframe | auto | Set manually (e.g. `1`) for finer buy/sell splitting |
| Footprint rows | 4 | More rows = finer price levels (max 8) |
| Imbalance ratio | 3.0 | Screenshot-style orange highlights |
| Probability threshold | 65% | Higher = fewer but stronger signals |
| Swing lookback | 120 | Window used for the auto Fibonacci swing |

> **Disclaimer:** for research/education. Not financial advice; always manage risk.
