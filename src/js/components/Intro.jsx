import React from "react";
import data from "../../data/copy.json";

const Intro = () => (
  <div className="articleContainer">
    <div className="schoolIntro" style={{ marginBottom: 0 }}>
      <div className="intro-desc">{data.homepage.description}</div>
    </div>
  </div>
);

export default Intro;
