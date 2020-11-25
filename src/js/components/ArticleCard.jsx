import React from "react";

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
    } else if (data.type === "date") {
      return <div className="article-date">{data.value}</div>;
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
  let logo_src = "";
  if (type == 0) {
    div_id += "michigan-card";
    logo_src += "https://www.michigandaily.com/sites/default/files/tmd2.png"; //daily logo
  } else {
    div_id += "osu-card";
    logo_src +=
      "https://i0.wp.com/artsandsciences.osu.edu/sites/artsandsciences.osu.edu/files/newsimages/logo.png"; //lantern logo
  }

  return (
    <div
      style={{ backgroundImage: "url(" + { image_link } + ")" }}
      className={div_class_name}
      id={div_id}
    >
      <img className="card-news-logo" src={logo_src} alt=""></img>
      {article_data.map((article_data) => {
        return getData(article_data);
      })}
      <br />
      <button className="article-card-button">
        <a href={article_link}>Read Article</a>
      </button>
    </div>
  );
};

export default ArticleCard;
