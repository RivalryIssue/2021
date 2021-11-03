import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Article from "./components/Article/Article";
import Landing_Page from "./components/Landing_Page/Landing_Page";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";
import DonationGraphic from "./components/DonationGraphic";
import data from "../../template/copy.json";

window.onload = function () {
  var mountNode = document.getElementById("app");
  ReactDOM.render(<App name="Jane" />, mountNode);
};

export default function App() {
  return (
    <Router>
      <Switch>
        {data.lantern.map((d) => {
          return (
            <Route path={`/${d.value[0].value}`}>
              <Article data={d.value} school="osu" />
            </Route>
          );
        })}
        {data.michigan.map((d) => {
          return (
            <Route path={`/${d.value[0].value}`}>
              <Article data={d.value} school="um" />
            </Route>
          );
        })}
        <Route path="/">
          <Main />
          <Landing_Page data={data} />
          <DonationGraphic />
          <Tabs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
