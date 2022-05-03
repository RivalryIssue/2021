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
      <ul className="mainTabs">
        <li
          id="tab1"
          className={activeId === "tab1" ? "activeTab" : undefined}
          onClick={tabClick}
        >
          The Michigan Daily
        </li>
        <li
          id="tab2"
          className={activeId === "tab2" ? "activeTab" : undefined}
          onClick={tabClick}
        >
          The Lantern
        </li>
      </ul>
      {activeId === "tab1" ? (
        <SchoolIntro tabType="UM" />
      ) : (
        <SchoolIntro tabType="OSU" />
      )}
    </div>
  );
};

export default Tabs;
