import React from "react";

const Article = ({data}) => {
  function getData(data){
    if(data.type === "text"){
        return <p className="articleParagraph" dangerouslySetInnerHTML={ { __html: data.value } }></p>
    } else if(data.type === "title") {
        return <h1 className="articleTitle">{data.value}</h1>
    } else if(data.type === "author") {
        return <p>{data.value}</p>
    }
  }
  return (
    <div>
        <p className="initTest">Welcome! Article!</p>
        {/* Check out ../../css/base.scss for base styling! */}
        {data.map((data) => {
            return(
                getData(data)
            )
        })}
    </div>
  );
};

export default Article;
