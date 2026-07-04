const { chromium } = require('playwright-core');
const fs = require('fs');
const FX = p => fs.readFileSync(`${__dirname}/fx/${p}`, 'utf8');

// ---------- reference implementations (must match chart.html exactly) ----------
function emaArr(src, len){ const out=new Array(src.length).fill(null); const k=2/(len+1); let e=null;
  for(let i=0;i<src.length;i++){ e = e===null? src[i] : src[i]*k+e*(1-k); if(i>=len-1) out[i]=e; } return out; }
function rsiArr(src, len){ const out=new Array(src.length).fill(null); let g=0,l=0;
  for(let i=1;i<src.length;i++){ const ch=src[i]-src[i-1], up=Math.max(ch,0), dn=Math.max(-ch,0);
    if(i<=len){ g+=up; l+=dn; if(i===len){ g/=len; l/=len; out[i]= l===0?100:100-100/(1+g/l);} }
    else { g=(g*(len-1)+up)/len; l=(l*(len-1)+dn)/len; out[i]= l===0?100:100-100/(1+g/l);} } return out; }
function atrArr(b, len){ const out=new Array(b.length).fill(null); let a=null;
  for(let i=1;i<b.length;i++){ const tr=Math.max(b[i].h-b[i].l,Math.abs(b[i].h-b[i-1].c),Math.abs(b[i].l-b[i-1].c));
    a=a===null?tr:(a*(len-1)+tr)/len; if(i>=len) out[i]=a; } return out; }

const kl15 = JSON.parse(FX('kl15m.json'));
const bars = kl15.map(k=>({t:+k[0],o:+k[1],h:+k[2],l:+k[3],c:+k[4],v:+k[5],tb:+k[9]}));
const closes = bars.map(b=>b.c);
const refDelta = bars.map(b=>2*b.tb-b.v);
let c0=0; const refCvd = refDelta.map(d=>c0+=d);
const refE20 = emaArr(closes,20), refRsi = rsiArr(closes,14), refAtr = atrArr(bars,14);
// vwap (UTC-day anchored)
const refVwap=[]; { let pv=0,vv=0,day=null;
  for(const b of bars){ const d=Math.floor(b.t/864e5); if(d!==day){day=d;pv=0;vv=0;}
    const tp=(b.h+b.l+b.c)/3; pv+=tp*b.v; vv+=b.v; refVwap.push(vv?pv/vv:null); } }
// HTF trend from 4h fixture
const kl4=JSON.parse(FX('kl4h.json')); const c4=kl4.map(k=>+k[4]);
const e20_4=emaArr(c4,20), e50_4=emaArr(c4,50);
const refHtfUp = e20_4[c4.length-1] > e50_4[c4.length-1];
// signal reference (same rules as page: SIG={thr:20,space:5,volMult:1.2})
const refVAvg=[]; { let vs=0;
  for(let i=0;i<bars.length;i++){ vs+=bars[i].v; if(i>=50) vs-=bars[i-50].v; refVAvg.push(vs/Math.min(i+1,50)); } }
const refSignals=[]; { let lastI=-99;
  for(let i=50;i<bars.length-1;i++){
    if(i-lastI<5) continue;
    const v=bars[i].v; if(!v||refRsi[i]==null||refAtr[i]==null) continue;
    if(v < 1.2*refVAvg[i]) continue;
    const dp=refDelta[i]/v*100; let type=null;
    if(dp>=20 && refHtfUp!==false && refRsi[i]<70) type='buy';
    else if(dp<=-20 && refHtfUp!==true && refRsi[i]>30) type='sell';
    if(!type) continue;
    refSignals.push({i,type,entry:bars[i].c}); lastI=i; } }

// deterministic OI fixture aligned to kline timestamps
const oiFix = bars.map((b,i)=>({timestamp:b.t, sumOpenInterest:(80000+i*7+(i%13)*40).toFixed(3),
  sumOpenInterestValue:((80000+i*7)*b.c).toFixed(2)}));
// bybit-shaped trades from real aggTrades
const agg = JSON.parse(FX('aggtrades.json'));
const bybitFix = {retCode:0, result:{list: agg.slice(0,1000).map(t=>({
  execId:String(t.a), symbol:'BTCUSDT', price:t.p, size:t.q, side:t.m?'Sell':'Buy', time:String(t.T)}))}};

const J = o => typeof o==='string'? o : JSON.stringify(o);
const HDR = {'Access-Control-Allow-Origin':'*','Content-Type':'application/json'};

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1750 } });
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type()==='error' && !/net::|Failed to load resource/.test(m.text())) errors.push('CONSOLE: '+m.text()); });

  await page.route('**fapi.binance.com/**', route => {
    const u = new URL(route.request().url());
    const p = u.pathname, q = u.searchParams;
    let body = null;
    if (p==='/fapi/v1/klines'){
      const iv=q.get('interval');
      body = iv==='15m'?FX('kl15m.json'):iv==='4h'?FX('kl4h.json'):iv==='1h'?FX('kl1h.json'):iv==='1d'?FX('kl1d.json'):'[]';
    }
    else if (p==='/fapi/v1/aggTrades') body = FX('aggtrades.json');
    else if (p==='/fapi/v1/premiumIndex') body = J({symbol:'BTCUSDT',markPrice:'62610.50',lastFundingRate:'0.00010000',nextFundingTime:Date.now()+4*36e5});
    else if (p==='/fapi/v1/ticker/24hr') body = FX('t24.json');
    else if (p==='/fapi/v1/exchangeInfo') body = J({symbols:[{symbol:'BTCUSDT',contractType:'PERPETUAL',quoteAsset:'USDT',status:'TRADING'},{symbol:'ETHUSDT',contractType:'PERPETUAL',quoteAsset:'USDT',status:'TRADING'}]});
    else if (p==='/futures/data/openInterestHist') body = J(oiFix);
    else if (p==='/futures/data/globalLongShortAccountRatio') body = J([{symbol:'BTCUSDT',longShortRatio:'1.85',longAccount:'0.649',shortAccount:'0.351',timestamp:Date.now()}]);
    if (body!=null) route.fulfill({status:200, headers:HDR, body});
    else route.fulfill({status:404, headers:HDR, body:'{}'});
  });
  await page.route('**api.bybit.com/**', r=>r.fulfill({status:200, headers:HDR, body:J(bybitFix)}));
  await page.route('**contract.mexc.com/**', r=>r.fulfill({status:200, headers:HDR, body:FX('mexc.json')}));
  await page.route('**open-api.bingx.com/**', r=>r.abort());
  await page.route('**api.coingecko.com/api/v3/search**', r=>r.fulfill({status:200, headers:HDR, body:FX('gecko_search.json')}));
  await page.route('**api.coingecko.com/api/v3/simple/price**', r=>r.fulfill({status:200, headers:HDR, body:FX('gecko_price.json')}));
  await page.route('**data-api.coindesk.com/**', r=>r.fulfill({status:401, headers:HDR, body:J({Err:{message:'API key required'}})}));

  await page.goto('file:///home/user/naatai/docs/chart.html');
  await page.waitForTimeout(7000);

  const st = await page.evaluate(() => {
    const n=S.bars.length, m=i=>S.bars[i];
    return {
      demo:S.demo, bars:n, lastClose:m(n-1).c, lastT:m(n-1).t,
      ema20:S.ema20[n-1], rsi:S.rsi[n-1], atr:S.atr[n-1], cvd:S.cvd[n-1], vwap:S.vwap[n-1],
      htfUp:S.htfUp, signals:S.signals.map(s=>({i:s.i,type:s.type,entry:s.entry})),
      zonesOK:S.zones.every(z=>z.top>z.bot), zoneCount:S.zones.length,
      oiLast:S.oiByBar[n-1], haLen:S.ha.length, haRsi:S.haRsi,
      mx:S.mx.rows.map(r=>({name:r.name,ok:r.ok,flow:r.ok?(r.buyQ+r.sellQ)>0:false,msg:r.msg||null})),
      buyPct:S.mx.buyPct, fib618:S.fib?S.fib.f618:null,
      dashHasSignal:/Signal/.test(document.getElementById('dash').innerHTML),
      bannerShown:document.getElementById('banner').style.display==='block',
      fcText:document.getElementById('forecast').textContent.slice(0,60),
      haInfo:document.getElementById('haInfo').textContent,
    };
  });

  // live kline update simulation (update last bar, then append a new bar)
  const ws = await page.evaluate(() => {
    const n0=S.bars.length, last=S.bars[n0-1];
    try{
      onKline({t:String(last.t), o:String(last.o), h:String(last.h), l:String(last.l),
        c:String(last.c*1.001), v:String(last.v+5), q:'1', n:'10', V:String(last.tb+4)});
      const tNew=last.t+9e5;
      onKline({t:String(tNew), o:String(last.c), h:String(last.c*1.002), l:String(last.c*0.999),
        c:String(last.c*1.0015), v:'25', q:'1', n:'10', V:'18'});
      return {ok:true, n1:S.bars.length, lastT:S.bars[S.bars.length-1].t, expT:tNew};
    }catch(e){ return {ok:false, err:String(e)}; }
  });

  await page.screenshot({ path: 'chart_real.png', fullPage: true });
  await browser.close();

  // ---------- compare ----------
  const rel=(a,b)=>Math.abs(a-b)/Math.max(1e-9,Math.abs(b));
  const checks=[];
  const ck=(name,cond,info)=>checks.push({name,pass:!!cond,info:info===undefined?'':String(info)});
  ck('LIVE mode (not demo)', st.demo===false && !st.bannerShown, `demo=${st.demo} banner=${st.bannerShown}`);
  ck('500 bars loaded', st.bars===500, st.bars);
  ck('last close matches fixture', rel(st.lastClose, bars[bars.length-1].c)<1e-9, `${st.lastClose} vs ${bars[bars.length-1].c}`);
  ck('EMA20 matches reference', rel(st.ema20, refE20[bars.length-1])<1e-9, `${st.ema20} vs ${refE20[bars.length-1]}`);
  ck('RSI14 matches reference', rel(st.rsi, refRsi[bars.length-1])<1e-9, `${st.rsi} vs ${refRsi[bars.length-1]}`);
  ck('ATR14 matches reference', rel(st.atr, refAtr[bars.length-1])<1e-9, `${st.atr} vs ${refAtr[bars.length-1]}`);
  ck('CVD matches reference', rel(st.cvd, refCvd[bars.length-1])<1e-9, `${st.cvd} vs ${refCvd[bars.length-1]}`);
  ck('VWAP matches reference', rel(st.vwap, refVwap[bars.length-1])<1e-9, `${st.vwap} vs ${refVwap[bars.length-1]}`);
  ck('HTF(4h) trend matches reference', st.htfUp===refHtfUp, `${st.htfUp} vs ${refHtfUp}`);
  ck('signals match reference engine', JSON.stringify(st.signals)===JSON.stringify(refSignals.map(s=>({i:s.i,type:s.type,entry:s.entry}))),
     `page=${st.signals.length} ref=${refSignals.length}`);
  ck('signal spacing >= 5 bars', st.signals.every((s,k)=>k===0||s.i-st.signals[k-1].i>=5));
  ck('zones valid (top>bot)', st.zonesOK, `count=${st.zoneCount}`);
  ck('OI mapped onto bars', st.oiLast!=null, st.oiLast);
  ck('Heikin Ashi loaded', st.haLen>0 && st.haRsi>=0 && st.haRsi<=100, `len=${st.haLen} rsi=${st.haRsi}`);
  ck('HA header shows trend+RSI', /Trend/.test(st.haInfo) && /RSI/.test(st.haInfo), st.haInfo);
  const mxMap=Object.fromEntries(st.mx.map(r=>[r.name,r]));
  ck('Binance flow live', mxMap.Binance&&mxMap.Binance.ok&&mxMap.Binance.flow);
  ck('Bybit flow live', mxMap.Bybit&&mxMap.Bybit.ok&&mxMap.Bybit.flow);
  ck('MEXC flow live', mxMap.MEXC&&mxMap.MEXC.ok&&mxMap.MEXC.flow);
  ck('BingX shows blocked', mxMap.BingX&&!mxMap.BingX.ok, mxMap.BingX&&mxMap.BingX.msg);
  ck('CoinGecko reference live', mxMap.CoinGecko&&mxMap.CoinGecko.ok);
  ck('CoinDesk asks for key', mxMap.CoinDesk&&!mxMap.CoinDesk.ok&&/key/.test(mxMap.CoinDesk.msg||''), mxMap.CoinDesk&&mxMap.CoinDesk.msg);
  ck('consensus buyPct computed', st.buyPct!=null && st.buyPct>0 && st.buyPct<100, st.buyPct);
  ck('fib 0.618 in price range', st.fib618>Math.min(...closes) && st.fib618<Math.max(...closes), st.fib618);
  ck('dashboard rendered', st.dashHasSignal);
  ck('forecast rendered', st.fcText.length>5, st.fcText);
  ck('WS kline update + append works', ws.ok && ws.n1===501 && ws.lastT===ws.expT, JSON.stringify(ws));
  ck('no unexpected JS errors', errors.length===0, errors.join(' | '));

  let fails=0;
  for(const c of checks){ if(!c.pass) fails++;
    console.log(`${c.pass?'PASS':'FAIL'}  ${c.name}${c.info?'  ['+c.info+']':''}`); }
  console.log(fails? `\n${fails} FAILURES`:'\nALL CHECKS PASSED');
  process.exit(fails?1:0);
})();
