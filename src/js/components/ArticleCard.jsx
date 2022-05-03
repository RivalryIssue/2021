import React from "react";
import tmd_logo_black from "./../../images/tmd-logo-black.png";
import lantern_logo from "./../../images/lanternLogo.png";

const ArticleCard = ({ data, count }) => {
  let div_class_name = "article-card";

  let div_id = "";
  let logo_src;
  // let image_src = data.img;
  if (data.school === "UM") {
    div_class_name = "right-" + div_class_name;
    div_id += "michigan-card";
    logo_src = tmd_logo_black; //daily logo
  } else {
    div_class_name = "left-" + div_class_name;
    div_id += "osu-card";
    logo_src = lantern_logo; //lantern logo
  }

  return (
    <div className="testWrap">
      <div
        style={{ backgroundImage: `url(${  data.img  })` }}
        className={`article-card ${div_class_name} ${div_id}`}
      >
        <div className="article-text">
          <a href={data.link} className={`text-link ${div_id}-link`}>
            <h1 className="article-title">{data.title}</h1>
          </a>
          <div className="article-author">{data.author}</div>
          <img className="card-news-logo" src={logo_src} alt="" />
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
