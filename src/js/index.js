import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Article from "./components/Article/Article";
import ArticleCard from "./components/ArticleCard";
import data from "../../template/copy.json";

window.onload = function () {
  var mountNode = document.getElementById("app");
  ReactDOM.render(<App name="Jane" />, mountNode);
};

export default function App() {
  let article_card_num = 0;
  let article_card_props = {
    article: data.michigan[0].value,
    type: 0, // 0: michigan, 1: lantern
    num: article_card_num, // number of article. also determines img path
    link:
      "https://www.michigandaily.com/section/football/cade-mcnamara-set-start-quarterback-saturday-according-his-teammates", //article link
  };

  article_card_num++;
  let article_card_props_2 = {
    // once data, should create these with a loop and number separately for mich vs osu
    article: data.lantern[0].value,
    type: 1,
    num: 1,
    link:
      "https://www.thelantern.com/2020/11/football-ohio-state-pass-rush-strives-to-increase-sack-production-as-season-wears-on/",
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
          <ArticleCard data={article_card_props_2} />
        </Route>
      </Switch>
    </Router>
  );
}
