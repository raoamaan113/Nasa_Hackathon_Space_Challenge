from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.database import engine, Base
from app.models import models

# Automatically create database tables on startup
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Astra Health API",
    description="Backend API for Astronaut Health Assessment and Intelligence Platform — NASA Space Apps Challenge 2026",
    version="1.0.0"
)

# Enable CORS for React frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "Welcome to Astra Health API — NASA Space Apps Challenge 2026",
        "status": "operational",
        "database": "connected and tables initialized"
    }

@app.get("/health")
def health_check():
    return {"status": "healthy"}