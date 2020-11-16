import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

window.onload = function () {
  var mountNode = document.getElementById("app");
  ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
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
