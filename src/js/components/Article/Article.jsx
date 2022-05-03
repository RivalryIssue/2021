import React from "react";
import "./Article.css";
import { Helmet } from "react-helmet";
import tmd from "../../../images/tmd-logo-black.png";
import lantern from "../../../images/lanternLogo.png";

const Article = ({ data, school }) => {
  let img =
    "https://images.rivals.com/image/upload/f_auto,q_auto/xyl1hw5axp8ndhsuwkt3";
  data.forEach((e) => {
    if (e.type === "img") {
      img = e.value;
    }
  });
  function returnHome(e) {
    e.preventDefault();
    window.location.href = "http://therivalrygame.com";
  }
  function getData(data) {
    if (data.type === "text") {
      return (
        <p
          className="article-paragraph"
          dangerouslySetInnerHTML={{ __html: data.value }}
         />
      );
    } if (data.type === "title") {
      return (
        <>
          <h1 className="article-title">{data.value}</h1>
          <Helmet>
            <title>Rivalry: {data.value}</title>
            <meta property="og:title" content={`Rivalry: ${data.value}`} />
          </Helmet>
        </>
      );
    } if (data.type === "author") {
      return (
        <>
          <h1 className="article-author">{data.value}</h1>
          <a
            href={
              school === "osu"
                ? "https://thelantern.com"
                : "https://michigandaily.com"
            }
            target="_blank" rel="noreferrer"
          >
            <img
              className="logo-news-image"
              src={school === "osu" ? lantern : tmd}
            />
          </a>
        </>
      );
    } if (data.type === "description") {
      return (
        <Helmet>
          <meta property="og:description" content={data.value} />
          <meta name="description" content={data.value} />
        </Helmet>
      );
    } if (data.type === "img") {
      return (
        <Helmet>
          <meta property="og:image" content={data.value} />
        </Helmet>
      );
    } if (data.type === "slug") {
      return (
        <Helmet>
          <meta
            property="og:url"
            content={`https://therivalrygame.com/${data.value}`}
          />
        </Helmet>
      );
    }
  }
  return (
    <>
      <div className="article-landing-page">
        <img className="article-image" src={img} />
        <div className="return-button">
          <button className="home-button menu-button" onClick={returnHome} type="button">
            Home
          </button>
        </div>
      </div>
      <div className="article-container">
        {/* Check out ../../css/base.scss for base styling! */}
        {data.map((data) => getData(data))}
      </div>
      <button className="home-button" onClick={returnHome} type="button">
        Return Home
      </button>
    </>
  );
};

export default Article;
