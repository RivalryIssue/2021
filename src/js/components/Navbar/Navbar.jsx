import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../../assets/election_graphic.svg";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > window.innerHeight);
    });
  }, []);
  const largeScreen = window.innerWidth > 450;
  return (
    <div className={scroll ? "navbar-container-fixed" : "navbar-container"}>
      <a href="https://michigandaily.com/" target="_blank" id="logoLink">
        <img src={logo} className="mlogo" />
      </a>
      <div className={scroll ? "countdown-container" : "countdown-hide"}>
        <p className="countdown-text">time to election</p>
        <Countdown
          date={new Date("November 3, 2020 00:00:00")}
          className="countdown-timer"
        />
      </div>
      <div className="link-container">
        <Link
          activeClass="active"
          className={largeScreen ? "link-text" : "link-text-touch"}
          to="sectionMultimedia"
          spy={true}
          smooth={true}
          duration={500}
        >
          Multimedia
        </Link>
        <Link
          activeClass="active"
          className={largeScreen ? "link-text" : "link-text-touch"}
          to="sectionArticles"
          spy={true}
          smooth={true}
          duration={500}
        >
          Articles
        </Link>
        <Link
          activeClass="active"
          className={largeScreen ? "link-text" : "link-text-touch"}
          to="sectionInteractives"
          spy={true}
          smooth={true}
          duration={500}
        >
          Interactives
        </Link>
      </div>
      <div id="socialRow" className={scroll ? "showSocial" : "hideSocial"}>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://magnify.michigandaily.us/election2020/"
          class="fa faSocial fa-facebook"
        ></a>
        <a
          href="https://twitter.com/intent/tweet?url=https://magnify.michigandaily.us/election2020/"
          class="fa faSocial fa-twitter"
        ></a>
      </div>
    </div>
  );
};

export default Navbar;
