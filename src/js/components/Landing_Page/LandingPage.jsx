import React from "react";
import "./LandingPage.css";
import Scroll from "react-scroll";
import tmdLogo from "../../../images/tmd-logo-black.png";
import lanternLogo from "../../../images/lanternLogo.png";

const LandingPage = () => {
  const scroll = Scroll.animateScroll;
  function scrollClick() {
    scroll.scrollTo(window.innerHeight, { smooth: true });
  }

  return (
    <>
      <div className="landing-page">
        <div className="LandingPage_Image_Michigan" />
        <div className="LandingPage_Image_Ohio" />
      </div>

      <div className="logo_title_box">
        <h1>The Rivalry</h1>
        <h2>2021</h2>
        <a href="https://michigandaily.com" target="_blank" rel="noreferrer">
          <img src={tmdLogo} alt="The Michigan Daily logo" />
        </a>
        <p>&#10006;</p>
        <a href="https://thelantern.com" target="_blank" rel="noreferrer">
          <img src={lanternLogo} alt="The Lantern logo" />
        </a>
      </div>

      <i className="fa fa-chevron-circle-down" onClick={scrollClick} />
    </>
  );
};

export default LandingPage;
