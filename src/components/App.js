import React from "react";
import '../App.css';
import BreakInterval from './BreakInterval';
import SessionLength from "./SessionLength";
import Timer from "./Timer";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25

    }
  }
  render() {
    return (
      <main>
        <h2>Promodoro Clock</h2>
        <section className="interval-length-container">
          <BreakInterval BreakInterval={this.state.breakLength} />
          <SessionLength SessionLength={this.state.sessionLength} />
        </section>
        <Timer timerMinute={this.state.timerMinute} ></Timer>
      </main>)
  }
}

export default App;
