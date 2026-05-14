import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager
from pathlib import Path
from sqlalchemy import select

from .core.config import settings
from .core.database import init_db, AsyncSessionLocal
from .core.security import generate_login_token
from .api.routes import auth, scan

logger = logging.getLogger("naatai")


async def _seed_first_user():
    from .models.user import User
    async with AsyncSessionLocal() as db:
        result = await db.execute(select(User).limit(1))
        if result.scalar_one_or_none():
            return
        admin_token   = generate_login_token()
        customer_token = generate_login_token()
        db.add(User(login_token=admin_token,    name="Admin",    is_admin=True))
        db.add(User(login_token=customer_token, name="Customer", is_admin=False))
        await db.commit()
        logger.warning("=" * 60)
        logger.warning("FIRST-RUN SETUP — save these tokens!")
        logger.warning(f"  Admin token:    {admin_token}")
        logger.warning(f"  Customer token: {customer_token}")
        logger.warning("=" * 60)


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    await _seed_first_user()
    Path(settings.STORAGE_PATH).mkdir(parents=True, exist_ok=True)
    yield


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.API_VERSION,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

storage_path = Path(settings.STORAGE_PATH)
storage_path.mkdir(parents=True, exist_ok=True)
app.mount("/storage", StaticFiles(directory=str(storage_path)), name="storage")

app.include_router(auth.router, prefix="/api/v1")
app.include_router(scan.router, prefix="/api/v1")


@app.get("/api/health")
async def health():
    return {"status": "ok", "app": settings.APP_NAME}
