import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }

  :hover {
    cursor: pointer;
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  border: 0;
  align-item: center;
  margin-left: 4%;
`;

const StyledImage = styled(Card.Img)`
  width: 150px;
  margin: 0 10px;
  @media screen and (max-width: 650px) {
    height: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }
`;

const StyledTitle = styled(Card.Title)`
  font-size: 130%;
  margin: 0;

  :hover {
    color: gray;
  }
`;

const StyledCreator = styled(Card.Text)`
  font-style: italic;
  font-size: 95%;
  margin: 0;
`;

const StyledBody = styled(Card.Text)`
  display: flex;
  flex-direction: row;
  font-size: 100%;
  margin: 0;
`;

const PodcastCard = ({ text, title, creator, image, link }) => {
  return (
    <StyledContainer
      onClick={(e) => {
        e.preventDefault();
        window.location.href = link;
      }}
    >
      <StyledImage variant="top" src={image} />
      <StyledCard>
        <StyledTitle>{title}</StyledTitle>
        <StyledCreator>{creator}</StyledCreator>
        <StyledBody>{text}</StyledBody>
      </StyledCard>
    </StyledContainer>
  );
};

export default PodcastCard;
