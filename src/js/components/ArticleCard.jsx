import React from "react";

const ArticleCard = ({ data }) => {
  function getData(data) {
    //console.log(data);
    if (data.type === "text") {
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

  let article_data = data.article;
  let type = data.type;
  let article_num = data.num;

  let div_class_name = "article-card";

  if (article_num % 2 === 0) {
    div_class_name = "right-" + div_class_name;
  } else {
    div_class_name = "left-" + div_class_name;
  }

  let div_id = "";
  if (type == 0) {
    div_id += "michigan-card";
  } else {
    div_id += "osu-card";
  }

  return (
    <div className={div_class_name} id={div_id}>
      {article_data.map((article_data) => {
        return (
          getData(article_data) +
          <button className="article-button">Read Article</button>
        );
      })}
    </div>
  );
};

export default ArticleCard;
