import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import "./Articles/Article.css";

const StyledCard = styled(Card)`
  width: 30%;
  height: 100%;
  border: 0;
  padding: 1%;
  align-item: center;
  text-align: center;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: auto;
  margin-bottom: auto;
  background-color: #e8e8e8;

  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }
`;

const DonationBox = () => {
  return (
    <StyledCard>
      <h1 className="donationText">Donate to The Daily</h1>
      <p className="donationText">
        We’re committed to reporting on the issues that matter most to the
        community where we live, learn and work. Your donations keep our
        journalism free and independent.
      </p>
      <button
        className="donateButton"
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://leadersandbest.umich.edu/find/#!/give/basket/fund/314932";
        }}
      >
        Donate
      </button>
    </StyledCard>
  );
};

export default DonationBox;
