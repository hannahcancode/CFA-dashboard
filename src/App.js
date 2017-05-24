import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

import Fitbit from './Fitbit';
import RescueTime from './RescueTime';
import Weather from './Weather';
import Calendar from './Calendar';
import GraphTest from './GraphTest';
import MeditateTimer from './MeditateTimer';

import './App.css';

class App extends Component {
  render() {

  const style = {
    margin: 20,
    textAlign: 'center'
  }

  const titleStyle = {
    textAlign: 'center'
  }

    return (
    <MuiThemeProvider>
      <div className="App">
        <AppBar
            title="Work/Life"
            titleStyle={titleStyle}
            zDepth={1}
            style={{
              backgroundColor: '#326EFF'
            }}
        />
          <Paper className="widget" style={style} zDepth={3}>
            <Fitbit />
          </Paper>
          <Paper className="widget" style={style} zDepth={3}>
            <Calendar />
          </Paper>

          <Paper style={style} zDepth={3}>
            <RescueTime />
          </Paper>
          <Paper className="widget" className="widget" style={style} zDepth={3}>
            <Weather />
          </Paper>
          <Paper className="widget" style={style} zDepth={3}>
            <MeditateTimer />
          </Paper>

      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
