import React from "react";
import styled from "styled-components";
import data from "../../../../template/copy.json";
import ReactPlayer from "react-player";
import "./Multimedia.css";

const Header = styled.h2`
  font-size: 250%;
  font-weight: bold;
`;

const LargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2rem;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 30px;

  @media screen and (max-width: 650px) {
    width: 88%;
    margin-left: 6%;
  }
`;

const MediaContainer = () => {
  return (
    <React.Fragment>
      <div className="sectionMultimedia">
        <LargeContainer>
          <Header>Multimedia</Header>
          <div className="MediaVideoContainer">
            <div className="halfVideo">
              <ReactPlayer
                url={data.videos.video1}
                width="100%"
                height="100%"
                controls
              />
            </div>
            <div className="halfVideo">
              <ReactPlayer
                url={data.videos.video2}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
          <iframe
            src={data.podcast.link}
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </LargeContainer>
      </div>
    </React.Fragment>
  );
};

export default MediaContainer;
