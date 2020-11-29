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

  return (
    <div className="articleContainer">
      <p>Text for Introduction</p>
      <p>{tabType}</p>
      {getAllData().map((d, i) => {
        return <ArticleCard data={d} count={i} />;
      })}
    </div>
  );
};

export default ArticleGrid;
