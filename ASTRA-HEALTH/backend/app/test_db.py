import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLite database file path in the local directory
DATABASE_URL = "sqlite:///./astra_health.db"

# Create the SQLAlchemy engine
engine = create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)

# SessionLocal class for database sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for our SQLAlchemy models to inherit from
Base = declarative_base()

# Dependency for FastAPI routes to get a database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()