import React from 'react';

class AlarmClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: '',
      alarmTime: ''
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }

  componentDidMount(){
    // this.clock = setInterval(
    //   () => this.setCurrentTime(),
    //   1000
    // )
    this.interval = setInterval(
      () => this.checkAlarmClock(),
    1000)
  }

  componentWillUnmount(){
    // clearInterval(this.clock);
    clearInterval(this.interval);
  }

  // setCurrentTime(){	managed to create an alarm/ bugg with the alert pop up
  //   this.setState({
  //     currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
  //   });
  // }

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = "05";
    this.setState({
      alarmTime: inputAlarmTimeModified
    })
  }	managed to create an alarm/ bugg with the alert pop up

  checkAlarmClock(){
    if(this.state.alarmTime == 'undefined' || !this.state.alarmTime) {
      this.alarmMessage = "Please set your alarm.";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if(this.props.toc === this.state.alarmTime) {
        alert("its time!");
      } else {
        console.log("not yet");
      }
    }
  }

  render() {
    return (
      <div>
        <h2>It is {this.props.toc}.
        </h2>
        <h2>{this.alarmMessage}
        </h2>
        <form>
          <input type="number" onChange={this.setAlarmTime}></input>
        </form>
      </div>
    );
  }
}

export default AlarmClock;
