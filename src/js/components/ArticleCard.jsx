import React from "react";
import tmd_logo_black from "./../../images/tmd-logo-black.png";
import lantern_logo from "./../../images/old-lantern-logo.png";
import michigan_image_0 from "./../../images/michigan-card-0.jpg";
import osu_image_1 from "./../../images/osu-card-1.jpg";

const ArticleCard = ({ data }) => {
  function getData(data) {
    //console.log(data);
    if (data.type === "description") {
      return (
        <p
          className="article-blurb"
          dangerouslySetInnerHTML={{ __html: data.value }}
        ></p>
      );
    } else if (data.type === "title") {
      return <h1 className="article-title">{data.value}</h1>;
    } else if (data.type === "author") {
      return <div className="article-author">{data.value}</div>;
    }
  }

  let type = data.type;
  let article_num = data.num;
  let image_link = data.img;
  let article_link = data.link;
  let article_data = data.article;

  let div_class_name = "article-card";

  if (article_num % 2 === 0) {
    div_class_name = "right-" + div_class_name;
  } else {
    div_class_name = "left-" + div_class_name;
  }

  let div_id = "";
  let logo_src;
  let image_src = "./../../images/";
  if (type == 0) {
    div_id += "michigan-card";
    logo_src = tmd_logo_black; //daily logo
    image_src += "michigan-";
  } else {
    div_id += "osu-card";
    logo_src = lantern_logo; //lantern logo
    image_src += "osu-";
  }

  image_src += "card-" + article_num + ".jpg";

  return (
    <div
      style={{ backgroundImage: "url(" + require(image_src) + ")" }}
      className={div_class_name}
      id={div_id}
    >
      <div className="article-card-text">
        <img className="card-news-logo" src={logo_src} alt=""></img>
        {article_data.map((article_data) => {
          return getData(article_data);
        })}
        <br />
        <button className="article-card-button">
          <a href={article_link}>Read Article</a>
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
