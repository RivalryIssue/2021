import React from "react";
import PropTypes from "prop-types";
import tmdLogoBlack from "../../images/logo/tmd-logo-black.png";
import lanternLogo from "../../images/logo/lantern-logo-black.png";

const ArticleCard = ({ data }) => {
  let divClassName = "article-card";
  let school;
  let logoSrc;

  if (data.school === "UM") {
    divClassName = `right-${divClassName}`;
    school = "michigan-card";
    logoSrc = tmdLogoBlack;
  } else {
    divClassName = `left-${divClassName}`;
    school = "osu-card";
    logoSrc = lanternLogo;
  }

  return (
    <div className="article-card-wrapper">
      <div
        style={{ backgroundImage: `url(${data.img})` }}
        className={`article-card ${divClassName} ${school}`}
      >
        <div className="article-text">
          <a href={data.link} className={`text-link ${school}-link`}>
            <h1 className="article-title">{data.title}</h1>
          </a>
          <div className="article-author">{data.author}</div>
          <img className="card-news-logo" src={logoSrc} alt="" />
          <br />
          <a href={data.link}>
            <button
              type="button"
              className="article-card-button"
              title={data.link}
            >
              Read Article
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  data: PropTypes.shape({
    school: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired
}

export default ArticleCard;
