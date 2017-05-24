import React, { Component } from 'react';
import Forecast from 'react-forecast';


import './App.css';



class Weather extends Component {
 //  constructor(props) {
 //    super(props);
 //    this.state = {
 //      lat: 0,
 //      lon: 0
 //    }
 //  }

 //  getLocation() {
 //    if (navigator.geolocation) {
 //      console.log('running');
 //      navigator.geolocation.getCurrentPosition((position) => {
 //        this.setState({
 //          lat: position.coords.latitude,
 //          lon: position.coords.longitude
 //        })
 //      });
 //    } else {
 //      alert('Geolocation is not supported by this browser');
 //    }
 //  }

 //  componentWillMount() {
 //    console.log(this.state.lon);
 //    console.log(this.state.lat);
 //  }

 // componentDidMount() {
 //    if (navigator.geolocation) {
 //      navigator.geolocation.getCurrentPosition((position) => {
 //        this.setState({lat: position.coords.latitude});
 //      });
 //    } else {
 //      console.log('nope')
 //    }
 //  }

  render() {
    return (
      <div>
        <Forecast color="#262626" font="Helvetica" units="ca" latitude={33.86} longitude={151.20} name='Sydney' />
      </div>
    )
  }
}

export default Weather;

