import React, { Component } from 'react';
import Forecast from 'react-forecast';
import './App.css';

class Weather extends Component {
  render() {
    return (
        <div className="weather widget">
          <Forecast color="rgb(81, 151, 242)" font="Helvetica" units="ca" latitude={33.86} longitude={151.20} name='Sydney' />
        </div>
    );
  }
}

export default Weather;
