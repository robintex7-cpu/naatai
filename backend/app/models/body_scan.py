from sqlalchemy import String, Integer, Float, ForeignKey, DateTime, JSON, Enum as SAEnum, func, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime
import enum
from ..core.database import Base


class Gender(str, enum.Enum):
    man   = "man"
    woman = "woman"
    kid   = "kid"


class ClothingType(str, enum.Enum):
    tops      = "tops"
    bottom    = "bottom"
    full_body = "full_body"


class InputMethod(str, enum.Enum):
    manual    = "manual"
    video     = "video"
    photo     = "photo"


class ScanStatus(str, enum.Enum):
    pending    = "pending"
    processing = "processing"
    completed  = "completed"
    failed     = "failed"


class BodyScan(Base):
    __tablename__ = "body_scans"

    id:              Mapped[int]    = mapped_column(primary_key=True)
    user_id:         Mapped[int]    = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    gender:          Mapped[Gender] = mapped_column(SAEnum(Gender))
    clothing_type:   Mapped[ClothingType] = mapped_column(SAEnum(ClothingType))
    input_method:    Mapped[InputMethod]  = mapped_column(SAEnum(InputMethod))
    status:          Mapped[ScanStatus]   = mapped_column(SAEnum(ScanStatus), default=ScanStatus.pending)

    video_path:      Mapped[str | None] = mapped_column(String(500), nullable=True)
    front_photo_path:Mapped[str | None] = mapped_column(String(500), nullable=True)
    back_photo_path: Mapped[str | None] = mapped_column(String(500), nullable=True)
    mesh_path:       Mapped[str | None] = mapped_column(String(500), nullable=True)
    thumbnail_path:  Mapped[str | None] = mapped_column(String(500), nullable=True)

    pose_landmarks:  Mapped[dict | None] = mapped_column(JSON, nullable=True)
    error_message:   Mapped[str | None]  = mapped_column(Text, nullable=True)

    created_at:      Mapped[datetime] = mapped_column(DateTime, server_default=func.now())
    processed_at:    Mapped[datetime | None] = mapped_column(DateTime, nullable=True)

    user:            Mapped["User"]         = relationship(back_populates="scans")
    measurements:    Mapped["Measurements"] = relationship(back_populates="scan", uselist=False, cascade="all, delete-orphan")


class Measurements(Base):
    __tablename__ = "measurements"

    id:               Mapped[int]   = mapped_column(primary_key=True)
    scan_id:          Mapped[int]   = mapped_column(ForeignKey("body_scans.id", ondelete="CASCADE"), unique=True)

    height:           Mapped[float | None] = mapped_column(Float, nullable=True)
    weight:           Mapped[float | None] = mapped_column(Float, nullable=True)
    chest:            Mapped[float | None] = mapped_column(Float, nullable=True)
    waist:            Mapped[float | None] = mapped_column(Float, nullable=True)
    hips:             Mapped[float | None] = mapped_column(Float, nullable=True)
    shoulder_width:   Mapped[float | None] = mapped_column(Float, nullable=True)
    neck:             Mapped[float | None] = mapped_column(Float, nullable=True)
    sleeve_length:    Mapped[float | None] = mapped_column(Float, nullable=True)
    inseam:           Mapped[float | None] = mapped_column(Float, nullable=True)
    thigh:            Mapped[float | None] = mapped_column(Float, nullable=True)
    arm_length:       Mapped[float | None] = mapped_column(Float, nullable=True)
    torso_length:     Mapped[float | None] = mapped_column(Float, nullable=True)

    confidence:       Mapped[float | None] = mapped_column(Float, nullable=True)
    size_recommendations: Mapped[dict | None] = mapped_column(JSON, nullable=True)

    created_at:       Mapped[datetime] = mapped_column(DateTime, server_default=func.now())

    scan:             Mapped["BodyScan"] = relationship(back_populates="measurements")


class BodyProfile(Base):
    __tablename__ = "body_profiles"

    id:        Mapped[int]    = mapped_column(primary_key=True)
    user_id:   Mapped[int]    = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    scan_id:   Mapped[int | None] = mapped_column(ForeignKey("body_scans.id"), nullable=True)
    label:     Mapped[str]    = mapped_column(String(100), default="My Body")
    is_active: Mapped[bool]   = mapped_column(default=True)
    created_at:Mapped[datetime] = mapped_column(DateTime, server_default=func.now())

    user:      Mapped["User"] = relationship(back_populates="profiles")
