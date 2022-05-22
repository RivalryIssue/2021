import React from "react";
import PropTypes from "prop-types";

const Intro = ({ description }) => (
  <div className="container">
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div className="intro-desc">{description}</div>
    </div>
  </div>
);

Intro.propTypes = {
  description: PropTypes.string.isRequired
}

export default Intro;
