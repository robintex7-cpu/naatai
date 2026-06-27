"""The scanning engine: poll Binance, evaluate every symbol/timeframe, alert."""
from __future__ import annotations

import time
import traceback
from typing import Any, Dict, List

from .alerts import AlertManager
from .config import build_alert_manager, build_strategy_config
from .datafeed import DataFeedError, fetch_klines, fetch_top_symbols
from .signals import Decision, Signal
from .strategy import Strategy


class Engine:
    def __init__(self, cfg: Dict[str, Any]):
        self.cfg = cfg
        self.strategy = Strategy(build_strategy_config(cfg))
        self.alerts: AlertManager = build_alert_manager(cfg)
        self.min_conf = int(cfg.get("min_confidence", 60))

    # ------------------------------------------------------------------
    def resolve_symbols(self) -> List[str]:
        top = int(self.cfg.get("auto_top_symbols", 0) or 0)
        if top > 0:
            try:
                return fetch_top_symbols(top=top)
            except DataFeedError as e:
                print(f"[engine] could not fetch top symbols ({e}); "
                      f"falling back to configured list")
        return list(self.cfg.get("symbols", []))

    def scan_once(self) -> List[Signal]:
        """One full pass over all symbols & timeframes. Returns fired signals."""
        symbols = self.resolve_symbols()
        timeframes = self.cfg.get("timeframes", ["4h"])
        fired: List[Signal] = []
        for sym in symbols:
            for tf in timeframes:
                try:
                    candles = fetch_klines(sym, tf, limit=200)
                except DataFeedError as e:
                    print(f"[engine] {sym} {tf}: data error: {e}")
                    continue
                sig = self.strategy.evaluate(sym, tf, candles)
                if (sig.decision == Decision.TAKE
                        and sig.confidence < self.min_conf):
                    continue
                if self.alerts.maybe_alert(sig):
                    fired.append(sig)
        return fired

    def run(self) -> None:
        interval = int(self.cfg.get("poll_interval_seconds", 300))
        print(f"[engine] starting — {len(self.resolve_symbols())} symbol(s), "
              f"timeframes={self.cfg.get('timeframes')}, "
              f"poll every {interval}s, min_confidence={self.min_conf}")
        print("[engine] signals & alerts only — this tool NEVER places orders.")
        while True:
            start = time.time()
            try:
                fired = self.scan_once()
                if not fired:
                    print(f"[engine] scan complete — no new setups "
                          f"({time.strftime('%H:%M:%S')})")
            except Exception:  # noqa: BLE001 — keep the loop alive
                print("[engine] unexpected error during scan:")
                traceback.print_exc()
            elapsed = time.time() - start
            time.sleep(max(5, interval - elapsed))
