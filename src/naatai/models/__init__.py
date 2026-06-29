"""Predictive models.

Three independent views on the market that the ensemble later combines:
  * PriceModel   — directional/return forecast from price & cross-asset features
  * OrderBookModel — short-horizon signal from microstructure
  * MacroModel   — slower signal from macro & on-chain context

All implement the same `predict` contract so the ensemble treats them uniformly.
"""

from naatai.models.base import Model
from naatai.models.price_model import PriceModel
from naatai.models.order_book import OrderBookModel
from naatai.models.macro_model import MacroModel

__all__ = ["Model", "PriceModel", "OrderBookModel", "MacroModel"]
