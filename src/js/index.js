import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./components/Landing_Page/LandingPage";
import data from "../data/copy.json";
import ArticleGrid from "./components/ArticleGrid";
import DonationGraphic from "./components/DonationGraphic";
import Intro from "./components/Intro";
import Tabs from "./components/Tabs";

window.onload = () => {
  const mountNode = document.getElementById("app");
  ReactDOM.render(<App />, mountNode);
};

const App = () => (
  <>
      <LandingPage data={data} />
      <Intro />
      <DonationGraphic />
      <Tabs />
      <ArticleGrid />
    </>
)

export default App;
