import React, { useState, useEffect } from "react";
import tmd from "../../images/tmd-donate.jpg";
import lantern from "../../images/lantern-donate.jpg";

export default function DonationGraphic() {
  const [lanternMoney, setLanternMoney] = useState("");
  const [dailyMoney, setDailyMoney] = useState("");

  const updateProgressBar = (value, elt) => {
    let str = value.slice(1).replaceAll(",", "");
    value = Number(str) / 100;
    let progressbar = document.getElementById(elt);
    value = Math.min(value, 100);
    if (value >= 0 && value <= 100) {
      progressbar.style.width = value + "%";
    }
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/RivalryIssue/donations-scraper/master/data.json"
    )
      .then((response) => response.json())
      .then((result) => {
        let LanternNum = Number(
          result.data.lantern.slice(1).replaceAll(",", "")
        );
        setLanternMoney("$" + LanternNum.toLocaleString("en-US"));
        let DailyNum = Number(result.data.daily.slice(1).replaceAll(",", ""));
        setDailyMoney("$" + DailyNum.toLocaleString("en-US"));
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
            target="_blank"
          >
            The Michigan Daily >
          </a>
        </h2>
        <div className="progress_container">
          <div className="progress">
            <div
              id="dailyProgress"
              className="progress__bar"
              style={{ backgroundColor: "#374567" }}
            ></div>
          </div>
          <h4 className="donation_amount">{dailyMoney} of $10,000</h4>
        </div>
      </div>
      <div className="donation_container">
        <h2 className="donation_title">
          <a
            className="ohio"
            href="https://buckeyefunder.osu.edu/project/28518"
            target="_blank"
          >
            The Lantern >
          </a>
        </h2>
        <div className="progress_container">
          <div className="progress">
            <div id="lanternProgress" className="progress__bar"></div>
          </div>
          <h4 className="donation_amount">{lanternMoney} of $10,000</h4>
        </div>
      </div>

      <div className="buttons-container">
        <div className="donation-button">
          <a
            href="https://maizeraise.umich.edu/o/university-of-michigan/i/maizeraise/s/tmd-lantern-rivalry"
            target="_blank"
          >
            <img src={tmd} />
          </a>
        </div>
        <div className="donation-button">
          <a href="https://buckeyefunder.osu.edu/project/28518" target="_blank">
            <img src={lantern} />
          </a>
        </div>
      </div>
    </div>
  );
}
