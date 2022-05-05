import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "./ArticleCard";
import "../../css/article.scss";

const ArticleGrid = ({ data }) => {
  const interweave = (a, b) => {
    const min = Math.min(a.length, b.length);
    return Array(...Array(min))
      .reduce((result, _, index) => {
        result.push(a[index], b[index]);
        return result;
      }, [])
      .concat((a.length > min ? a : b).slice(min));
  };
  const getAllData = () => {
    const um = data.michigan.articles.map((a) => ({ ...a, school: "UM" }));
    const osu = data.ohio.articles.map((a) => ({ ...a, school: "OSU" }));
    return interweave(um, osu);
  };

  return (
    <div className="container">
      <div className="article-grid">
        {getAllData().map((d, i) => <ArticleCard key={`${d.school}-${d.link}`} data={d} count={i} />)}
      </div>
    </div>
  );
};

ArticleGrid.propTypes = {
  data: PropTypes.shape({
    michigan: PropTypes.shape({
      articles: PropTypes.arrayOf(PropTypes.shape())
    }).isRequired,
    ohio: PropTypes.shape({
      articles: PropTypes.arrayOf(PropTypes.shape())
    }).isRequired
  }).isRequired
}

export default ArticleGrid;
