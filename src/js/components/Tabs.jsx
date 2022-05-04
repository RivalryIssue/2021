import React, { useState } from "react";
import SchoolIntro from "./SchoolIntro";

const Tabs = () => {
  const [activeId, setActive] = useState("tab1");

  function tabClick(e) {
    setActive(e.target.id);
  }

  return (
    <div className="articleContainer">
      <br />
      <div className="mainTabs">
        <button
          className={activeId === "tab1" ? "activeTab" : undefined}
          id="tab1" type="button" onClick={tabClick}>The Michigan Daily</button>
        <button
          className={activeId === "tab2" ? "activeTab" : undefined}
          id="tab2" type="button" onClick={tabClick}>The Lantern</button>
      </div>
      <SchoolIntro tab={activeId === "tab1" ? "UM" : "OSU"} />
    </div>
  );
};

export default Tabs;
