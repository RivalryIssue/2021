import React from "react";
import ArticleCard from "./ArticleCard";
import data from "../../../template/copy.json";

const ArticleGrid = ({ tabType }) => {
  const interleave = (a, b) => {
    let min = Math.min(a.length, b.length);
    return Array.apply(null, Array(min))
      .reduce((result, value, index) => {
        result.push(a[index], b[index]);
        return result;
      }, [])
      .concat((a.length > min ? a : b).slice(min));
  };
  const getUMData = () => {
    let results = [];
    data.michigan.map((d) => {
      let temp = {};
      temp["school"] = "UM";
      temp["title"] = d.value[0].value;
      temp["author"] = d.value[1].value;
      temp["desc"] = d.value[2].value;
      temp["date"] = d.value[3].value;
      temp["slug"] = d.value[4].value;
      results.push(temp);
    });
    return results;
  };
  const getOSUData = () => {
    let results = [];
    data.lantern.map((d) => {
      let temp = {};
      temp["school"] = "OSU";
      temp["title"] = d.value[0].value;
      temp["author"] = d.value[1].value;
      temp["desc"] = d.value[2].value;
      temp["date"] = d.value[3].value;
      temp["slug"] = d.value[4].value;
      results.push(temp);
    });
    return results;
  };
  const getAllData = () => {
    let um = getUMData();
    let osu = getOSUData();
    return interleave(um, osu);
  };
  const getData = () => {
    if (tabType === "All") {
      return getAllData();
    } else if (tabType === "UM") {
      return getUMData();
    } else {
      return getOSUData();
    }
  };
  const getSchoolIntro = () => {
    if (tabType === "UM") {
      return (
        <>
          <h1>TMD Title</h1>
          <p>Text</p>
          <br />
        </>
      );
    } else if (tabType === "OSU") {
      return (
        <>
          <h1>Lantern Title</h1>
          <p>Text</p>
          <br />
        </>
      );
    }
  };
  return (
    <div className="articleContainer">
      {getSchoolIntro()}
      {getData().map((d, i) => {
        if (i == 2) {
          return (
            <>
              <p>Donation Box Placeholder</p>
              <ArticleCard data={d} count={i} />
            </>
          );
        }
        return <ArticleCard data={d} count={i} />;
      })}
    </div>
  );
};

export default ArticleGrid;
