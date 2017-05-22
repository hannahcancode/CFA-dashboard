import React, { Component } from 'react';
import Fitbit from './Fitbit';
import RescueTime from './RescueTime';
import Weather from './Weather';
import Calendar from './Calendar';
import Meetup from './Meetup';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fitbit />
        <RescueTime />
        <Weather />
        <Calendar />
        <Meetup />
      </div>
    );
  }
}

export default App;
