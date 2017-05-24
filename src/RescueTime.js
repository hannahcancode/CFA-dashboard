import React, { Component } from 'react';
import axios from 'axios';
// import RescueTimeGraph from './RescueTimeGraph';
import GraphTest from './GraphTest';


class RescueTime extends Component {
  constructor(props){
    super(props);
    this.getRescueTime = this.getRescueTime.bind(this);
// Sets the state parameters
    this.state = {
      data: [],
      avg: 0,
      productivityStats: [],
      productivityLabels: [
        'Very productive percentage',
        'Productive percentage',
        'Neutral percentage',
        'Distracting percentage'
      ]
    }
  };


// componentDidMount calls the function so it is mounted
  componentDidMount() {
    this.getRescueTime()
  };

  getRescueTime() {
    // Get Data
    const URL = 'https://www.rescuetime.com/anapi/daily_summary_feed/?key=B63GG_XV9Z7qSRBnunUG8OoH5BGxMOw121uEbP8J'
    // Use axios to get data
    axios.get(URL)
      .then((response) => {
      const avg = response.data.map((i) => i.productivity_pulse).reduce((p, c) => p + c
, 0) / response.data.length;
        this.setState({
          data: response.data,
          avg: avg.toFixed(1),
          productivityStats: [
            response.data[13].very_productive_percentage, response.data[13].productive_percentage,
            response.data[13].neutral_percentage,
            response.data[13].distracting_percentage
          ]
        })
      })
      .catch(function (error) {
        console.log(error);
    });
  };



  render() {
    return (
      <div className="widget">
        <h2>RescueTime Productivity Pulse: {this.state.avg} </h2>
        <hr />

        {/* <RescueTimeGraph

        /> */}
        <GraphTest productivityData={this.state.productivityStats} productivityLabels={this.state.productivityLabels} />

      </div>
    );
  }
}

export default RescueTime;
