import React from "react";
import Countdown from "react-countdown";
import "./Countdown.css";

const CountdownTimer = () => {
  return (
    <div className="counter-container">
      <p className="counter-header">time to election day:</p>
      <div className="background-fill">
        <Countdown
          date={new Date("November 3, 2020 00:00:00")}
          className="counter"
        />
      </div>
    </div>
  );
};

export default CountdownTimer;
