// Render-smoke test for docs/unirenko.html.
// Feeds the real captured 1m-ish klines fixture via request interception,
// verifies bricks build, no page errors, and the polling status renders.
// (WebSocket @aggTrade cannot connect in the sandbox; we assert the page
// still renders bricks from the REST klines path.)
const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const HTML = fs.readFileSync(path.join(__dirname, '../../docs/unirenko.html'), 'utf8');
const KL   = FX('kl15m.json');       // reuse an existing real klines fixture
function FX(p){ return fs.readFileSync(path.join(__dirname, 'fx', p), 'utf8'); }

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });

  // Intercept every Binance REST call and answer from fixtures / stubs.
  await page.route('**/*', route => {
    const url = route.request().url();
    if (url.startsWith('data:') ) return route.continue();
    if (url.includes('/klines'))       return route.fulfill({ contentType: 'application/json', body: KL });
    if (url.includes('/exchangeInfo')) return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ symbols: [{symbol:'BTCUSDT',quoteAsset:'USDT',status:'TRADING'}] }) });
    if (url.startsWith('http')) return route.fulfill({ contentType: 'application/json', body: '[]' });
    return route.continue();
  });

  await page.setContent(HTML, { waitUntil: 'load' });
  await page.waitForTimeout(1500);

  const info = await page.$eval('#brickInfo', el => el.textContent).catch(() => '');
  const status = await page.$eval('#status', el => el.textContent).catch(() => '');
  const nBricks = parseInt((info.match(/(\d+) bricks/) || [])[1] || '0', 10);

  let ok = true;
  const check = (cond, msg) => { console.log((cond ? 'PASS' : 'FAIL') + ' — ' + msg); if (!cond) ok = false; };

  check(/\d+ bricks/.test(info), `brickInfo shows bricks: "${info}"`);
  check(nBricks > 0, `brick count > 0 (got ${nBricks})`);
  check(/source/.test(status), `status line rendered: "${status.trim()}"`);
  check(errors.filter(e => !/WebSocket|ws:|wss:/i.test(e)).length === 0,
        'no non-WebSocket page errors' + (errors.length ? ' | ' + errors.join(' || ') : ''));

  await browser.close();
  console.log(ok ? '\nALL RENDER CHECKS PASSED' : '\nRENDER CHECKS FAILED');
  process.exit(ok ? 0 : 1);
})();
