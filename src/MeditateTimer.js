import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class MeditateTimer extends Component {
  constructor() {
    super();
    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    // this.tick = this.tick.bind(this);
    this.state = {
      secondsElapsed: 0,
      playing: false
    };
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  start() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState({
      playing: true
    })
  }

  pause() {
    clearInterval(this.interval);
    delete this.interval;
    this.setState({
      playing: false
    })
  }

  reset() {
    this.setState({
      secondsElapsed: 0
    })
  }

  render() {
    return (
      <div>
        <h2>Meditation Timer</h2>
        <hr />
        <h3>Seconds Elapsed:</h3>
        <h2>{this.state.secondsElapsed}</h2>
        <br />

        {!this.state.playing ? <RaisedButton label="Start" onClick={() => this.start()} /> : <RaisedButton label="Pause" onClick={() => this.pause()} />}

        <RaisedButton label="Reset" onClick={() => this.reset()} />
      </div>
    );
  }
}

export default MeditateTimer;
