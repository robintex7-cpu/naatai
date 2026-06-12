# Ultimate Crypto Signals — MT4 Indicator

All-in-one indicator that merges **BB_Trigger + Donchian Channel + Heiken Ashi + PCTrend** into a single chart tool, purpose-built for crypto trading on Binance (and any other market).

---

## What the Indicator Does

| Component | Role |
|-----------|------|
| **Heiken Ashi** | Filters out noise; only valid signals fire on HA candle-flip |
| **Bollinger Bands** | Measures volatility; price vs midline used for bias |
| **CCI (14)** | Momentum trigger; zero-cross confirms entry/exit |
| **Donchian Channel** | Structural trend bias; price above/below midline |
| **PCTrend / EMA** | Higher-level trend filter (EMA 16 by default) |

---

## Signal Types

| Arrow | Meaning | When to act |
|-------|---------|-------------|
| Large **GREEN** arrow (↑) | **STRONG BUY** — score 6-7/7 | Enter long immediately |
| Large **RED** arrow (↓) | **STRONG SELL** — score 6-7/7 | Enter short immediately |
| Small **CYAN** arrow (↑) | **BUY** — score ≥ Min_Score | Consider long, confirm with HTF |
| Small **MAGENTA** arrow (↓) | **SELL** — score ≥ Min_Score | Consider short, confirm with HTF |
| **ORANGE X** (above bar) | **EXIT LONG** | Close buy trade |
| **ORANGE X** (below bar) | **EXIT SHORT** | Close sell trade |
| **Yellow Line** | EMA Trend | Overall trend direction |
| **Gold dashed** | Donchian Midline | Structural support/resistance |

---

## Scoring System (0–7)

Every bar scores these 7 conditions (bullish/bearish):

1. Heiken Ashi candle direction
2. Clean HA candle (no opposing wick)
3. Price above/below BB midline
4. CCI positive/negative
5. CCI above/below ±100 trigger level
6. Price above/below Donchian midline
7. EMA trend direction + price above/below EMA

**Score 6-7** → Strong signal  
**Score ≥ Min_Score (default 4)** → Regular signal  
**Score 2-3** → Mixed / No-trade zone  

---

## When NOT to Trade (No-Trade Zone)

The dashboard shows **"NO TRADE ZONE"** when the score is 2-3 out of 5. This means:
- Indicators are conflicting
- Market is ranging or transitioning
- Risk is highest; **skip the trade**

---

## Settings

| Parameter | Default | Notes |
|-----------|---------|-------|
| BB_Period | 20 | Bollinger Bands period |
| BB_Deviation | 2.0 | BB standard deviations |
| CCI_Period | 14 | CCI period |
| CCI_Trigger_Level | 100 | Overbought/oversold level |
| DC_Period | 20 | Donchian Channel period |
| Trend_Period | 16 | EMA trend period |
| Min_Score | 4 | Minimum score for regular signals |
| Show_Strong_Only | false | Hide regular signals if desired |
| Enable_Alerts | true | Popup alert on new signal |
| Enable_Push | false | Push notification to MT4 mobile |
| Enable_Email | false | Email on signal |
| Show_Dashboard | true | Overlay info panel |

---

## Recommended Crypto Settings (Binance)

### Scalping (M1–M5)
```
BB_Period = 15, CCI_Period = 10, DC_Period = 15, Trend_Period = 9, Min_Score = 4
```

### Swing (H1–H4)
```
BB_Period = 20, CCI_Period = 14, DC_Period = 20, Trend_Period = 16, Min_Score = 5
```

### Position / Long-Term (D1–W1)
```
BB_Period = 20, CCI_Period = 20, DC_Period = 50, Trend_Period = 21, Min_Score = 5, Show_Strong_Only = true
```

---

## Installation

1. Copy `UltimateCryptoSignals.mq4` to your MT4 `MQL4/Indicators/` folder
2. Restart MT4 or right-click `Indicators` in the Navigator → Refresh
3. Drag onto chart
4. **For crypto on Binance**: use the Binance broker plugin or a crypto-CFD broker feed

---

## Backtesting Notes

- Load indicator on a chart and scroll back — all historical arrows are painted
- Use MT4 Strategy Tester with a custom script to systematically log StrongBuyBuf/StrongSellBuf arrays
- **No repaint**: signals are confirmed on candle close (bar `b > 0` is historical, `b == 0` is current forming candle)
- Current candle (`b == 0`) arrows may shift until candle closes — always wait for close before acting

---

## Exit Rules Summary

| Situation | Exit Signal |
|-----------|------------|
| Long trade + HA flips bearish + CCI < 0 + Price < EMA | EXIT LONG arrow shown |
| Short trade + HA flips bullish + CCI > 0 + Price > EMA | EXIT SHORT arrow shown |

---

*Built by combining: BB_Trigger (Louw Coetzer), Donchian Channel (Russ Horn), Heiken Ashi (MetaQuotes), PCTrendA (PutOption-CallOption.com)*
