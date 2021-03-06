import React, { Component } from 'react';
import ProgressLabel from 'react-progress-label';

class Fitbit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activityAmount: "",
        activity: ""
    };
  }

  render() {
    const data = {
      "activities": [],
      "goals": {
        "activeMinutes": 60,
        "caloriesOut": 2496,
        "distance": 7.2,
        "floors": 10,
        "steps": 10000
      },
      "summary": {
        "activeScore": -1,
        "activityCalories": 665,
        "caloriesBMR": 1034,
        "caloriesOut": 1620,
        "distances": [
          {
            "activity": "total",
            "distance": 3.88
          },
          {
            "activity": "tracker",
            "distance": 3.88
          },
          {
            "activity": "loggedActivities",
            "distance": 0
          },
          {
            "activity": "veryActive",
            "distance": 2.03
          },
          {
            "activity": "moderatelyActive",
            "distance": 0.09
          },
          {
            "activity": "lightlyActive",
            "distance": 1.76
          },
          {
            "activity": "sedentaryActive",
            "distance": 0
          }
        ],
        "elevation": 33.53,
        "fairlyActiveMinutes": 4,
        "floors": 10,
        "lightlyActiveMinutes": 86,
        "marginalCalories": 442,
        "sedentaryMinutes": 823,
        "steps": 5364,
        "veryActiveMinutes": 30
      }
    }

    return (
      <div>
        <h2>Daily FitBit Stats</h2>
        <hr />
        <div className="fitbit-m-nested">
          <div className="fitbit-progress-bar">
            <ProgressLabel
              className="fitbit-1"
              progress={(data.summary.steps/data.goals.steps*100)}
              startDegree={0}
              progressWidth={20}
              trackWidth={20}
              cornersWidth={10}
              size={200}
              fillColor="black"
              trackColor="#330000"
              progressColor="#E91E63"
              onMouseOver={() => this.setState({ activityAmount: data.summary.steps, activity: "Steps" })} />
            <ProgressLabel
              className="fitbit-2"
              progress={((data.summary.veryActiveMinutes/data.goals.activeMinutes)*100)}
              startDegree={0}
              progressWidth={20}
              trackWidth={20}
              cornersWidth={10}
              size={148}
              fillColor="none"
              trackColor="#003300"
              progressColor="#4CAF50"
              onMouseOver={() => this.setState({ activityAmount: data.summary.veryActiveMinutes, activity: "Minutes" })} />
            <ProgressLabel
              className="fitbit-3"
              progress={(data.summary.floors/data.goals.floors*100)}
              startDegree={0}
              progressWidth={20}
              trackWidth={20}
              cornersWidth={10}
              size={96}
              fillColor="none"
              trackColor="#04252D"
              progressColor="#2196F3"
              onMouseOver={() => this.setState({ activityAmount: data.summary.floors , activity: "Floors"})} />
            </div>
          </div>
          <div className="legend">
            <div>{this.state.activityAmount} {this.state.activity}</div>
          </div>
          <div className="legend">
            <div className="pink box"></div>
            <div className="label">Steps</div>
            <div className="green box"></div>
            <div className="label">Minutes</div>
            <div className="blue box"></div>
            <div className="label">Floors</div>
          </div>
      </div>
    );
  }
}

export default Fitbit;
