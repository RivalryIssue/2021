import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="top-bar">
      <ul className="social-icons">
        <li>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://therivalrygame.com/"
            className="social-icon"
          >
            {" "}
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/intent/tweet?url=https://therivalrygame.com/"
            className="social-icon"
          >
            {" "}
            <i className="fa fa-twitter" />
          </a>
        </li>
      </ul>
    </div>
    <div className="left-footer">
      <p>The</p>
      <p>Rivalry</p>
      <span>2020</span>
    </div>
    <div className="credits">
      <h2>Donate</h2>
      <a
        href="https://give.communityfunded.com/o/university-of-michigan/i/giving-tuesday/s/tmd-lantern-rivalry"
        target="_blank"
        className="tlink" rel="noreferrer"
      >
        The Michigan Daily
      </a>
      <a
        href="https://buckeyefunder.osu.edu/project/21918"
        target="_blank"
        className="tlink" rel="noreferrer"
      >
        <p>The Lantern</p>
      </a>
    </div>
  </div>
);

export default Footer;
