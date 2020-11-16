import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import "./Article.css";

const StyledCard = styled(Card)`
  width: 60%;
  height: 100%;
  border: 0;
  padding: 0%;
  align-item: center;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  margin-bottom: 15px;

  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }
`;

const StyledBody = styled(Card.Body)`
  display: flex;
  width: 100%;
  flex-direction: row @media screen and (max-width: 650px) {

  }
`;

const StyledTitle = styled(Card.Title)`
  font-size: 120%;
  font-family: "Lora";
  font-weight: bold;
  text-align: left;
  color: rgb(0, 0, 0);

  @media screen and (max-width: 650px) {
    font-size: 1rem;
  }

  :hover {
    color: gray;
  }
`;

const StyledAuthor = styled(Card.Title)`
  float: left;
  padding-top: 10px;
  font-size: 90%;
  white-space: nowrap;

  @media screen and (max-width: 650px) {
    font-size: 85%;
  }
`;

const StyledTime = styled(Card.Title)`
  padding-top: 10px;
  font-size: 90%;
  float: right;

  @media screen and (max-width: 650px) {
    font-size: 85%;
  }
`;

const StyledSection = styled(Card.Title)`
  font-weight: bold;

  @media screen and (max-width: 650px) {
    font-size: 85%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  align-item: center;

  @media screen and (max-width: 650px) {
    width: 100%%;
    position: relative;
    align-item: center;
  }
`;

const ImageStyled = styled(Card.Img)`
  object-fit: cover;
  @media screen and (max-width: 650px) {
    height: 150px;
  }
`;

const SmallArticle = ({
  section,
  title,
  writer,
  timestamp,
  image,
  link,
  height,
}) => {
  return (
    <StyledCard>
      <StyledSection>{section}</StyledSection>
      <ImageWrapper>
        <a href={link}>
          <ImageStyled variant="top" src={image} width="100%" height={height} />
        </a>
      </ImageWrapper>
      <a href={link}>
        <StyledTitle>{title}</StyledTitle>
      </a>
      <div class="StyleBody">
        <StyledAuthor>{writer}</StyledAuthor>
        <StyledTime>{timestamp}</StyledTime>
      </div>
    </StyledCard>
  );
};

export default SmallArticle;
