import React from "react";
import PropTypes from "prop-types";

const Intro = ({ description }) => (
  <div className="articleContainer">
    <div className="schoolIntro" style={{ marginBottom: 0 }}>
      <div className="intro-desc">{description}</div>
    </div>
  </div>
);

Intro.propTypes = {
  description: PropTypes.string.isRequired
}

export default Intro;
