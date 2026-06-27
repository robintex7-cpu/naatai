import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from naatai.indicators import Candle, atr, ema, true_range  # noqa: E402


def mk(o, h, l, c, v=100.0, t=0):
    return Candle(t, o, h, l, c, v, t + 1)


def test_body_and_ratio():
    c = mk(10, 12, 9, 11)
    assert c.body == 1
    assert c.range == 3
    assert abs(c.body_ratio - 1 / 3) < 1e-9
    assert c.bullish and not c.bearish


def test_full_body_candle():
    c = mk(10, 12.05, 9.95, 12)   # almost the whole range is body
    assert c.body_ratio > 0.9


def test_ema_basic():
    vals = [float(i) for i in range(1, 21)]
    e = ema(vals, 5)
    assert e[:4] == [None, None, None, None]
    assert e[4] is not None
    # rising series -> ema strictly increasing once seeded
    seeded = [x for x in e if x is not None]
    assert all(b > a for a, b in zip(seeded, seeded[1:]))


def test_true_range():
    prev = mk(10, 11, 9, 10)
    cur = mk(10, 13, 9.5, 12)
    tr = true_range(cur, prev.close)
    assert tr == max(13 - 9.5, abs(13 - 10), abs(9.5 - 10))


def test_atr_monotone_window():
    candles = [mk(10 + i, 11 + i, 9 + i, 10.5 + i, t=i) for i in range(30)]
    a = atr(candles, 14)
    assert a[13] is None
    assert a[14] is not None
    assert all(x > 0 for x in a if x is not None)
