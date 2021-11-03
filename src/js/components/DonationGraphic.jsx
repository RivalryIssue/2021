import React, { useState, useEffect } from "react";

export default function DonationGraphic() {
  const [money, setMoney] = useState({
    lantern: "",
    daily: "",
  });

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/RivalryIssue/donations-scraper/master/data.json"
    )
      .then((response) => response.json())
      .then((result) => {
        setMoney(result.data);
      });
  }, []);
  return (
    <div className="graphic-container">
      <div class="progress">
        <div class="progress__bar"></div>
      </div>
    </div>
  );
}
