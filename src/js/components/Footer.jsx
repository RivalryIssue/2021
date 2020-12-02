import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-bar">
        <ul class="social-icons">
          <li>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://therivalrygame.com/"
              class="social-icon"
            >
              {" "}
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/intent/tweet?url=https://therivalrygame.com/"
              class="social-icon"
            >
              {" "}
              <i class="fa fa-twitter"></i>
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
          className="tlink"
        >
          The Michigan Daily
        </a>
        <a
          href="https://buckeyefunder.osu.edu/project/21918"
          target="_blank"
          className="tlink"
        >
          <p>The Lantern</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
