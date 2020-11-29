import React from "react";
import "./Landing_Page.css";
import logo from "../../../images/TMDMBlack.png";

const Landing_Page = ({ data }) => {
  return (
    <>
      <div className="landing-page">
        <img
          className="Landing_Page_Image_Michigan"
          src="https://images.rivals.com/image/upload/f_auto,q_auto/xyl1hw5axp8ndhsuwkt3"
        />
        <img
          className="Landing_Page_Image_Ohio"
          src="https://images.rivals.com/image/upload/f_auto,q_auto/xyl1hw5axp8ndhsuwkt3"
        />
      </div>

      <div className="logo_title_box">
        <img className="logo" src={logo}></img>
        <h1 className="title">{data.homepage.intro.title}</h1>
      </div>

      {/* <div className="button-container">
        <div className="button-wrapper">
          <button className="TMD">The Michigan Daily</button>
          <button className="lantern">The Lantern</button>
        </div>
      </div> */}

      <div className="subtitle">
        <h2>{data.homepage.intro.subtitle}</h2>
      </div>
      <div className="paragraph">
        <p> {data.homepage.intro.paragraph} </p>
      </div>
    </>
  );
};

export default Landing_Page;
