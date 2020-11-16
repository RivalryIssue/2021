import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import ArticleContainer from "./Articles/ArticleContainer";
import InteractiveContainer from "./Interactive/InteractiveContainer";
import Navbar from "./Navbar/Navbar";
import MediaContainer from "./Multimedia/MediaContainer";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <LandingPage />
      <Navbar />
      <div className="allcontent">
        <InteractiveContainer />
        <ArticleContainer />
        <MediaContainer />
        <br></br>
        <Footer
          address="420 Maynard Street, Ann Arbor, MI 48105"
          phone="(734) 418 - 4115"
          credit1="Developed by The Michigan Daily Web Team"
          credit2="Designed by The Michigan Daily Design Team"
          copyright="Copyright © 2020, all rights reserved."
          title="The Michigan Daily"
        ></Footer>
      </div>
    </>
  );
};

export default Main;
