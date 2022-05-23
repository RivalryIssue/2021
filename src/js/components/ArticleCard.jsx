import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import tmdLogoBlack from "../../images/logo/tmd-logo-black.png";
import lanternLogo from "../../images/logo/lantern-logo-black.png";

const ArticleCard = ({ data }) => {
  let divClassName = "article-card";
  let school;
  let logoSrc;
  let logoAlt;
  let imgHeight;

  if (data.school === "UM") {
    divClassName = `right-${divClassName}`;
    school = "michigan-card";
    logoSrc = tmdLogoBlack;
    logoAlt = "The Michigan Daily logo";
    imgHeight = "27.19px";
  } else {
    divClassName = `left-${divClassName}`;
    school = "osu-card";
    logoSrc = lanternLogo;
    logoAlt = "The Lantern logo";
    imgHeight = "30.14px";
  }

  const ref = useRef(null);

  const [source, setSource] = useState("none");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "200px",
      threshold: 0
    }

    const callback = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const img = new Image();
        img.src = data.img;
        img.onload = () => setSource(`url(${data.img})`);
        observer.unobserve(ref.current);
      }
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }
  }, [data.img]);

  return (
    <div className="article-card-wrapper">
      <div ref={ref}
        style={{ backgroundImage: source }}
        className={`article-card ${divClassName} ${school}`}
      >
        <div className="article-text">
          <a href={data.link} className={`text-link ${school}-link`}>
            <h1 className="article-title">{data.title}</h1>
          </a>
          <div className="article-author">{data.author}</div>
          <img
            className="card-news-logo"
            width="200px"
            height={imgHeight}
            src={logoSrc}
            alt={logoAlt}
            loading="lazy"
          />
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
