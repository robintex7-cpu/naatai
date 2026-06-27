"""Alert sinks: console, Telegram, generic webhook (Discord/Slack), file log.

All sinks are best-effort and never raise into the engine loop — a failed
Telegram post must not stop the scanner.
"""
from __future__ import annotations

import json
import urllib.request
from datetime import datetime, timezone
from typing import List, Optional

from .signals import Signal


class AlertSink:
    def send(self, signal: Signal) -> None:  # pragma: no cover - interface
        raise NotImplementedError


class ConsoleSink(AlertSink):
    def send(self, signal: Signal) -> None:
        ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%SZ")
        print(f"\n[{ts}]")
        print(signal.detail())


class FileSink(AlertSink):
    def __init__(self, path: str = "signals.log"):
        self.path = path

    def send(self, signal: Signal) -> None:
        rec = {
            "ts": datetime.now(timezone.utc).isoformat(),
            "symbol": signal.symbol,
            "timeframe": signal.timeframe,
            "decision": signal.decision.value,
            "side": signal.side.value,
            "label": signal.label,
            "price": signal.price,
            "stop": signal.stop,
            "targets": signal.targets,
            "confidence": signal.confidence,
            "candle_open_time": signal.candle_open_time,
        }
        try:
            with open(self.path, "a", encoding="utf-8") as fh:
                fh.write(json.dumps(rec) + "\n")
        except OSError as e:  # pragma: no cover
            print(f"[alerts] file sink error: {e}")


class TelegramSink(AlertSink):
    def __init__(self, token: str, chat_id: str):
        self.token = token
        self.chat_id = chat_id

    def send(self, signal: Signal) -> None:
        text = signal.detail()
        url = f"https://api.telegram.org/bot{self.token}/sendMessage"
        payload = json.dumps({"chat_id": self.chat_id, "text": text}).encode()
        req = urllib.request.Request(
            url, data=payload, headers={"Content-Type": "application/json"})
        try:
            urllib.request.urlopen(req, timeout=15).read()
        except Exception as e:  # noqa: BLE001  # pragma: no cover
            print(f"[alerts] telegram error: {e}")


class WebhookSink(AlertSink):
    """Generic JSON webhook — works for Discord (content) and Slack (text)."""

    def __init__(self, url: str):
        self.url = url

    def send(self, signal: Signal) -> None:
        text = signal.detail()
        payload = json.dumps({"content": text, "text": text}).encode()
        req = urllib.request.Request(
            self.url, data=payload, headers={"Content-Type": "application/json"})
        try:
            urllib.request.urlopen(req, timeout=15).read()
        except Exception as e:  # noqa: BLE001  # pragma: no cover
            print(f"[alerts] webhook error: {e}")


class AlertManager:
    """Fan-out to all configured sinks with per-signal de-duplication so the
    same breakout candle never alerts twice."""

    def __init__(self, sinks: Optional[List[AlertSink]] = None,
                 alert_on_watch: bool = False):
        self.sinks = sinks or [ConsoleSink()]
        self.alert_on_watch = alert_on_watch
        self._seen: set = set()

    def _key(self, signal: Signal) -> tuple:
        return (signal.symbol, signal.timeframe, signal.candle_open_time,
                signal.decision.value, signal.side.value)

    def maybe_alert(self, signal: Signal) -> bool:
        from .signals import Decision

        if signal.decision == Decision.NO_TRADE:
            return False
        if signal.decision == Decision.WAIT and not self.alert_on_watch:
            return False
        key = self._key(signal)
        if key in self._seen:
            return False
        self._seen.add(key)
        for sink in self.sinks:
            sink.send(signal)
        return True
