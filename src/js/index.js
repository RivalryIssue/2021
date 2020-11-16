import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Article from "./components/Article";
import data from "../../template/copy.json"

window.onload = function () {
  var mountNode = document.getElementById("app");
  ReactDOM.render(<App name="Jane" />, mountNode);
};

export default function App(){
  return(
    <Router>
          <Switch>
            <Route path="/article">
              <Article data={data.michigan[0].value}/>
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
    </Router>
  )
}
