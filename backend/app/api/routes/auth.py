from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from ...core.database import get_db
from ...core.security import (
    create_access_token, create_refresh_token,
    decode_token, generate_login_token,
)
from ...core.deps import get_admin_user
from ...models.user import User
from ...schemas.auth import TokenLogin, TokenResponse, GenerateTokenRequest, RefreshRequest

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/token-login", response_model=TokenResponse)
async def login_with_token(body: TokenLogin, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(User).where(User.login_token == body.login_token.upper())
    )
    user = result.scalar_one_or_none()
    if not user or not user.is_active:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

    return TokenResponse(
        access_token=create_access_token(user.id),
        refresh_token=create_refresh_token(user.id),
        user_id=user.id,
        name=user.name,
    )


@router.post("/refresh", response_model=TokenResponse)
async def refresh_token(body: RefreshRequest, db: AsyncSession = Depends(get_db)):
    payload = decode_token(body.refresh_token)
    if payload.get("type") != "refresh":
        raise HTTPException(status_code=401, detail="Not a refresh token")

    result = await db.execute(select(User).where(User.id == int(payload["sub"])))
    user   = result.scalar_one_or_none()
    if not user:
        raise HTTPException(status_code=401, detail="User not found")

    return TokenResponse(
        access_token=create_access_token(user.id),
        refresh_token=create_refresh_token(user.id),
        user_id=user.id,
        name=user.name,
    )


@router.post("/generate-customer-token", dependencies=[Depends(get_admin_user)])
async def generate_customer_token(body: GenerateTokenRequest, db: AsyncSession = Depends(get_db)):
    token = generate_login_token()

    while True:
        existing = await db.execute(select(User).where(User.login_token == token))
        if not existing.scalar_one_or_none():
            break
        token = generate_login_token()

    user = User(login_token=token, name=body.name, email=body.email)
    db.add(user)
    await db.flush()

    return {
        "login_token": token,
        "user_id":     user.id,
        "name":        body.name,
        "message":     f"Share token '{token}' with the customer to let them log in.",
    }
