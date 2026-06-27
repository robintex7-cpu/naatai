"""Configuration loading (JSON, stdlib only) + sink/strategy assembly."""
from __future__ import annotations

import json
import os
from dataclasses import asdict, fields
from typing import Any, Dict, List

from .alerts import (
    AlertManager,
    ConsoleSink,
    FileSink,
    TelegramSink,
    WebhookSink,
)
from .strategy import StrategyConfig

DEFAULT_CONFIG: Dict[str, Any] = {
    "symbols": ["BTCUSDT", "ETHUSDT", "SOLUSDT"],
    "auto_top_symbols": 0,          # if > 0, scan the N most active perps instead
    "timeframes": ["4h", "1d"],     # swing horizons: hours -> days
    "poll_interval_seconds": 300,
    "alert_on_watch": False,        # also alert on "contraction forming" (WAIT)
    "min_confidence": 60,           # ignore TAKE signals below this score
    "alerts": {
        "console": True,
        "file": "signals.log",
        "telegram_token": "",       # or env NAATAI_TELEGRAM_TOKEN
        "telegram_chat_id": "",     # or env NAATAI_TELEGRAM_CHAT_ID
        "webhook_url": "",          # Discord/Slack incoming webhook
    },
    "strategy": {},                 # overrides for StrategyConfig fields
}


def load_config(path: str | None) -> Dict[str, Any]:
    cfg = json.loads(json.dumps(DEFAULT_CONFIG))  # deep copy
    if path and os.path.exists(path):
        with open(path, "r", encoding="utf-8") as fh:
            user = json.load(fh)
        cfg = _deep_merge(cfg, user)
    # environment overrides for secrets
    cfg["alerts"]["telegram_token"] = (
        os.getenv("NAATAI_TELEGRAM_TOKEN") or cfg["alerts"]["telegram_token"])
    cfg["alerts"]["telegram_chat_id"] = (
        os.getenv("NAATAI_TELEGRAM_CHAT_ID") or cfg["alerts"]["telegram_chat_id"])
    cfg["alerts"]["webhook_url"] = (
        os.getenv("NAATAI_WEBHOOK_URL") or cfg["alerts"]["webhook_url"])
    return cfg


def _deep_merge(base: Dict[str, Any], over: Dict[str, Any]) -> Dict[str, Any]:
    for k, v in over.items():
        if isinstance(v, dict) and isinstance(base.get(k), dict):
            base[k] = _deep_merge(base[k], v)
        else:
            base[k] = v
    return base


def build_strategy_config(cfg: Dict[str, Any]) -> StrategyConfig:
    sc = StrategyConfig()
    valid = {f.name for f in fields(StrategyConfig)}
    for k, v in (cfg.get("strategy") or {}).items():
        if k in valid:
            setattr(sc, k, tuple(v) if k == "target_r_multiples" else v)
    return sc


def build_alert_manager(cfg: Dict[str, Any]) -> AlertManager:
    a = cfg.get("alerts", {})
    sinks: List = []
    if a.get("console", True):
        sinks.append(ConsoleSink())
    if a.get("file"):
        sinks.append(FileSink(a["file"]))
    if a.get("telegram_token") and a.get("telegram_chat_id"):
        sinks.append(TelegramSink(a["telegram_token"], a["telegram_chat_id"]))
    if a.get("webhook_url"):
        sinks.append(WebhookSink(a["webhook_url"]))
    return AlertManager(sinks=sinks, alert_on_watch=cfg.get("alert_on_watch", False))
