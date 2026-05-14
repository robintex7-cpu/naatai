from pydantic import BaseModel, EmailStr


class TokenLogin(BaseModel):
    login_token: str


class EmailLogin(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    user_id: int
    name: str | None


class RefreshRequest(BaseModel):
    refresh_token: str


class GenerateTokenRequest(BaseModel):
    name: str | None = None
    email: EmailStr | None = None
