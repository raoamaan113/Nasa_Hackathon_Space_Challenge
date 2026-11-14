from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List

# --- User Schemas ---
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    role: Optional[str] = "astronaut"

class UserResponse(BaseModel):
    user_id: int
    username: str
    email: str
    role: str
    created_at: datetime

    class Config:
        from_attributes = True

# --- Mission Schemas ---
class MissionCreate(BaseModel):
    name: str
    description: Optional[str] = None
    start_date: datetime
    end_date: Optional[datetime] = None
    status: Optional[str] = "Active"

class MissionResponse(MissionCreate):
    mission_id: int

    class Config:
        from_attributes = True

# --- Astronaut Schemas ---
class AstronautCreate(BaseModel):
    user_id: int
    mission_id: Optional[int] = None
    full_name: str
    age: Optional[int] = None
    nationality: Optional[str] = None
    specialty: Optional[str] = None

class AstronautResponse(AstronautCreate):
    astronaut_id: int

    class Config:
        from_attributes = True

# --- Health Measurement Schemas ---
class HealthMeasurementCreate(BaseModel):
    astronaut_id: int
    indicator_type: str  # e.g., heart_rate, blood_pressure, sleep_duration
    value: float
    unit: str            # e.g., BPM, mmHg, hours
    source: Optional[str] = "manual"  # manual, simulated, nasa_osdr
    quality_status: Optional[str] = "valid"

class HealthMeasurementResponse(HealthMeasurementCreate):
    measurement_id: int
    timestamp: datetime

    class Config:
        from_attributes = True

# --- Alert Schemas ---
class AlertResponse(BaseModel):
    alert_id: int
    astronaut_id: int
    severity: str        # info, warning, critical
    reason: str
    timestamp: datetime
    is_acknowledged: int

    class Config:
        from_attributes = True