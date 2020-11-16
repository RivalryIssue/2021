import React from "react";
import pym from "pym.js";

class DataCentral extends React.Component {
  render() {
    return <div id="locationOfViz"></div>;
  }

  componentDidMount() {
    new pym.Parent(
      "locationOfViz",
      "https://magnify.michigandaily.us/coinToss/",
      {}
    );
  }
}

export default DataCentral;
