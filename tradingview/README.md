# MT4 → TradingView (Pine Script v5) conversions

These are TradingView versions of the indicators from the supplied MT4 chart
template `binary_breaker_update111.tpl`.

> **Honest note on the source files:** `BB_Trigger.ex4`, `Heiken_Ashi11.ex4` and
> `PCTrendA11.ex4` are **compiled** MetaTrader binaries — the original MQL4
> source is not contained in them and cannot be reliably/legally decompiled.
> Each script below is therefore a **faithful reconstruction** of a well-known
> public indicator, built from its documented algorithm plus the exact input
> settings found in the `.tpl`. Verify them visually against your MT4 chart.

| File | Source indicator | Settings used (from .tpl) |
|---|---|---|
| `1_HeikenAshi.pine` | MetaQuotes Heiken Ashi | up = white, down = red |
| `2_PCTrendA.pine` | Price-channel trend (PCTrendA) | Length 16, Displace 0, Filter 0 |
| `3_BB_Trigger.pine` | Ergodic CCI Trigger Line | pq 2, pr 10, ps 5, trigger 3 |

`BB_Magnified Market Price` from the template is only a large on-screen price
label (cosmetic) and no `.ex4` was provided for it, so it is not converted.

## How to use in TradingView
1. Open a chart → **Pine Editor** (bottom panel).
2. Paste one file's contents → **Save** → **Add to chart**.
3. Repeat for each indicator (TradingView keeps each as its own indicator,
   exactly like MT4 did).

## About "lag"
Heiken Ashi and the price channel add no extra smoothing beyond their nature.
The Ergodic CCI is the only laggy one, by design — its smoothing periods
(pq/ps/trigger) are what cause the lag, and these are the **original** values.
Lowering `pr`/`ps` reduces lag but changes the indicator, so they are left as-is.
