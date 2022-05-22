import React from "react";
import { createRoot } from 'react-dom/client';
import ArticleGrid from "./components/ArticleGrid";
import DonationGraphic from "./components/DonationGraphic";
import Intro from "./components/Intro";
import LandingPage from "./components/LandingPage";
import Tabs from "./components/Tabs";
import data from "../data/copy.json";

window.onload = () => {
  const mountNode = document.getElementById("app");
  const root = createRoot(mountNode);
  root.render(<App />);
};

const App = () => (
  <>
    <LandingPage data={data} />
    <Intro description={data.homepage.description} />
    <DonationGraphic />
    <Tabs />
    <ArticleGrid data={data}/>
  </>
)

export default App;
