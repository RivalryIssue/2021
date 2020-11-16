import React from "react";
import "./LiveUpdates.css";
import { Link } from "react-scroll";
import data from "../../../../template/copy.json";

const Article = () => {
  return (
    <div className="live-article">
      <p className="text timeago">12 Hours ago</p>
      <p className="text article-header">Article headline</p>
      <p className="text">Author</p>
    </div>
  );
};

const LiveUpdates = () => {
  return (
    <div className="updates-container">
      <div className="header-box">Latest Coverage</div>
      <div className="article-box">
        {data.latest_news.articles.map((data) => {
          return (
            <div
              className="live-article"
              onClick={() => (window.location = data.link)}
            >
              <p className="text timeago">{data.date}</p>
              <p className="text article-header">{data.title}</p>
              <p className="text">{data.author}</p>
            </div>
          );
        })}
        {/* <a href="#sectionArticles">
          <strong id="moreArticles">More</strong>
        </a> */}
        <div>
          <Link
            id="moreArticles"
            to="sectionArticles"
            spy={true}
            smooth={true}
            duration={500}
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiveUpdates;
