import React from "react";
import pym from "pym.js";

class DataCentral2 extends React.Component {
  render() {
    return <div id="locationOfViz2"></div>;
  }

  componentDidMount() {
    new pym.Parent(
      "locationOfViz2",
      "https://magnify.michigandaily.us/election_mail_map/",
      {}
    );
  }
}

export default DataCentral2;
