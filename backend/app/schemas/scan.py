from pydantic import BaseModel, Field
from ..models.body_scan import Gender, ClothingType, InputMethod, ScanStatus


class MeasurementsBase(BaseModel):
    height_cm:        float | None = Field(None, description="Height in cm")
    weight_kg:        float | None = Field(None, description="Weight in kg")
    chest_cm:         float | None = None
    waist_cm:         float | None = None
    hips_cm:          float | None = None
    shoulder_width_cm:float | None = None
    neck_cm:          float | None = None
    sleeve_length_cm: float | None = None
    inseam_cm:        float | None = None
    thigh_cm:         float | None = None
    arm_length_cm:    float | None = None
    torso_length_cm:  float | None = None


class MeasurementsCreate(MeasurementsBase):
    pass


class MeasurementsOut(MeasurementsBase):
    id:                   int
    scan_id:              int
    confidence:           float | None
    size_recommendations: dict | None

    model_config = {"from_attributes": True}


class ScanCreate(BaseModel):
    gender:       Gender
    clothing_type:ClothingType
    input_method: InputMethod


class ScanOut(BaseModel):
    id:           int
    gender:       Gender
    clothing_type:ClothingType
    input_method: InputMethod
    status:       ScanStatus
    mesh_path:    str | None
    thumbnail_path:str | None
    measurements: MeasurementsOut | None
    error_message:str | None

    model_config = {"from_attributes": True}


class ScanList(BaseModel):
    id:           int
    gender:       Gender
    clothing_type:ClothingType
    input_method: InputMethod
    status:       ScanStatus
    thumbnail_path:str | None
    created_at:   str

    model_config = {"from_attributes": True}
