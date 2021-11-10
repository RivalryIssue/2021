import React from "react";
import ArticleCard from "./ArticleCard";
import data from "../../../template/copy.json";
import tmd from "../../images/tmd-donate.jpg";
import lantern from "../../images/lantern-donate.jpg";
import ReactPlayer from "react-player";

const ArticleGrid = () => {
  const interleave = (a, b) => {
    let min = Math.min(a.length, b.length);
    return Array.apply(null, Array(min))
      .reduce((result, value, index) => {
        result.push(a[index], b[index]);
        return result;
      }, [])
      .concat((a.length > min ? a : b).slice(min));
  };
  const getAllData = () => {
    let um = data.michigan.articles.map((a) => {
      return { ...a, school: "UM" };
    });
    let osu = data.ohio.articles.map((a) => {
      return { ...a, school: "OSU" };
    });
    return interleave(um, osu);
  };
  const getData = () => {
    return getAllData();
  };
  const getSchoolIntro = () => {
    return (
      <>
        <p>
          For the second year, The Michigan Daily and The Ohio State Lantern are
          producing a joint publication with stories about our schools' historic
          football rivalry. We're launching this work alongside a competitive
          fundraiser to help us cover our operating costs. Whether you're a
          Buckeye or a Wolverine, please consider donating to support
          award-winning student journalism.
        </p>
        <div className="player-wrapper">
          <ReactPlayer
            url="https://youtu.be/XIst3PS1k_8"
            width="90%"
            height="90%"
            className="react-player"
          />
        </div>
        <br />
        <a
          href="https://give.communityfunded.com/o/university-of-michigan/i/giving-tuesday/s/tmd-lantern-rivalry"
          target="_blank"
        >
          <img src={tmd}></img>
        </a>
        <a href="https://buckeyefunder.osu.edu/project/21918" target="_blank">
          <img src={lantern}></img>
        </a>
      </>
    );
  };
  return (
    <div className="articleContainer">
      <div className="schoolIntro">{getSchoolIntro()}</div>
      <div className="allArticles">
        {getData().map((d, i) => {
          return <ArticleCard data={d} count={i} />;
        })}
      </div>
    </div>
  );
};

export default ArticleGrid;
