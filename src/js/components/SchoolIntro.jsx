import React from "react";
import ReactPlayer from "react-player";

const SchoolIntro = ({ tabType }) => (
  <div className="articleContainer" style={{ marginTop: "20px" }}>
    <div className="schoolIntro">
      <div className="player-wrapper">
        {tabType === "UM" ? (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=oIs_KnbBD7g"
            width="90%"
            height="90%"
            className="react-player"
          />
        ) : (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=VTEqUF289pk"
            width="90%"
            height="90%"
            className="react-player"
          />
        )}
      </div>
    </div>
  </div>
);

export default SchoolIntro;
