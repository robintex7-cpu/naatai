"""naatai — a modular, AI-driven trading system.

The package is organised as a pipeline of independent stages, each in its own
subpackage, connected by the data contracts in :mod:`naatai.types`:

    data_lake -> features -> regime -> models -> ensemble
              -> risk -> execution -> monitoring -> retraining

Use :func:`naatai.pipeline.build_default` to assemble a wired pipeline.
"""

from naatai.config import Config, RunMode
from naatai.pipeline import Pipeline, build_default

__all__ = ["Config", "RunMode", "Pipeline", "build_default"]

__version__ = "0.0.1"
