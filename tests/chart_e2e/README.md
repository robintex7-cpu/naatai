# Chart end-to-end test

Drives `docs/chart.html` in headless Chromium with **real Binance market
data** (captured from the official public mirror `data-api.binance.vision`,
plus real MEXC/CoinGecko responses in `fx/`), served into the page's fetch
layer via request interception. It then recomputes every indicator (EMA,
RSI, ATR, CVD, VWAP), the 4h trend filter and the full signal engine
independently in Node and asserts the page's values match to machine
precision — plus per-exchange status handling, WebSocket kline
update/append behaviour, and DOM rendering of the dashboard, forecast and
Heikin Ashi panel.

Run:

    npm i playwright-core
    PLAYWRIGHT_BROWSERS_PATH=<chromium dir> node test_e2e.js

To refresh fixtures, re-download the `fx/*.json` files from the URLs named
in the test (vision mirror is reachable from most regions, including CI).
