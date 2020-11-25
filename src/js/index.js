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
    img:
      "https://www.michigandaily.com/sites/default/files/styles/large/public/201124/ace.FBC_.Rutgers.11.21.20.00918..jpg?itok=fXkqzybl", //url to background image
    link:
      "https://www.michigandaily.com/section/football/cade-mcnamara-set-start-quarterback-saturday-according-his-teammates", //article link
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
