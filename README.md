# Longevity Snapshot - Meta-Cognitive Processing System

## Overview

The Meta-Cognitive Processing system is the central intelligence component of the Longevity Snapshot app. It serves as the orchestrator that:

1. Receives user health data
2. Determines which specialized agents (e.g., Medical, Sleep, Nutrition) are needed
3. Routes data to the selected agents
4. Receives analyses back from the agents
5. Synthesizes outputs for the Recommendation Engine
6. Flags low confidence or contradictions for review

## System Architecture

The system follows a modular architecture with the following components:

- **Meta-Cognitive Processor**: Central orchestrator that coordinates all agents
- **Specialized Agents**: Domain-specific analysis modules
  - Medical Agent: Overall health assessment
  - Sleep Agent: Sleep pattern analysis
  - Nutrition Agent: Dietary analysis
  - Stress Agent: Stress level analysis
  - Exercise Agent: Physical activity analysis
  - Personalization Agent: Customizes recommendations
  - Critical Evaluation Agent: Resolves contradictions and low confidence analyses

## Decision Logic

The Meta-Cognitive Processor activates specific agents based on input data patterns:
- Sleep data → Sleep Agent
- Complex Nutrition data → Nutrition Agent
- High Stress → Stress Agent
- Overall Health → Medical Agent
- Conflicting Information → Critical Evaluation Agent

## Getting Started

### Prerequisites

- Python 3.8+
- pip (Python package manager)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

### Running the Application

Start the API server:
```
python app.py
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the server is running, you can access the API documentation at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Example Usage

Send a POST request to the `/process` endpoint with user health data:

```json
{
  "user_id": "user123",
  "age": 35,
  "gender": "female",
  "height": 165,
  "weight": 65,
  "sleep_data": {
    "average_duration": 6.5,
    "quality": "medium",
    "bedtime_consistency": "low"
  },
  "nutrition_data": {
    "calories": 1800,
    "protein": 60,
    "carbs": 220,
    "fat": 65,
    "detailed_macros": true
  },
  "stress_data": {
    "level": 8,
    "sources": ["work", "financial"]
  },
  "exercise_data": {
    "strength_training": 3,
    "cardio": 1,
    "intensity": "medium"
  },
  "preferences": {
    "diet": "vegetarian",
    "exercise_time": "morning",
    "goals": ["weight_maintenance", "stress_reduction"]
  }
}
```

## Project Structure

```
longevity-snapshot/
├── agents/
│   ├── __init__.py
│   ├── base_agent.py
│   ├── medical_agent.py
│   ├── sleep_agent.py
│   └── ... (other agent modules)
├── meta_cognitive_processor.py
├── app.py
├── requirements.txt
└── README.md
```

## Extending the System

To add a new specialized agent:

1. Create a new agent module in the `agents/` directory
2. Inherit from the `BaseAgent` class
3. Implement the required methods
4. Update the `MetaCognitiveProcessor` to include the new agent
