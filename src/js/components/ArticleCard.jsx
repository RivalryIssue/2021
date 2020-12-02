import React from "react";
import tmd_logo_black from "./../../images/tmd-logo-black.png";
import lantern_logo from "./../../images/lanternLogo.png";

const ArticleCard = ({ data, count }) => {
  let div_class_name = "article-card";

  if (count % 2 === 0) {
    div_class_name = "right-" + div_class_name;
  } else {
    div_class_name = "left-" + div_class_name;
  }

  let div_id = "";
  let logo_src;
  // let image_src = data.img;
  if (data.school === "UM") {
    div_id += "michigan-card";
    logo_src = tmd_logo_black; //daily logo
  } else {
    div_id += "osu-card";
    logo_src = lantern_logo; //lantern logo
  }

  return (
    <div className="testWrap">
      <div
        style={{ backgroundImage: "url(" + data.img + ")" }}
        className={`article-card ${div_class_name} ${div_id}`}
      >
        <div className="article-text">
          <a href={`/${data.slug}`} className={`text-link ${div_id}-link`}>
            <h1 className="article-title">{data.title}</h1>
          </a>
          <div className="article-author">{data.author}</div>
          {/* <p
          className="article-blurb"
          dangerouslySetInnerHTML={{ __html: data.desc }}
        ></p> */}
          <img className="card-news-logo" src={logo_src} alt=""></img>
          <br />
          <a href={`/${data.slug}`}>
            <button
              className="article-card-button"
              onClick=""
              title={data.desc}
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
