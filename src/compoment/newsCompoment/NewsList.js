import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

//title
//description
//url
//urlToimage

const NewsBlck = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function NewsList({ category }) {
  const [articles, setArticles] = useState(null);
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    async function getNews() {
      setLoding(true);

      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=311a600ae8d8474c9a31511ac2216e5f`
        );
        setArticles(res.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoding(false);
    }
    getNews();
  }, [category]);

  if (loding)
    return (
      <NewsBlck>
        <AiOutlineLoading className="App-logo" />
      </NewsBlck>
    );
  if (!articles) return null;

  return (
    <NewsBlck>
      {articles &&
        articles.map((articles) => (
          <NewsItem key={articles.url} articles={articles} />
        ))}
    </NewsBlck>
  );
}

export default NewsList;
