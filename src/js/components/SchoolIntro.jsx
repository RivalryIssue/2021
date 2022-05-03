import React from "react";
import ReactPlayer from "react-player";

const SchoolIntro = ({ tabType }) => (
  <div className="articleContainer" style={{ marginTop: "20px" }}>
    <div className="schoolIntro">
      <div className="player-wrapper">
        <ReactPlayer
          url={tabType === "UM" ? "https://www.youtube.com/watch?v=oIs_KnbBD7g" : "https://www.youtube.com/watch?v=VTEqUF289pk"}
          width="90%"
          height="90%"
          className="react-player"
        />
      </div>
    </div>
  </div>
);

export default SchoolIntro;
