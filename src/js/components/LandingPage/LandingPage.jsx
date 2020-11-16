import React from "react";
import "./LandingPage.css";
import election_graphic from "../../../assets/election_graphic.svg";
import CountdownTimer from "../Countdown/Countdown";
import LiveUpdates from "../LiveUpdates/LiveUpdates";

const LandingPage = () => {
  const largeScreen = window.innerWidth > 450;
  return (
    <div className="container">
      <div className="outer-container">
        <div className="inside-container">
          <img className="election-graphic" src={election_graphic} />
          <CountdownTimer />
        </div>
        {largeScreen && <LiveUpdates />}
      </div>
    </div>
  );
};

export default LandingPage;
