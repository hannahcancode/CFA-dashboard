import React, { Component } from 'react';
import ProgressLabel from 'react-progress-label';


class Fitbit extends Component {
  getFitbitData() {
    return fetch('https://api.fitbit.com/1/user/4GNHKM/activities/date/2017-05-22.json?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0R05IS00iLCJhdWQiOiIyMjhKTk0iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNDk1NTE5NjMzLCJpYXQiOjE0OTU0MzMyMzN9.9q8R-09rkjs1qTPXnGEMfgWdZRH4boVLDUS3APQ4X0k')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
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
        <h2>Fitbit</h2>
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
              progressColor="#E91E63" />
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
              progressColor="#4CAF50" />
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
              progressColor="#2196F3" />
            </div>
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
