#  ASTRA-HEALTH
### Astronaut Health Assessment and Intelligence Platform

**Team:** ORBIT NEXUS  
**Event:** NASA Space Apps Challenge 2026  
**Project Category:** Health Monitoring Software for Astronauts on Space Missions

---

## 🌌 1. Project Overview

ASTRA-HEALTH is an AI-assisted astronaut health monitoring and assessment platform designed to support crew health during long-duration space missions.

It collects physiological, behavioral, and environmental health indicators, compares measurements against an astronaut's personal baseline, and uses rule-based assessment and machine learning anomaly detection to identify unusual changes.

The platform presents health insights, alerts, historical trends, and preventive guidance through an interactive dashboard and a 2D human body map.

## 🎯 2. Problem Statement

Astronauts face several health risks during space missions, including:

- Space radiation
- Isolation and confinement
- Distance from Earth
- Gravity-related health changes
- Hostile and closed environments

Communication delays and limited medical resources can make it difficult to monitor health changes and respond quickly.

## 💡 3. Our Solution

ASTRA-HEALTH aims to help astronauts monitor their health and understand unusual changes through:

- Continuous or periodic health-data monitoring.
- Personal baseline comparison.
- Rule-based health assessment.
- Machine learning anomaly detection.
- Explainable health insights.
- Alerts and preventive guidance.
- Historical health trends and reports.

## 🩺 4. Key Features

- **Astronaut Profile:** Manage astronaut information and health records.
- **Health Monitoring:** Track physiological and behavioral indicators.
- **Personal Baseline:** Compare new measurements with historical values.
- **AI/ML Assessment:** Identify unusual health patterns.
- **2D Human Body Map:** Visualize health indicators by body area.
- **Alert System:** Highlight measurements that may need attention.
- **Health History:** Review previous measurements and trends.
- **Preventive Guidance:** Display understandable, context-based recommendations.
- **Mission Dashboard:** View astronaut health information in one place.

*Note: Feature availability depends on the current implementation.*

## 📊 5. Health Indicators

### Physiological Indicators
- Heart Rate (BPM)
- Blood Pressure (mmHg)
- Body Temperature (°C)
- Blood Oxygen Saturation (SpO₂)
- Respiratory Rate
- Blood Glucose (mg/dL)

### Behavioral Indicators
- Sleep Duration
- Mood Score
- Stress Score
- Physical Activity

### Environmental Indicators
- Cabin CO₂
- Radiation Exposure (when relevant data is available)

## ⚙️ 6. System Workflow

1. Data Collection
2. Data Validation
3. Database Storage
4. Personal Baseline Comparison
5. Rule-Based Assessment
6. ML Anomaly Detection
7. Combined Health Assessment
8. Health Insights and Alerts
9. Dashboard Visualization and Historical Tracking

## 🧠 7. AI and Machine Learning

ASTRA-HEALTH combines two assessment approaches:

- **Rule-Based Assessment:** Checks measurements against configured health rules.
- **ML Anomaly Detection:** Identifies unusual patterns compared with learned data patterns.

The combined approach aims to provide understandable and explainable health assessments.

## 🛠️ 8. Technology Stack

| Component | Technology |
|---|---|
| Frontend | React |
| Styling | Tailwind CSS |
| Backend | Python, FastAPI |
| Database | SQLite |
| Data Processing | Pandas, NumPy |
| Machine Learning | Scikit-learn |
| Data Validation | Pydantic |
| API Documentation | Swagger / OpenAPI |

*Only technologies actually used in the final implementation should remain in this list.*

## 🛰️ 9. NASA Research and Data Resources

NASA research and resources help inform the health challenges and requirements addressed by ASTRA-HEALTH.

- [NASA Open Science Data Repository (OSDR)](https://osdr.nasa.gov/)
- [NASA Human Research Program – Hazards](https://www.nasa.gov/hrp/hazards/)
- [NASA OSD-665 Study](https://osdr.nasa.gov/bio/repo/data/studies/OSD-665)

**Data note:** The project distinguishes simulated astronaut measurements from NASA research resources. OSD-665 is a mouse muscle study, not a continuous human astronaut vital-sign dataset.

## 👥 10. Team ORBIT NEXUS

Developed by Team ORBIT NEXUS for the NASA Space Apps Challenge 2026.

Our team worked on project research, system design, frontend and backend development, AI/ML integration, and presentation.

## 🔮 11. Future Improvements

- Integration with real wearable health sensors.
- Improved astronaut-specific baseline modeling.
- Enhanced offline-first functionality.
- More advanced health trend analysis.
- Additional NASA research data integrations.
- Expanded health indicators where reliable data is available.

## ⚠️ 12. Important Disclaimer

ASTRA-HEALTH is a decision-support prototype developed for the NASA Space Apps Challenge 2026.

It is not a certified medical device, does not provide medical diagnoses, and is not a replacement for professional medical assessment or flight surgeons.

## 📄 13. License

Add your chosen open-source license here if you intend to distribute the project under one.

---

**ASTRA-HEALTH — Helping astronauts understand what changed and why it needs a closer look.** 🚀

**Built with curiosity, innovation, and teamwork by ORBIT NEXUS.**
