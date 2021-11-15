import React from "react";
import ReactPlayer from "react-player";
import tmd from "../../images/tmd-donate.jpg";
import lantern from "../../images/lantern-donate.jpg";

const SchoolIntro = ({ tabType }) => {
  return (
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
};

export default SchoolIntro;
