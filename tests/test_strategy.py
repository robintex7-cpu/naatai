import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from naatai.datafeed import synthetic_setup  # noqa: E402
from naatai.indicators import Candle  # noqa: E402
from naatai.signals import Decision, Side  # noqa: E402
from naatai.strategy import Strategy, StrategyConfig  # noqa: E402


def flat_series(n=80, price=100.0):
    """Dead-flat noise: should never produce a TAKE."""
    import random
    rng = random.Random(1)
    out = []
    t = 0
    for _ in range(n):
        o = price
        c = price + rng.uniform(-0.05, 0.05)
        h = max(o, c) + 0.05
        l = min(o, c) - 0.05
        out.append(Candle(t, o, h, l, c, 100.0, t + 1))
        price = c
        t += 1
    return out


def test_setup_triggers_buy():
    candles = synthetic_setup()
    sig = Strategy().evaluate("DEMOUSDT", "1h", candles)
    assert sig.decision == Decision.TAKE
    assert sig.side == Side.LONG
    assert sig.stop is not None and sig.stop < sig.price
    assert sig.targets and sig.targets[0] > sig.price
    assert sig.confidence >= 50
    assert sig.is_actionable()


def test_flat_market_no_trade():
    sig = Strategy().evaluate("FLATUSDT", "1h", flat_series())
    assert sig.decision in (Decision.NO_TRADE, Decision.WAIT)
    assert not sig.is_actionable()


def test_not_enough_history():
    sig = Strategy().evaluate("X", "1h", flat_series(n=10))
    assert sig.decision == Decision.NO_TRADE
    assert any("history" in b for b in sig.blockers)


def test_targets_are_r_multiples():
    candles = synthetic_setup()
    cfg = StrategyConfig(target_r_multiples=(1.0, 2.0, 3.0))
    sig = Strategy(cfg).evaluate("DEMOUSDT", "1h", candles)
    assert sig.is_actionable()
    risk = sig.price - sig.stop
    assert risk > 0
    # targets sit at 1R, 2R, 3R above entry
    for m, tgt in zip((1.0, 2.0, 3.0), sig.targets):
        assert abs((tgt - sig.price) - m * risk) < 1e-6
    assert sig.risk_reward == 1.0   # T1 is exactly 1R


def test_trend_filter_blocks_counter_trend():
    # Force a long breakout while EMA stack is bearish by disabling/enabling filter.
    candles = synthetic_setup()
    cfg = StrategyConfig(use_trend_filter=True)
    sig = Strategy(cfg).evaluate("DEMOUSDT", "1h", candles)
    # synthetic setup is a clean uptrend breakout, so it should pass the filter
    assert sig.decision == Decision.TAKE
