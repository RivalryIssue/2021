import React from "react";
import data from "../../../template/copy.json";
import tmd from "../../images/tmd-donate.jpg";
import lantern from "../../images/lantern-donate.jpg";

const Intro = () => {
  return (
    <div className="articleContainer">
      <div className="schoolIntro" style={{ "margin-bottom": 0 }}>
        <div className="intro-desc">{data.homepage.description}</div>
      </div>
    </div>
  );
};

export default Intro;
