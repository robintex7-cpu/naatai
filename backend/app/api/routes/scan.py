import os
from pathlib import Path
from datetime import datetime, timezone

import httpx
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form, BackgroundTasks, status
from fastapi.responses import FileResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ...core.database import get_db
from ...core.deps import get_current_user
from ...core.config import settings
from ...models.body_scan import BodyScan, Measurements, ScanStatus, Gender, ClothingType, InputMethod
from ...models.user import User
from ...schemas.scan import ScanCreate, ScanOut, MeasurementsCreate, MeasurementsOut

router = APIRouter(prefix="/scans", tags=["Body Scans"])

ALLOWED_VIDEO  = {".mp4", ".mov", ".avi", ".webm"}
ALLOWED_IMAGE  = {".jpg", ".jpeg", ".png", ".heic"}


@router.post("/", response_model=ScanOut, status_code=status.HTTP_201_CREATED)
async def create_scan(
    body: ScanCreate,
    db:   AsyncSession      = Depends(get_db),
    user: User              = Depends(get_current_user),
):
    scan = BodyScan(
        user_id=user.id,
        gender=body.gender,
        clothing_type=body.clothing_type,
        input_method=body.input_method,
        status=ScanStatus.pending,
    )
    db.add(scan)
    await db.flush()
    await db.refresh(scan)
    return scan


@router.post("/{scan_id}/upload-video")
async def upload_video(
    scan_id:           int,
    background_tasks:  BackgroundTasks,
    video:             UploadFile = File(...),
    reference_height:  float | None = Form(None),
    db:                AsyncSession = Depends(get_db),
    user:              User         = Depends(get_current_user),
):
    scan = await _get_user_scan(scan_id, user.id, db)
    _validate_file(video.filename, ALLOWED_VIDEO, settings.MAX_VIDEO_SIZE_MB)

    path = _save_upload(video, "videos", scan_id)
    scan.video_path = str(path)
    scan.status     = ScanStatus.processing
    await db.flush()

    background_tasks.add_task(
        _run_video_pipeline, scan_id, str(path), reference_height,
        scan.gender.value, scan.clothing_type.value,
    )
    return {"message": "Video uploaded. Processing started.", "scan_id": scan_id}


@router.post("/{scan_id}/upload-photos")
async def upload_photos(
    scan_id:          int,
    background_tasks: BackgroundTasks,
    front:            UploadFile      = File(...),
    back:             UploadFile | None = File(None),
    reference_height: float | None    = Form(None),
    db:               AsyncSession    = Depends(get_db),
    user:             User            = Depends(get_current_user),
):
    scan = await _get_user_scan(scan_id, user.id, db)
    _validate_file(front.filename, ALLOWED_IMAGE, settings.MAX_IMAGE_SIZE_MB)

    front_path = _save_upload(front, "photos", scan_id, suffix="_front")
    back_path  = None
    if back:
        _validate_file(back.filename, ALLOWED_IMAGE, settings.MAX_IMAGE_SIZE_MB)
        back_path = _save_upload(back, "photos", scan_id, suffix="_back")

    scan.front_photo_path = str(front_path)
    scan.back_photo_path  = str(back_path) if back_path else None
    scan.status           = ScanStatus.processing
    await db.flush()

    background_tasks.add_task(
        _run_photo_pipeline, scan_id, str(front_path),
        str(back_path) if back_path else None, reference_height,
        scan.gender.value, scan.clothing_type.value,
    )
    return {"message": "Photos uploaded. Processing started.", "scan_id": scan_id}


@router.post("/{scan_id}/manual", response_model=MeasurementsOut)
async def submit_manual(
    scan_id: int,
    body:    MeasurementsCreate,
    db:      AsyncSession = Depends(get_db),
    user:    User         = Depends(get_current_user),
):
    scan = await _get_user_scan(scan_id, user.id, db)

    async with httpx.AsyncClient(timeout=30.0) as client:
        resp = await client.post(
            f"{settings.AI_SERVICE_URL}/process/manual",
            json={
                "scan_id":       scan_id,
                "measurements":  body.model_dump(exclude_none=True),
                "gender":        scan.gender.value,
                "clothing_type": scan.clothing_type.value,
            },
        )
        resp.raise_for_status()
        result = resp.json()

    m = Measurements(
        scan_id=scan_id,
        **body.model_dump(),
        confidence=1.0,
        size_recommendations=result.get("size_recommendations", {}),
    )
    db.add(m)
    scan.status = ScanStatus.completed
    await db.flush()
    await db.refresh(m)
    return m


@router.get("/{scan_id}", response_model=ScanOut)
async def get_scan(
    scan_id: int,
    db:      AsyncSession = Depends(get_db),
    user:    User         = Depends(get_current_user),
):
    scan = await _get_user_scan(scan_id, user.id, db, load_measurements=True)
    return scan


@router.get("/", response_model=list[ScanOut])
async def list_scans(
    db:   AsyncSession = Depends(get_db),
    user: User         = Depends(get_current_user),
):
    result = await db.execute(
        select(BodyScan).where(BodyScan.user_id == user.id).order_by(BodyScan.id.desc())
    )
    return result.scalars().all()


@router.get("/{scan_id}/mesh")
async def download_mesh(
    scan_id: int,
    db:      AsyncSession = Depends(get_db),
    user:    User         = Depends(get_current_user),
):
    scan = await _get_user_scan(scan_id, user.id, db)
    if not scan.mesh_path or not Path(scan.mesh_path).exists():
        raise HTTPException(status_code=404, detail="Mesh not available yet")
    path = Path(scan.mesh_path)
    glb = path.with_suffix(".glb")
    if glb.exists():
        return FileResponse(str(glb), media_type="model/gltf-binary", filename=f"naatai_body_{scan_id}.glb")
    return FileResponse(str(path), media_type="model/obj", filename=f"naatai_body_{scan_id}.obj")


async def _get_user_scan(scan_id: int, user_id: int, db: AsyncSession, load_measurements: bool = False) -> BodyScan:
    from sqlalchemy.orm import selectinload
    q = select(BodyScan).where(BodyScan.id == scan_id, BodyScan.user_id == user_id)
    if load_measurements:
        q = q.options(selectinload(BodyScan.measurements))
    result = await db.execute(q)
    scan   = result.scalar_one_or_none()
    if not scan:
        raise HTTPException(status_code=404, detail="Scan not found")
    return scan


def _validate_file(filename: str | None, allowed: set, max_mb: int):
    if not filename:
        raise HTTPException(status_code=400, detail="Filename missing")
    ext = Path(filename).suffix.lower()
    if ext not in allowed:
        raise HTTPException(status_code=400, detail=f"File type {ext} not allowed")


def _save_upload(file: UploadFile, subdir: str, scan_id: int, suffix: str = "") -> Path:
    ext  = Path(file.filename).suffix.lower()
    dest = Path(settings.STORAGE_PATH) / subdir
    dest.mkdir(parents=True, exist_ok=True)
    path = dest / f"scan_{scan_id}{suffix}{ext}"
    with open(path, "wb") as f:
        f.write(file.file.read())
    return path


async def _run_video_pipeline(
    scan_id: int, video_path: str, reference_height: float | None,
    gender: str, clothing_type: str,
):
    from ...core.database import AsyncSessionLocal
    async with AsyncSessionLocal() as db:
        try:
            async with httpx.AsyncClient(timeout=300.0) as client:
                resp = await client.post(
                    f"{settings.AI_SERVICE_URL}/process/video",
                    json={
                        "scan_id":             scan_id,
                        "video_path":          video_path,
                        "gender":              gender,
                        "clothing_type":       clothing_type,
                        "reference_height_cm": reference_height,
                    },
                )
                resp.raise_for_status()
                await _save_pipeline_result(db, scan_id, resp.json())
        except Exception as exc:
            await _mark_failed(db, scan_id, str(exc))


async def _run_photo_pipeline(
    scan_id: int, front: str, back: str | None, reference_height: float | None,
    gender: str, clothing_type: str,
):
    from ...core.database import AsyncSessionLocal
    async with AsyncSessionLocal() as db:
        try:
            async with httpx.AsyncClient(timeout=300.0) as client:
                resp = await client.post(
                    f"{settings.AI_SERVICE_URL}/process/photos",
                    json={
                        "scan_id":             scan_id,
                        "front_path":          front,
                        "back_path":           back,
                        "gender":              gender,
                        "clothing_type":       clothing_type,
                        "reference_height_cm": reference_height,
                    },
                )
                resp.raise_for_status()
                await _save_pipeline_result(db, scan_id, resp.json())
        except Exception as exc:
            await _mark_failed(db, scan_id, str(exc))


async def _save_pipeline_result(db, scan_id: int, result: dict):
    r    = await db.execute(select(BodyScan).where(BodyScan.id == scan_id))
    scan = r.scalar_one_or_none()
    if not scan:
        return

    if result.get("success"):
        scan.status         = ScanStatus.completed
        scan.mesh_path      = result.get("mesh_path")
        scan.thumbnail_path = result.get("thumbnail_path")
        scan.pose_landmarks = result.get("pose_landmarks")
        scan.processed_at   = datetime.now(timezone.utc)

        m = Measurements(
            scan_id=scan_id,
            confidence=result.get("confidence", 0.0),
            size_recommendations=result.get("size_recommendations", {}),
            **{k: v for k, v in result.get("measurements", {}).items()
               if k in Measurements.__table__.columns.keys()},
        )
        db.add(m)
    else:
        scan.status        = ScanStatus.failed
        scan.error_message = result.get("error", "Processing failed")

    await db.commit()


async def _mark_failed(db, scan_id: int, error: str):
    r    = await db.execute(select(BodyScan).where(BodyScan.id == scan_id))
    scan = r.scalar_one_or_none()
    if scan:
        scan.status        = ScanStatus.failed
        scan.error_message = error
        await db.commit()
