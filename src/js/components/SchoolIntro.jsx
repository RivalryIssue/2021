import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

const SchoolIntro = ({ tab }) => (
  <div className="articleContainer" style={{ marginTop: "20px" }}>
    <div className="schoolIntro">
      <div className="player-wrapper">
        <ReactPlayer
          url={tab === "UM" ? "https://www.youtube.com/watch?v=oIs_KnbBD7g" : "https://www.youtube.com/watch?v=VTEqUF289pk"}
          width="90%"
          height="90%"
          className="react-player"
        />
      </div>
    </div>
  </div>
);

SchoolIntro.propTypes = {
  tab: PropTypes.string.isRequired
};

export default SchoolIntro;
