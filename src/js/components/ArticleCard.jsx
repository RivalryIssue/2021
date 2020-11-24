import React from "react";

const ArticleCard = ({ data }) => {
  function getData(data) {
    console.log(data);
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
  return (
    <div className="article-card">
      {data.map((data) => {
        return getData(data);
      })}
    </div>
  );
};

export default ArticleCard;
