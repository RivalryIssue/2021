import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Article from "./components/Article";
import ArticleCard from "./components/ArticleCard";
import data from "../../template/copy.json";

window.onload = function () {
  var mountNode = document.getElementById("app");
  ReactDOM.render(<App name="Jane" />, mountNode);
};

export default function App() {
  let article_card_props = {
    article: data.michigan[0].value,
    type: 0, // 0: michigan, 1: lantern
    num: 0, // number of article
  };
  return (
    <Router>
      <Switch>
        <Route path="/article">
          <Article data={data.michigan[0].value} />
        </Route>
        <Route path="/">
          <Main />
          <ArticleCard data={article_card_props} />
        </Route>
      </Switch>
    </Router>
  );
}
