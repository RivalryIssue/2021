import React from "react";
import LargeArticle from "./LargeArticle";
import DonationBox from "../DonationBox";
import SmallArticle from "./SmallArticle";
import data from "../../../../template/copy.json";
import styled from "styled-components";
import "./Article.css";

const Header = styled.h2`
  font-size: 250%;
  font-weight: bold;
  margin-left: 2%;
`;
const LargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2rem;
`;
const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const ArticleContainer = () => {
  const renderData = (articles) => {
    let results = [];
    for (let i = 0; i < articles.length; i += 3) {
      results.push(articles.slice(i, i + 3));
    }
    return results;
  };
  return (
    <React.Fragment>
      <div className="allArticles" id="sectionArticles">
        <LargeContainer>
          <Header>Featured Articles</Header>
          <div id="parentDivLarge">
            <LargeArticle
              section={data.large_article.section}
              title={data.large_article.title}
              writer={data.large_article.author}
              timestamp={data.large_article.date}
              image={data.large_article.image}
              link={data.large_article.link}
            ></LargeArticle>
            <DonationBox></DonationBox>
          </div>
        </LargeContainer>
        {renderData(data.medium_articles.articles).map((data) => {
          return (
            <SmallContainer>
              <SmallArticle
                section={data[0].section}
                title={data[0].title}
                writer={data[0].author}
                timestamp={data[0].date}
                image={data[0].image}
                link={data[0].link}
                height="250px"
              ></SmallArticle>
              <SmallArticle
                section={data[1].section}
                title={data[1].title}
                writer={data[1].author}
                timestamp={data[1].date}
                image={data[1].image}
                link={data[1].link}
                height="250px"
              ></SmallArticle>
            </SmallContainer>
          );
        })}
        {renderData(data.small_articles.articles).map((data) => {
          return (
            <SmallContainer>
              <SmallArticle
                section={data[0].section}
                title={data[0].title}
                writer={data[0].author}
                timestamp={data[0].date}
                image={data[0].image}
                link={data[0].link}
                height="200px"
              ></SmallArticle>
              <SmallArticle
                section={data[1].section}
                title={data[1].title}
                writer={data[1].author}
                timestamp={data[1].date}
                image={data[1].image}
                link={data[1].link}
                height="200px"
              ></SmallArticle>
              <SmallArticle
                section={data[2].section}
                title={data[2].title}
                writer={data[2].author}
                timestamp={data[2].date}
                image={data[2].image}
                link={data[2].link}
                height="200px"
              ></SmallArticle>
            </SmallContainer>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ArticleContainer;
