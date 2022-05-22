import React from "react";
import Scroll from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../css/landing.scss";
import tmdLogo from "../../images/logo/tmd-logo-black.png";
import lanternLogo from "../../images/logo/lantern-logo-black.png";

const LandingPage = () => {
  const scroll = Scroll.animateScroll;
  function scrollClick() {
    scroll.scrollTo(window.innerHeight, { smooth: true });
  }

  return (
    <>
      <div className="landing-page">
        <div className="landing-page-michigan" />
        <div className="landing-page-ohio" />
      </div>

      <div className="logo-title-box">
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

      <button onClick={scrollClick} type="button" className="chevron" aria-label="Scroll down">
        <FontAwesomeIcon icon={faCircleChevronDown} />
      </button>
    </>
  );
};

export default LandingPage;
