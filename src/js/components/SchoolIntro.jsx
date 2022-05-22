import React from "react";
import PropTypes from "prop-types";

const SchoolIntro = ({ tab }) => (
  <div className="container" style={{ marginTop: "20px" }}>
    <div className="schoolIntro">
      <div className="player-wrapper">
        <iframe 
          width="100%" 
          height="100%" 
          src={tab === "UM" ? "https://www.youtube.com/embed/oIs_KnbBD7g" : "https://www.youtube.com/embed/VTEqUF289pk" }
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        />
      </div>
    </div>
  </div>
);

SchoolIntro.propTypes = {
  tab: PropTypes.string.isRequired
};

export default SchoolIntro;
