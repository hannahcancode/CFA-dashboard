import React, { Component } from 'react';
import axios from 'axios';
import RescueTimeGraph from './RescueTimeGraph';


class RescueTime extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      avg: 0
    }
  };

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
          avg: avg.toFixed(1)
        })
        this.dailyStats()
      })
      .catch(function (error) {
        console.log(error);
    });
  };

  dailyStats() {
    const stats = [this.state.data[13].very_productive_percentage, this.state.data[13].productive_percentage, this.state.data[13].neutral_percentage, this.state.data[13].distracting_percentage]
    console.log(stats)
  }

  render() {
    return (
      <div className="widget">
        Hello world
        <h2>Your average fortnightly productivity pulse is {this.state.avg} </h2>
        <RescueTimeGraph
          productivityData={this.state.stats}
        />
      </div>
    );
  }
}

export default RescueTime;
