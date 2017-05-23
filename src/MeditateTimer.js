import React, { Component } from 'react';

class MeditateTimer extends Component {
  constructor() {
    super();
    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.reset = this.reset.bind(this);
    // this.tick = this.tick.bind(this);
    this.state = { secondsElapsed: 0 };
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  start() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  pause() {
    clearInterval(this.interval);
    delete this.interval;
  }

  resume() {
    if (!this.interval) this.start();
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
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.pause()}>pause</button>
        <button onClick={() => this.resume()}>resume</button>
        <button onClick={() => this.reset()}>reset</button>
      </div>
    );
  }
}

export default MeditateTimer;
