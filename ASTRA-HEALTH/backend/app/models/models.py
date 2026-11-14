from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database.database import Base

class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, default="astronaut")  # astronaut, flight_surgeon, admin
    created_at = Column(DateTime, default=datetime.utcnow)

    astronaut = relationship("Astronaut", back_populates="user", uselist=False)

class Mission(Base):
    __tablename__ = "missions"

    mission_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)
    description = Column(Text, nullable=True)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=True)
    status = Column(String, default="Active")  # Active, Completed, Planned

    astronauts = relationship("Astronaut", back_populates="mission")

class Astronaut(Base):
    __tablename__ = "astronauts"

    astronaut_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), unique=True)
    mission_id = Column(Integer, ForeignKey("missions.mission_id"), nullable=True)
    full_name = Column(String, nullable=False)
    age = Column(Integer, nullable=True)
    nationality = Column(String, nullable=True)
    specialty = Column(String, nullable=True)  # e.g., Commander, Mission Specialist

    user = relationship("User", back_populates="astronaut")
    mission = relationship("Mission", back_populates="astronauts")
    measurements = relationship("HealthMeasurement", back_populates="astronaut")
    alerts = relationship("Alert", back_populates="astronaut")

class HealthMeasurement(Base):
    __tablename__ = "health_measurements"

    measurement_id = Column(Integer, primary_key=True, index=True)
    astronaut_id = Column(Integer, ForeignKey("astronauts.astronaut_id"), nullable=False)
    indicator_type = Column(String, index=True, nullable=False)  # heart_rate, blood_pressure, sleep_duration, etc.
    value = Column(Float, nullable=False)
    unit = Column(String, nullable=False)  # BPM, mmHg, hours, mg/dL, etc.
    timestamp = Column(DateTime, default=datetime.utcnow, index=True)
    source = Column(String, default="manual")  # manual, simulated, nasa_osdr
    quality_status = Column(String, default="valid")  # valid, flagged, missing

    astronaut = relationship("Astronaut", back_populates="measurements")

class Alert(Base):
    __tablename__ = "alerts"

    alert_id = Column(Integer, primary_key=True, index=True)
    astronaut_id = Column(Integer, ForeignKey("astronauts.astronaut_id"), nullable=False)
    severity = Column(String, nullable=False)  # info, warning, critical
    reason = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)
    is_acknowledged = Column(Integer, default=0)  # 0 = False, 1 = True

    astronaut = relationship("Astronaut", back_populates="alerts")