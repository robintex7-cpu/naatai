//+------------------------------------------------------------------+
//|          ULTIMATE CRYPTO SIGNALS - All-In-One Indicator          |
//|  Combines: BB_Trigger + Donchian Channel + Heiken Ashi + PCTrend |
//|  Optimized for: Crypto Trading (Binance) – All Timeframes        |
//|  Signals: Strong Buy/Sell, Entry, Exit, No-Trade Zones           |
//+------------------------------------------------------------------+
#property copyright "Ultimate Crypto Signals"
#property link      ""
#property version   "2.0"
#property strict
#property indicator_chart_window
#property indicator_buffers 12
#property indicator_plots   8

// ---- Plot 0: Strong Buy Arrow
#property indicator_type1   DRAW_ARROW
#property indicator_color1  0x00FF00
#property indicator_width1  4
#property indicator_label1  "STRONG BUY"

// ---- Plot 1: Strong Sell Arrow
#property indicator_type2   DRAW_ARROW
#property indicator_color2  0xFF0000
#property indicator_width2  4
#property indicator_label2  "STRONG SELL"

// ---- Plot 2: Regular Buy
#property indicator_type3   DRAW_ARROW
#property indicator_color3  0x00FFFF
#property indicator_width3  2
#property indicator_label3  "BUY"

// ---- Plot 3: Regular Sell
#property indicator_type4   DRAW_ARROW
#property indicator_color4  0xFF00FF
#property indicator_width4  2
#property indicator_label4  "SELL"

// ---- Plot 4: EMA Trend Line
#property indicator_type5   DRAW_LINE
#property indicator_color5  0xFFFF00
#property indicator_width5  2
#property indicator_label5  "EMA Trend"

// ---- Plot 5: Exit Long
#property indicator_type6   DRAW_ARROW
#property indicator_color6  0xFF8000
#property indicator_width6  2
#property indicator_label6  "EXIT LONG"

// ---- Plot 6: Exit Short
#property indicator_type7   DRAW_ARROW
#property indicator_color7  0xFF8000
#property indicator_width7  2
#property indicator_label7  "EXIT SHORT"

// ---- Plot 7: Donchian Midline
#property indicator_type8   DRAW_LINE
#property indicator_color8  0xFFD700
#property indicator_width8  1
#property indicator_label8  "Donchian Mid"

//=============================================================
// INPUT PARAMETERS
//=============================================================
sinput string   ___BB___          = "--- Bollinger Bands ---";
input int       BB_Period         = 20;     // BB Period
input double    BB_Deviation      = 2.0;    // BB Deviation

sinput string   ___CCI___         = "--- CCI Trigger ---";
input int       CCI_Period        = 14;     // CCI Period
input int       CCI_Trigger_Level = 100;    // CCI Overbought/Oversold Level

sinput string   ___HA___          = "--- Heiken Ashi ---";
// (computed internally, no extra period needed)

sinput string   ___DC___          = "--- Donchian Channel ---";
input int       DC_Period         = 20;     // Donchian Period

sinput string   ___TREND___       = "--- PCTrend / EMA ---";
input int       Trend_Period      = 16;     // EMA Trend Period

sinput string   ___SIG___         = "--- Signal Settings ---";
input int       Min_Score         = 4;      // Min score for signal (3-5)
input bool      Show_Strong_Only  = false;  // Show Strong Signals Only

sinput string   ___ALERT___       = "--- Alerts ---";
input bool      Enable_Alerts     = true;   // Popup Alert
input bool      Enable_Push       = false;  // Push Notification
input bool      Enable_Email      = false;  // Email Alert

sinput string   ___DASH___        = "--- Dashboard ---";
input bool      Show_Dashboard    = true;   // Show Info Panel
input int       Panel_X           = 10;     // Panel X position
input int       Panel_Y           = 30;     // Panel Y position

//=============================================================
// BUFFERS
//=============================================================
double StrongBuyBuf[];
double StrongSellBuf[];
double BuyBuf[];
double SellBuf[];
double TrendBuf[];
double ExitLongBuf[];
double ExitShortBuf[];
double DCMidBuf[];
// Hidden (calculation)
double HA_Open[];
double HA_Close[];
double HA_High[];
double HA_Low[];

//=============================================================
// STATE
//=============================================================
datetime g_lastAlert  = 0;
int      g_lastSignal = 0; // 1=long, -1=short, 0=none
bool     g_inLong     = false;
bool     g_inShort    = false;

//+------------------------------------------------------------------+
int OnInit()
{
   SetIndexBuffer(0,  StrongBuyBuf);  SetIndexArrow(0, 233); SetIndexEmptyValue(0, 0);
   SetIndexBuffer(1,  StrongSellBuf); SetIndexArrow(1, 234); SetIndexEmptyValue(1, 0);
   SetIndexBuffer(2,  BuyBuf);        SetIndexArrow(2, 217); SetIndexEmptyValue(2, 0);
   SetIndexBuffer(3,  SellBuf);       SetIndexArrow(3, 218); SetIndexEmptyValue(3, 0);
   SetIndexBuffer(4,  TrendBuf);
   SetIndexBuffer(5,  ExitLongBuf);   SetIndexArrow(5, 88);  SetIndexEmptyValue(5, 0);
   SetIndexBuffer(6,  ExitShortBuf);  SetIndexArrow(6, 88);  SetIndexEmptyValue(6, 0);
   SetIndexBuffer(7,  DCMidBuf);
   SetIndexBuffer(8,  HA_Open);  SetIndexStyle(8, DRAW_NONE);
   SetIndexBuffer(9,  HA_Close); SetIndexStyle(9, DRAW_NONE);
   SetIndexBuffer(10, HA_High);  SetIndexStyle(10, DRAW_NONE);
   SetIndexBuffer(11, HA_Low);   SetIndexStyle(11, DRAW_NONE);

   if(Show_Dashboard) BuildPanel();
   return INIT_SUCCEEDED;
}

//+------------------------------------------------------------------+
void OnDeinit(const int reason)
{
   ObjectsDeleteAll(0, "UCS_");
}

//+------------------------------------------------------------------+
int OnCalculate(const int rates_total,
                const int prev_calculated,
                const datetime &time[],
                const double   &open[],
                const double   &high[],
                const double   &low[],
                const double   &close[],
                const long     &tick_volume[],
                const long     &volume[],
                const int      &spread[])
{
   int lookback = MathMax(BB_Period, MathMax(CCI_Period, MathMax(DC_Period, Trend_Period))) + 20;
   if(rates_total < lookback) return 0;

   int start = (prev_calculated > 1) ? prev_calculated - 1 : lookback;

   for(int i = start; i < rates_total; i++)
   {
      int b = rates_total - 1 - i; // bar index (0=current)

      //--- 1. Heiken Ashi
      if(b == rates_total - 1)
      {
         HA_Close[b] = (open[b] + high[b] + low[b] + close[b]) / 4.0;
         HA_Open[b]  = (open[b] + close[b]) / 2.0;
      }
      else
      {
         HA_Close[b] = (open[b] + high[b] + low[b] + close[b]) / 4.0;
         HA_Open[b]  = (HA_Open[b+1] + HA_Close[b+1]) / 2.0;
      }
      HA_High[b] = MathMax(high[b], MathMax(HA_Open[b], HA_Close[b]));
      HA_Low[b]  = MathMin(low[b],  MathMin(HA_Open[b], HA_Close[b]));

      bool haBull     = HA_Close[b] > HA_Open[b];
      bool haBullPrev = (b+1 < rates_total) ? HA_Close[b+1] > HA_Open[b+1] : haBull;
      bool haFlipUp   = haBull  && !haBullPrev;
      bool haFlipDown = !haBull &&  haBullPrev;
      // No wicks on HA side that matters => clean trend
      bool haCleanBull = haBull  && (HA_Low[b]  == MathMin(HA_Open[b], HA_Close[b]));
      bool haCleanBear = !haBull && (HA_High[b] == MathMax(HA_Open[b], HA_Close[b]));

      //--- 2. Bollinger Bands
      double bbUpper = iBands(NULL,0,BB_Period,BB_Deviation,0,PRICE_CLOSE,MODE_UPPER,b);
      double bbLower = iBands(NULL,0,BB_Period,BB_Deviation,0,PRICE_CLOSE,MODE_LOWER,b);
      double bbMid   = iBands(NULL,0,BB_Period,BB_Deviation,0,PRICE_CLOSE,MODE_MAIN, b);
      double bbWidth = bbUpper - bbLower;
      bool   aboveMid   = close[b] > bbMid;
      bool   belowMid   = close[b] < bbMid;
      bool   nearUpper  = close[b] >= bbUpper - bbWidth * 0.1;
      bool   nearLower  = close[b] <= bbLower + bbWidth * 0.1;

      //--- 3. CCI
      double cci     = iCCI(NULL,0,CCI_Period,PRICE_TYPICAL,b);
      double cciPrev = iCCI(NULL,0,CCI_Period,PRICE_TYPICAL,b+1);
      bool   cciPos     = cci > 0;
      bool   cciNeg     = cci < 0;
      bool   cciX0Up    = cci > 0 && cciPrev <= 0;  // CCI crossed zero up
      bool   cciX0Dn    = cci < 0 && cciPrev >= 0;  // CCI crossed zero down
      bool   cciXTrigUp = cci > -CCI_Trigger_Level && cciPrev <= -CCI_Trigger_Level;
      bool   cciXTrigDn = cci < CCI_Trigger_Level  && cciPrev >= CCI_Trigger_Level;
      bool   cciStrong  = cci >  CCI_Trigger_Level;
      bool   cciWeakBear= cci < -CCI_Trigger_Level;

      //--- 4. Donchian Channel
      double dcHigh = high[b], dcLow = low[b];
      int    dcEnd  = MathMin(b + DC_Period, rates_total - 1);
      for(int j = b+1; j <= dcEnd; j++)
      {
         if(high[j] > dcHigh) dcHigh = high[j];
         if(low[j]  < dcLow)  dcLow  = low[j];
      }
      double dcMid = (dcHigh + dcLow) / 2.0;
      DCMidBuf[b]  = dcMid;
      bool   aboveDCMid = close[b] > dcMid;
      bool   belowDCMid = close[b] < dcMid;
      bool   breakoutHigh = close[b] >= dcHigh - (dcHigh - dcLow) * 0.05;
      bool   breakoutLow  = close[b] <= dcLow  + (dcHigh - dcLow) * 0.05;

      //--- 5. PCTrend (EMA with filter)
      double ema1 = iMA(NULL,0,Trend_Period,0,MODE_EMA,PRICE_CLOSE,b);
      double ema2 = iMA(NULL,0,Trend_Period,0,MODE_EMA,PRICE_CLOSE,b+1);
      double ema3 = iMA(NULL,0,Trend_Period,0,MODE_EMA,PRICE_CLOSE,b+2);
      TrendBuf[b] = ema1;
      bool   trendUp   = ema1 > ema2 && ema2 >= ema3;
      bool   trendDown = ema1 < ema2 && ema2 <= ema3;
      bool   emaCrossUp  = ema1 > ema2 && ema2 <= ema3; // fresh turn
      bool   emaCrossDn  = ema1 < ema2 && ema2 >= ema3;
      bool   priceAboveEMA = close[b] > ema1;
      bool   priceBelowEMA = close[b] < ema1;

      //=============================================================
      // SCORING SYSTEM  (max 7 points)
      //=============================================================
      int bullScore = 0;
      int bearScore = 0;

      if(haBull)          bullScore++;  else bearScore++;
      if(haCleanBull)     bullScore++;  else if(haCleanBear) bearScore++;
      if(aboveMid)        bullScore++;  else bearScore++;
      if(cciPos)          bullScore++;  else bearScore++;
      if(cciStrong)       bullScore++;  else if(cciWeakBear) bearScore++;
      if(aboveDCMid)      bullScore++;  else bearScore++;
      if(trendUp)         bullScore++;  else if(trendDown) bearScore++;
      if(priceAboveEMA)   bullScore++;  else bearScore++;

      // Breakout bonus
      if(breakoutHigh && bullScore > bearScore) bullScore++;
      if(breakoutLow  && bearScore > bullScore) bearScore++;

      // Cap at 7
      if(bullScore > 7) bullScore = 7;
      if(bearScore > 7) bearScore = 7;

      //=============================================================
      // SIGNAL LOGIC
      //=============================================================
      // Clear
      StrongBuyBuf[b]  = 0;
      StrongSellBuf[b] = 0;
      BuyBuf[b]        = 0;
      SellBuf[b]       = 0;
      ExitLongBuf[b]   = 0;
      ExitShortBuf[b]  = 0;

      double pad = 3 * Point;

      // ---- STRONG BUY: score 6-7 + HA flip + CCI momentum
      if(bullScore >= 6 && (haFlipUp || emaCrossUp) && (cciX0Up || cciXTrigUp || cciStrong))
      {
         StrongBuyBuf[b] = low[b] - pad * 3;
         if(b == 0) DoAlert("STRONG BUY", close[b]);
         g_inLong = true; g_inShort = false;
      }
      // ---- STRONG SELL: score 6-7
      else if(bearScore >= 6 && (haFlipDown || emaCrossDn) && (cciX0Dn || cciXTrigDn || cciWeakBear))
      {
         StrongSellBuf[b] = high[b] + pad * 3;
         if(b == 0) DoAlert("STRONG SELL", close[b]);
         g_inShort = true; g_inLong = false;
      }
      // ---- REGULAR BUY
      else if(!Show_Strong_Only && bullScore >= Min_Score && haFlipUp && cciPos)
      {
         BuyBuf[b] = low[b] - pad;
         if(b == 0) DoAlert("BUY", close[b]);
         g_inLong = true; g_inShort = false;
      }
      // ---- REGULAR SELL
      else if(!Show_Strong_Only && bearScore >= Min_Score && haFlipDown && cciNeg)
      {
         SellBuf[b] = high[b] + pad;
         if(b == 0) DoAlert("SELL", close[b]);
         g_inShort = true; g_inLong = false;
      }

      //=============================================================
      // EXIT LOGIC
      //=============================================================
      // Exit Long: HA flips bearish + CCI goes negative + price drops below EMA
      if(g_inLong && haFlipDown && cciNeg && priceBelowEMA)
      {
         ExitLongBuf[b] = high[b] + pad * 2;
         if(b == 0) DoAlert("EXIT LONG", close[b]);
         g_inLong = false;
      }
      // Exit Short: HA flips bullish + CCI goes positive + price above EMA
      if(g_inShort && haFlipUp && cciPos && priceAboveEMA)
      {
         ExitShortBuf[b] = low[b] - pad * 2;
         if(b == 0) DoAlert("EXIT SHORT", close[b]);
         g_inShort = false;
      }
   }

   // Dashboard refresh on every tick
   if(Show_Dashboard) RefreshPanel(rates_total, close, high, low);

   return rates_total;
}

//=============================================================
// ALERT
//=============================================================
void DoAlert(string sig, double price)
{
   if(!Enable_Alerts && !Enable_Push && !Enable_Email) return;
   datetime now = TimeCurrent();
   if(now - g_lastAlert < 60) return; // 60-second debounce
   g_lastAlert = now;

   string msg = StringFormat("[UCS] %s | %s %s | %.5f", sig, Symbol(), TFName(), price);
   if(Enable_Alerts) Alert(msg);
   if(Enable_Push)   SendNotification(msg);
   if(Enable_Email)  SendMail("UCS Signal: " + sig, msg);
}

string TFName()
{
   switch(Period())
   {
      case PERIOD_M1:  return "M1";
      case PERIOD_M5:  return "M5";
      case PERIOD_M15: return "M15";
      case PERIOD_M30: return "M30";
      case PERIOD_H1:  return "H1";
      case PERIOD_H4:  return "H4";
      case PERIOD_D1:  return "D1";
      case PERIOD_W1:  return "W1";
      case PERIOD_MN1: return "MN";
      default:         return "TF" + IntegerToString(Period());
   }
}

//=============================================================
// DASHBOARD
//=============================================================
void PanelLabel(string name, string txt, int x, int y, color clr, int sz = 8)
{
   if(ObjectFind(0, name) < 0)
      ObjectCreate(0, name, OBJ_LABEL, 0, 0, 0);
   ObjectSetInteger(0, name, OBJPROP_CORNER,    CORNER_TOP_LEFT);
   ObjectSetInteger(0, name, OBJPROP_XDISTANCE, x);
   ObjectSetInteger(0, name, OBJPROP_YDISTANCE, y);
   ObjectSetString (0, name, OBJPROP_TEXT,      txt);
   ObjectSetInteger(0, name, OBJPROP_COLOR,     clr);
   ObjectSetInteger(0, name, OBJPROP_FONTSIZE,  sz);
   ObjectSetString (0, name, OBJPROP_FONT,      "Arial Bold");
   ObjectSetInteger(0, name, OBJPROP_BACK,      false);
   ObjectSetInteger(0, name, OBJPROP_SELECTABLE,false);
}

void BuildPanel()
{
   // Background rectangle
   string bg = "UCS_BG";
   if(ObjectFind(0, bg) < 0)
      ObjectCreate(0, bg, OBJ_RECTANGLE_LABEL, 0, 0, 0);
   ObjectSetInteger(0, bg, OBJPROP_CORNER,       CORNER_TOP_LEFT);
   ObjectSetInteger(0, bg, OBJPROP_XDISTANCE,    Panel_X);
   ObjectSetInteger(0, bg, OBJPROP_YDISTANCE,    Panel_Y);
   ObjectSetInteger(0, bg, OBJPROP_XSIZE,        235);
   ObjectSetInteger(0, bg, OBJPROP_YSIZE,        245);
   ObjectSetInteger(0, bg, OBJPROP_BGCOLOR,      C'15,15,35');
   ObjectSetInteger(0, bg, OBJPROP_BORDER_COLOR, C'80,80,200');
   ObjectSetInteger(0, bg, OBJPROP_BORDER_TYPE,  BORDER_FLAT);
   ObjectSetInteger(0, bg, OBJPROP_BACK,         false);
   ObjectSetInteger(0, bg, OBJPROP_SELECTABLE,   false);

   // Static title
   PanelLabel("UCS_T1", "  ULTIMATE CRYPTO SIGNALS",  Panel_X+5,  Panel_Y+8,  C'0,255,255', 9);
   PanelLabel("UCS_T2", "  BB + Donchian + HA + PCTrend", Panel_X+5, Panel_Y+22, C'150,150,200', 7);
   PanelLabel("UCS_SEP","  ----------------------------------------", Panel_X+5, Panel_Y+32, C'50,50,100', 7);
}

void RefreshPanel(int total, const double &close[], const double &high[], const double &low[])
{
   if(total < 2) return;

   double bbMid  = iBands(NULL,0,BB_Period,BB_Deviation,0,PRICE_CLOSE,MODE_MAIN,0);
   double cci    = iCCI(NULL,0,CCI_Period,PRICE_TYPICAL,0);
   double ema1   = iMA(NULL,0,Trend_Period,0,MODE_EMA,PRICE_CLOSE,0);
   double ema2   = iMA(NULL,0,Trend_Period,0,MODE_EMA,PRICE_CLOSE,1);

   bool haBull    = HA_Close[0] > HA_Open[0];
   bool aboveMid  = close[0] > bbMid;
   bool cciPos    = cci > 0;
   bool trendUp   = ema1 > ema2;
   bool aboveDC   = DCMidBuf[0] > 0 && close[0] > DCMidBuf[0];

   int bull = 0;
   if(haBull)   bull++;
   if(aboveMid) bull++;
   if(cciPos)   bull++;
   if(trendUp)  bull++;
   if(aboveDC)  bull++;
   int bear = 5 - bull;

   string sigTxt;  color sigClr;  string advTxt;
   if(bull == 5)      { sigTxt = " *** STRONG BUY ***";  sigClr = clrLime;       advTxt = " ENTER LONG  –  High Confidence"; }
   else if(bull == 4) { sigTxt = " BUY SIGNAL";          sigClr = clrLimeGreen;  advTxt = " Look for long entry"; }
   else if(bull == 3) { sigTxt = " WEAK BUY";            sigClr = clrYellowGreen;advTxt = " Wait for confirmation"; }
   else if(bull == 2) { sigTxt = " WEAK SELL";           sigClr = clrOrangeRed;  advTxt = " Wait for confirmation"; }
   else if(bull == 1) { sigTxt = " SELL SIGNAL";         sigClr = clrOrange;     advTxt = " Look for short entry"; }
   else               { sigTxt = " *** STRONG SELL ***"; sigClr = clrRed;        advTxt = " ENTER SHORT  –  High Confidence"; }

   // No-trade zone
   bool noTrade = (bull >= 2 && bull <= 3);
   if(noTrade) advTxt = " NO TRADE ZONE – Mixed signals";

   int px = Panel_X + 5;
   int py = Panel_Y + 45;
   int dy = 18;

   PanelLabel("UCS_SYM",  " Symbol : " + Symbol(),                    px, py,      clrWhite,  8);
   PanelLabel("UCS_TF",   " TF     : " + TFName(),                    px, py+dy,   clrWhite,  8);
   PanelLabel("UCS_PRC",  " Price  : " + DoubleToStr(close[0],Digits),px, py+dy*2, clrWhite,  8);
   PanelLabel("UCS_SEP2", " ----------------------------------------",px, py+dy*3-4,C'50,50,100',7);
   PanelLabel("UCS_SIG",  sigTxt,                                      px, py+dy*3+4,sigClr,   9);
   PanelLabel("UCS_SEP3", " ----------------------------------------",px, py+dy*4+2,C'50,50,100',7);
   PanelLabel("UCS_HA",   " HA    : " + (haBull ? "Bullish ↑" : "Bearish ↓"),    px, py+dy*4+10,haBull  ? clrLime : clrRed, 8);
   PanelLabel("UCS_BB",   " BB    : " + (aboveMid? "Above Mid ↑":"Below Mid ↓"), px, py+dy*5+10,aboveMid? clrLime : clrRed, 8);
   PanelLabel("UCS_CCI",  " CCI   : " + DoubleToStr(cci,1) + (cciPos ? " ↑" : " ↓"), px, py+dy*6+10,(cciPos ? clrLime : clrRed), 8);
   PanelLabel("UCS_EMT",  " Trend : " + (trendUp ? "UP ↑" : "DOWN ↓"),           px, py+dy*7+10,trendUp ? clrLime : clrRed, 8);
   PanelLabel("UCS_DC",   " DC    : " + (aboveDC  ? "Above Mid ↑":"Below Mid ↓"),px, py+dy*8+10,aboveDC ? clrLime : clrRed, 8);
   PanelLabel("UCS_SCR",  " Score : " + IntegerToString(bull) + "/5",            px, py+dy*9+10,(bull>=4?clrLime:(bull<=1?clrRed:clrYellow)),8);
   PanelLabel("UCS_ADV",  advTxt,                                                 px, py+dy*10+14,(noTrade?clrYellow:sigClr), 8);
}
