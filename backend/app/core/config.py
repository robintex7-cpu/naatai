from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # App
    APP_NAME: str = "Naatai Fit"
    API_VERSION: str = "v1"
    DEBUG: bool = False

    # Security
    SECRET_KEY: str = "naatai-super-secret-key-change-in-production"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30
    ALGORITHM: str = "HS256"

    # Database
    DATABASE_URL: str = "postgresql+asyncpg://naatai:naatai2025@localhost:5432/naatai_fit"

    # Storage
    STORAGE_PATH: str = "./storage"
    MAX_VIDEO_SIZE_MB: int = 200
    MAX_IMAGE_SIZE_MB: int = 20

    # AI service (ML processing — runs on port 8001)
    AI_SERVICE_URL: str = "http://localhost:8001"

    # CORS
    ALLOWED_ORIGINS: list[str] = ["*"]

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
