#!/usr/bin/env python3
"""Convenience launcher so you can run `python run.py ...` without installing.

Equivalent to `python -m naatai ...`.
"""
from naatai.cli import main

if __name__ == "__main__":
    raise SystemExit(main())
