import React, { Component } from 'react';

class MeditateTimer extends Component {
  constructor() {
    super();
    this.state = { secondsElapsed: 0 };
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="widget">
        Seconds Elapsed: {this.state.secondsElapsed}
      </div>
    );
  }
}

export default MeditateTimer;
