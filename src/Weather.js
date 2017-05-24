import React, { Component } from 'react';
import Forecast from 'react-forecast';


import './App.css';



class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      console.log('running');
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      });
    } else {
      alert('Geolocation is not supported by this browser');
    }
  }

  // showPosition(position) {
  //   console.log(position.coords.latitude);
  //   console.log('running');
  //   this.setState({
  //     lat: position.coords.latitude,
  //     lon: position.coords.longitude
  //   })
  // }

  componentWillMount() {
    console.log(this.state.lon);
    console.log(this.state.lat);
  }

 componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({lat: position.coords.latitude});
      });
    } else {
      console.log('nope')
    }
  }

  render() {
    return (
      <div className="weather widget">
        <Forecast color="#262626" font="Helvetica" units="ca" latitude={this.state.lat} longitude={this.state.lon} name='Sydney' />
      </div>
    )
  }
}

export default Weather;

