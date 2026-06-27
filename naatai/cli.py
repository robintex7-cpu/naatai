"""Command-line interface.

Subcommands
-----------
  scan      one pass over symbols/timeframes, print signals, exit
  watch     run forever, polling and alerting (the main mode)
  backtest  walk-forward test the setup on historical klines
  demo      run the strategy on a synthetic candle series (no network)
"""
from __future__ import annotations

import argparse
import sys
from typing import List

from . import __version__
from .config import build_strategy_config, load_config
from .datafeed import DataFeedError, fetch_klines, synthetic_setup
from .engine import Engine
from .strategy import Strategy


def _add_common(p: argparse.ArgumentParser) -> None:
    p.add_argument("-c", "--config", default="config.json",
                   help="path to JSON config (default: config.json)")


def cmd_scan(args) -> int:
    cfg = load_config(args.config)
    if args.symbols:
        cfg["symbols"] = args.symbols
        cfg["auto_top_symbols"] = 0
    if args.timeframes:
        cfg["timeframes"] = args.timeframes
    engine = Engine(cfg)
    print(f"[scan] {cfg['symbols']} on {cfg['timeframes']}")
    engine.scan_once()
    return 0


def cmd_watch(args) -> int:
    cfg = load_config(args.config)
    if args.symbols:
        cfg["symbols"] = args.symbols
        cfg["auto_top_symbols"] = 0
    if args.timeframes:
        cfg["timeframes"] = args.timeframes
    Engine(cfg).run()
    return 0


def cmd_backtest(args) -> int:
    from .backtest import backtest

    cfg = load_config(args.config)
    sc = build_strategy_config(cfg)
    symbols: List[str] = args.symbols or cfg.get("symbols", ["BTCUSDT"])
    timeframes: List[str] = args.timeframes or cfg.get("timeframes", ["4h"])
    grand_r = 0.0
    grand_n = 0
    for sym in symbols:
        for tf in timeframes:
            try:
                candles = fetch_klines(sym, tf, limit=args.limit)
            except DataFeedError as e:
                print(f"{sym} {tf}: data error: {e}")
                continue
            res = backtest(sym, tf, candles, config=sc,
                           max_hold_bars=args.max_hold)
            print(res.summary())
            grand_r += res.total_r
            grand_n += res.n
    print("-" * 60)
    print(f"TOTAL: {grand_n} trades, {grand_r:+.2f}R "
          f"(avg {grand_r / grand_n:+.2f}R)" if grand_n else "TOTAL: no trades")
    return 0


def cmd_demo(args) -> int:
    candles = synthetic_setup()
    sc = build_strategy_config(load_config(args.config))
    sig = Strategy(sc).evaluate("DEMOUSDT", "1h", candles)
    print("Synthetic series: base -> impulse -> contraction -> breakout")
    print("(the breakout is the final candle, so this shows a live signal)\n")
    print(sig.detail())
    print("\nThis ran with no network. For a real backtest over history, use:")
    print("  python run.py backtest --symbols BTCUSDT --timeframes 4h")
    return 0


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="naatai",
        description="Binance Futures swing-trade signal engine "
                    "(SuperAreas contraction->breakout setup). Signals only, "
                    "never places orders.")
    p.add_argument("--version", action="version", version=f"naatai {__version__}")
    sub = p.add_subparsers(dest="cmd", required=True)

    sp = sub.add_parser("scan", help="single pass, print signals")
    _add_common(sp)
    sp.add_argument("--symbols", nargs="+", help="override symbols, e.g. BTCUSDT ETHUSDT")
    sp.add_argument("--timeframes", nargs="+", help="override timeframes, e.g. 4h 1d")
    sp.set_defaults(func=cmd_scan)

    wp = sub.add_parser("watch", help="run forever, poll & alert")
    _add_common(wp)
    wp.add_argument("--symbols", nargs="+")
    wp.add_argument("--timeframes", nargs="+")
    wp.set_defaults(func=cmd_watch)

    bp = sub.add_parser("backtest", help="walk-forward backtest")
    _add_common(bp)
    bp.add_argument("--symbols", nargs="+")
    bp.add_argument("--timeframes", nargs="+")
    bp.add_argument("--limit", type=int, default=1000, help="klines to pull (max 1500)")
    bp.add_argument("--max-hold", type=int, default=30, help="max bars to hold a trade")
    bp.set_defaults(func=cmd_backtest)

    dp = sub.add_parser("demo", help="run on synthetic data (no network)")
    _add_common(dp)
    dp.set_defaults(func=cmd_demo)
    return p


def main(argv=None) -> int:
    args = build_parser().parse_args(argv)
    try:
        return args.func(args)
    except KeyboardInterrupt:
        print("\n[naatai] stopped.")
        return 130


if __name__ == "__main__":
    sys.exit(main())
