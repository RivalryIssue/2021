import React from "react";
import ArticleCard from "./ArticleCard";
import data from "../../data/copy.json";

const ArticleGrid = () => {
  const interleave = (a, b) => {
    const min = Math.min(a.length, b.length);
    return Array.apply(null, Array(min))
      .reduce((result, value, index) => {
        result.push(a[index], b[index]);
        return result;
      }, [])
      .concat((a.length > min ? a : b).slice(min));
  };
  const getAllData = () => {
    const um = data.michigan.articles.map((a) => ({ ...a, school: "UM" }));
    const osu = data.ohio.articles.map((a) => ({ ...a, school: "OSU" }));
    return interleave(um, osu);
  };
  return (
    <div className="articleContainer">
      <div className="allArticles">
        {getAllData().map((d, i) => <ArticleCard key={`${d.school}-${d.link}`} data={d} count={i} />)}
      </div>
    </div>
  );
};

export default ArticleGrid;
