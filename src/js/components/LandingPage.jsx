import React from "react";
import Scroll from "react-scroll";
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
        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
          <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z" />
        </svg>
      </button>
    </>
  );
};

export default LandingPage;
