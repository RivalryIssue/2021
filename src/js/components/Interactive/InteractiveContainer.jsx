import React, { useEffect } from "react";
import "./Interactive.css";
import Collapsible from "react-collapsible";
import DataCentral from "./DataCentral";
import DataCentral2 from "./DataCentral2";
import data from "../../../../template/copy.json";
import biden from "../../../assets/Biden.jpg";
import trump from "../../../assets/Trump.jpg";
import james from "../../../assets/James.jpg";
import gary from "../../../assets/Gary.png";
import dingell from "../../../assets/Dingell.png";
import jones from "../../../assets/Jones.jpg";
import { Element } from "react-scroll";

const InteractiveContainer = () => {
  const largeScreen = window.innerWidth > 450;
  function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {
    fetch("https://election-site-1.s3.us-east-2.amazonaws.com/maildata")
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          document.getElementById("numVotesCast").innerHTML =
            "&nbsp;" + addCommas(data.us.earlyVotes) + "&nbsp;";
          document.getElementById("numVotesCastMail").innerHTML =
            "&nbsp;" + addCommas(data.us.personVotes) + "&nbsp;";
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, []);

  const renderData = (articles) => {
    let results = [];
    for (let i = 0; i < articles.length; i += 1) {
      results.push(articles.slice(i, i + 1));
    }
    return results;
  };

  return (
    <div id="sectionInteractives">
      <h1 id="intSectionTitle">Interactives</h1>
      <h2>Explore the candidates!</h2>
      <Collapsible trigger="Presidential Candidates" open={largeScreen}>
        <div class="candidatesContainer">
          <div class="halfCandidate">
            <img src={biden} className="candidateProPic" />
            <h2>{data.accordionPres.demName}</h2>
            <p>{data.accordionPres.demDesc}</p>
          </div>
          <div class="halfCandidate">
            <img src={trump} className="candidateProPic" />
            <h2>{data.accordionPres.repName}</h2>
            <p>{data.accordionPres.repDesc}</p>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger="Senate Candidates">
        <div class="candidatesContainer">
          <div class="halfCandidate">
            <img src={gary} className="candidateProPic" />
            <h2>{data.accordionSen.demName}</h2>
            <p>{data.accordionSen.demDesc}</p>
          </div>
          <div class="halfCandidate">
            <img src={james} className="candidateProPic" />
            <h2>{data.accordionSen.repName}</h2>
            <p>{data.accordionSen.repDesc}</p>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger="Representative Candidates">
        <div class="candidatesContainer">
          <div class="halfCandidate">
            <img src={dingell} className="candidateProPic" />
            <h2>{data.accordionRep.demName}</h2>
            <p>{data.accordionRep.demDesc}</p>
          </div>
          <div class="halfCandidate">
            <img src={jones} className="candidateProPic" />
            <h2>{data.accordionRep.repName}</h2>
            <p>{data.accordionRep.repDesc}</p>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger="Proposals">
        <div class="candidatesContainer2">
          {data.proposals.proposal.map((data) => {
            return (
              <div>
                <strong>{data.name}</strong>
                <p>{data.content}</p>
                <br></br>
              </div>
            );
          })}
        </div>
      </Collapsible>
      <div className="dataCentral">
        <h2>
          <span> &nbsp; Data Central &nbsp;</span>
        </h2>
        <div id="voteStats">
          <h2>
            Early Voting: <span id="numVotesCast"></span> Americans have voted,
            including <span id="numVotesCastMail"></span> by mail
          </h2>
          <br></br>
        </div>
        <div id="vizBox">
          <Element name="scrollToInteractives" />
          <DataCentral />
          <DataCentral2 />
        </div>
      </div>

      <h2>Trivia</h2>
      <div className="containerQuiz">
        <div
          className="box1"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://magnify.michigandaily.us/election2020_history/";
          }}
        >
          <strong>U-M Election History Quiz</strong>
        </div>
        <div
          className="box2"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://magnify.michigandaily.us/election2020_candidates/";
          }}
        >
          <strong>How much do you know about the candidates?</strong>
        </div>
        <div
          className="box3"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://magnify.michigandaily.us/election2020_whosaidit/";
          }}
        >
          <strong>Who said it: Trump, Biden, or Schlissel?</strong>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContainer;
