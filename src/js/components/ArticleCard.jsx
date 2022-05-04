import React from "react";
import tmdLogoBlack from "../../images/logo/tmd-logo-black.png";
import lanternLogo from "../../images/logo/lantern-logo-black.png";

const ArticleCard = ({ data }) => {
  let divClassName = "article-card";

  let divID = "";
  let logoSrc;
  // let image_src = data.img;
  if (data.school === "UM") {
    divClassName = `right-${divClassName}`;
    divID += "michigan-card";
    logoSrc = tmdLogoBlack; // daily logo
  } else {
    divClassName = `left-${divClassName}`;
    divID += "osu-card";
    logoSrc = lanternLogo; // lantern logo
  }

  return (
    <div className="testWrap">
      <div
        style={{ backgroundImage: `url(${data.img})` }}
        className={`article-card ${divClassName} ${divID}`}
      >
        <div className="article-text">
          <a href={data.link} className={`text-link ${divID}-link`}>
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

export default ArticleCard;
