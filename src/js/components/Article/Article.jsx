import React from "react";
import "./Article.css";

const Article = ({ data }) => {
  function getData(data) {
    if (data.type === "text") {
      return (
        <p
          className="article-paragraph"
          dangerouslySetInnerHTML={{ __html: data.value }}
        ></p>
      );
    } else if (data.type === "title") {
      return <h1 className="article-title">{data.value}</h1>;
    } else if (data.type === "author") {
      return <h1 className="article-author">{data.value}</h1>;
    }
  }
  return (
    <>
      <div className="article-landing-page">
        <img
          className="article-image"
          src="https://images.rivals.com/image/upload/f_auto,q_auto/xyl1hw5axp8ndhsuwkt3"
        />
      </div>
      <div className="article-container">
        {/* Check out ../../css/base.scss for base styling! */}
        {data.map((data) => {
          return getData(data);
        })}
      </div>
      <button className="home-button">Return Home</button>
      <div className="article-footer">
        <p className="donate-text">Support the Daily!</p>
        <button className="donate-button">Click to donate</button>
        <div className="dontate-flair" />
      </div>
    </>
  );
};

export default Article;
