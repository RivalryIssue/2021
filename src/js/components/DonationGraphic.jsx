import React, { useState, useEffect } from "react";
import tmd from "../../images/donate/tmd-donate.jpg";
import lantern from "../../images/donate/lantern-donate.jpg";

const DonationGraphic = () => {
  const [lanternMoney, setLanternMoney] = useState("");
  const [dailyMoney, setDailyMoney] = useState("");

  const updateProgressBar = (value, elt) => {
    const str = value.slice(1).replaceAll(",", "");
    // eslint-disable-next-line no-param-reassign
    value = Math.min(Number(str) / 100, 100);
    const progressbar = document.getElementById(elt);
    if (value >= 0 && value <= 100) {
      progressbar.style.width = `${value}%`;
    }
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/RivalryIssue/donations-scraper/master/data.json"
    )
      .then((response) => response.json())
      .then((result) => {
        const LanternNum = Number(
          result.data.lantern.slice(1).replaceAll(",", "")
        );
        setLanternMoney(`$${LanternNum.toLocaleString("en-US")}`);
        const DailyNum = Number(result.data.daily.slice(1).replaceAll(",", ""));
        setDailyMoney(`$${DailyNum.toLocaleString("en-US")}`);
      });
  }, []);

  useEffect(() => {
    updateProgressBar(lanternMoney, "lanternProgress");
    updateProgressBar(dailyMoney, "dailyProgress");
  }, [lanternMoney, dailyMoney]);

  return (
    <div className="graphic-container">
      <div className="donation_container">
        <h2 className="donation_title">
          <a
            className="daily"
            href="https://maizeraise.umich.edu/o/university-of-michigan/i/maizeraise/s/tmd-lantern-rivalry"
            target="_blank" rel="noreferrer"
          >
            The Michigan Daily
          </a>
        </h2>
        <div className="progress_container">
          <div className="progress">
            <div
              id="dailyProgress"
              className="progress__bar"
              style={{ backgroundColor: "#374567" }}
            />
          </div>
          <h3 className="donation_amount">{dailyMoney} of $10,000</h3>
        </div>
      </div>
      <div className="donation_container">
        <h2 className="donation_title">
          <a
            className="ohio"
            href="https://buckeyefunder.osu.edu/project/28518"
            target="_blank" rel="noreferrer"
          >
            The Lantern
          </a>
        </h2>
        <div className="progress_container">
          <div className="progress">
            <div
              id="lanternProgress"
              className="progress__bar"
              style={{ backgroundColor: "rgb(226, 2, 2)" }}
            />
          </div>
          <h3 className="donation_amount">{lanternMoney} of $10,000</h3>
        </div>
      </div>

      <div className="buttons-container">
        <div className="donation-button">
          <a
            href="https://maizeraise.umich.edu/o/university-of-michigan/i/maizeraise/s/tmd-lantern-rivalry"
            target="_blank" rel="noreferrer"
          >
            <img src={tmd} alt="The Michigan Daily logo" />
          </a>
        </div>
        <div className="donation-button">
          <a href="https://buckeyefunder.osu.edu/project/28518" target="_blank" rel="noreferrer">
            <img src={lantern} alt="The Lantern logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DonationGraphic;
