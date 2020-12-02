import React from "react";
import "./Landing_Page.css";
import tmd_logo from "./../../../images/tmd-logo-black.png";
import lantern_logo from "./../../../images/lanternLogo.png";
import Scroll from "react-scroll";

const Landing_Page = ({ data }) => {
  var scroll = Scroll.animateScroll;
  function scrollClick() {
    scroll.scrollTo(window.innerHeight, { smooth: true });
  }
  return (
    <>
      <div className="landing-page">
        <div className="Landing_Page_Image_Michigan"></div>
        <div className="Landing_Page_Image_Ohio"></div>
      </div>

      <div className="logo_title_box">
        <h1>The Rivalry</h1>
        <h2>2020</h2>
        <a href="https://michigandaily.com" target="_blank">
          <img src={tmd_logo}></img>
        </a>
        <p>x</p>
        <a href="https://thelantern.com" target="_blank">
          <img src={lantern_logo}></img>
        </a>
      </div>

      <i className="fa fa-chevron-circle-down" onClick={scrollClick}></i>
    </>
  );
};

export default Landing_Page;
