import React, { useState, useEffect } from "react";

export default function DonationGraphic() {
  const [money, setMoney] = useState({
    lantern: "",
    daily: "",
  });

  const updateProgressBar = (value) => {
    console.log(value);
    let progressbar = document.getElementById("download");
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
        setMoney(result.data);
      });
    setTimeout(() => updateProgressBar(70), 2000);
  }, []);

  return (
    <div className="graphic-container">
      <div class="progress">
        <div id="download" className="progress__bar"></div>
      </div>
    </div>
  );
}
