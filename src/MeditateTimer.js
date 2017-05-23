import React, { Component } from 'react';

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
      <div className="widget">
        <h2>Meditation Timer</h2>
        Seconds Elapsed: {this.state.secondsElapsed}
        <br />
        <br />

        {!this.state.playing ? <button onClick={() => this.start()}>&#9658;</button> : <button onClick={() => this.pause()}>&#10074;&#10074;</button>}

        <button onClick={() => this.reset()}>reset</button>
      </div>
    );
  }
}

export default MeditateTimer;
