import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Article from "./components/Article/Article";
import Landing_Page from "./components/Landing_Page/Landing_Page";
import Footer from "./components/Footer";
import data from "../../template/copy.json";
import ArticleGrid from "./components/ArticleGrid";
import DonationGraphic from "./components/DonationGraphic";
import SchoolIntro from "./components/SchoolIntro";
import Intro from "./components/Intro";
import Tabs from "./components/Tabs";

window.onload = function () {
  var mountNode = document.getElementById("app");
  ReactDOM.render(<App name="Jane" />, mountNode);
};

export default function App() {
  return (
    <>
      <Main />
      <Landing_Page data={data} />
      <Intro />
      <DonationGraphic />
      <Tabs />
      <ArticleGrid />
    </>
  );
}
