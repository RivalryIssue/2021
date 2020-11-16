import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

var Scroll = require("react-scroll");
var scroller = Scroll.scroller;

window.onload = function () {
  var mountNode = document.getElementById("app");
  ReactDOM.render(<HelloMessage name="Jane" />, mountNode);

  if (window.location.hash) {
    if (window.location.hash.substring(1) === "data") {
      scroller.scrollTo("scrollToInteractives", {
        duration: 1500,
        smooth: true,
        delay: 200,
      });
    }
  }
};

class HelloMessage extends React.Component {
  render() {
    return (
      <>
        <Main />
      </>
    );
  }
}
