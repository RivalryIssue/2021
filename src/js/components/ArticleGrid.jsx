import React from "react";
import ArticleCard from "./ArticleCard";
import data from "../../../template/copy.json";

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
  return (
    <div className="articleContainer">
      <div className="allArticles">
        {getAllData().map((d, i) => {
          return <ArticleCard data={d} count={i} />;
        })}
      </div>
    </div>
  );
};

export default ArticleGrid;
