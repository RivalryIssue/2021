import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import TMDMBlack from "/assets/mlogo.png";

const OverallContainer = styled.div`
  display: flex;
  color: black;
  background: #e6e6e6;
  margin-top: 0.5%;
  margin-bottom: 0;
  align-items: center;
  text-align: left;
  overflow: ;
`;
const StyledLine = styled.hr`
  margin-bottom: 1.7rem;
  height: 5rem;
  border: 0;
  box-shadow: 0 1px 1px -1px #8c8c8c inset;
`;

const Body = styled(Row)`
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: left;
  margin-bottom: 1%;
  margin-top: 1%;
`;
const MainText = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.3rem;
    margin-left 0.5rem;
`;
const Copyright = styled(Row)`
  margin-top: 1%;
  margin-bottom: 1%;
  padding-right: 2%;
`;

const MainTitle = styled.h1`
  margin: 0;
  font-size: calc(4px + 0.75vw);
  padding-bottom: 0;
  font-weight: bold;
`;
const MainCaption = styled.h1`
  margin: 0;
  font-size: calc(4px + 0.45vw);
  padding-bottom: 0;
  font-weight: normal;
`;
const MainCredentials = styled.h1`
  margin: 0;
  font-size: calc(3px + 0.42vw);
  padding-bottom: 0;
  font-weight: normal;
`;
const MainCopyright = styled.h1`
  margin: 0;
  font-size: calc(3px + 0.42vw);
  padding-top: 4%;
  padding-bottom: 2%;
  font-weight: normal;
`;

const TmdLogoImageWrapper = styled(Row)`
    border:0;
    position:relative; 
    padding: 0;
    margin: 3% 0;
    justify-content: left;
    padding-left: 4%;
    margin-bottom 0;
    filter: invert(1);
`;

const StyledImage = styled(Image)`
  width: calc(45px + 1.2vw);
`;

const Footer = ({ address, phone, credit1, credit2, copyright, title }) => {
  return (
    <OverallContainer>
      <StyledLine></StyledLine>
      <Body>
        <TmdLogoImageWrapper>
          <a href="https://www.michigandaily.com/">
            <StyledImage src={TMDMBlack} fluid />
          </a>
        </TmdLogoImageWrapper>

        <MainText>
          <MainTitle>{title}</MainTitle>
          <MainCaption>{address}</MainCaption>
          <MainCaption>{phone}</MainCaption>
        </MainText>
      </Body>

      <Copyright>
        <MainCredentials>{credit1}</MainCredentials>
        <MainCredentials>{credit2}</MainCredentials>
        <MainCopyright>{copyright}</MainCopyright>
      </Copyright>
    </OverallContainer>
  );
};

export default Footer;
