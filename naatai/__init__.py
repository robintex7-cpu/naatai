"""Naatai — a Binance USDⓈ-M Futures swing-trade signal engine.

Implements the "SuperAreas" price-action setup:
Range Expansion -> Range Contraction -> Breakout (1st entry) ->
Expansion -> Pivot Breaker / new contraction -> Breakout (2nd entry).

The engine is built for *positional / swing* trading (holds of hours to
days), not scalping, so it works on the 1h / 4h / 1d timeframes by default.
"""

__version__ = "0.1.0"
