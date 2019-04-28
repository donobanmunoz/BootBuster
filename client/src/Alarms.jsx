import React, { Component } from "react";

export default class AlarmClock extends Component {
  constructor() {
    super();
    this.state = {
      alarmTime: ""
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.checkAlarmClock(), 1000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  setAlarmTime = event => {
    event.preventDefault();
    const inputAlarmTimeModified = "05";
    this.setState({
      alarmTime: inputAlarmTimeModified
    });
  };

  checkAlarmClock() {
    if (this.state.alarmTime == "undefined" || !this.state.alarmTime) {
      this.alarmMessage = "Please set your alarm.";
    } else {
      this.alarmMessage = "Your alarm was set at 5 min before the timer ends.";
      if (this.props.toc === this.state.alarmTime) {
        alert("5 MINUTES LEFT");
        this.setState({
          alarmTime: ""
        });
      } else {
        console.log("not yet");
      }
    }
  }

  render() {
    return (
      <div>
        <h2>{this.alarmMessage}</h2>
        <form>
          <button onClick={this.setAlarmTime}>5 min</button>
        </form>
      </div>
    );
  }
}

/*
  constructor(props) {
    super(props);
    this.state = {
      alarmTime: "undefined"
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
    this.checkAlarmClock = this.checkAlarmClock.bind(this);
    this.combo = this.combo.bind(this);
  }

  setAlarmTime() {
    const inputAlarmTimeModified = "02";
    this.setState({
      alarmTime: inputAlarmTimeModified
    });
  }

  checkAlarmClock() {
    if (this.props.toc === this.state.alarmTime) {
      alert("its time!");
    } else {
      console.log("not yet");
    }
  }
  combo(event) {
    this.setAlarmTime();
    this.checkAlarmClock();
  }

  render() {
    console.log("props from Two", this.props.toc);
    console.log("2 passing props?", this.state.alarmTime);
    return (
      <div>
        <h1>React Alarm Clock</h1>
        <h2>It is {this.props.toc}.</h2>
        <button onClick={this.combo}>9 min</button>
      </div>
    );
  }
}
*/
