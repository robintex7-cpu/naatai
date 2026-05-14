from sqlalchemy import String, Boolean, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime
from ..core.database import Base


class User(Base):
    __tablename__ = "users"

    id:           Mapped[int]      = mapped_column(primary_key=True)
    login_token:  Mapped[str]      = mapped_column(String(20), unique=True, index=True)
    email:        Mapped[str | None] = mapped_column(String(255), unique=True, nullable=True)
    name:         Mapped[str | None] = mapped_column(String(255), nullable=True)
    password_hash:Mapped[str | None] = mapped_column(String(255), nullable=True)
    is_active:    Mapped[bool]     = mapped_column(Boolean, default=True)
    is_admin:     Mapped[bool]     = mapped_column(Boolean, default=False)
    created_at:   Mapped[datetime] = mapped_column(DateTime, server_default=func.now())

    scans:        Mapped[list["BodyScan"]]  = relationship(back_populates="user", cascade="all, delete-orphan")
    profiles:     Mapped[list["BodyProfile"]] = relationship(back_populates="user", cascade="all, delete-orphan")
