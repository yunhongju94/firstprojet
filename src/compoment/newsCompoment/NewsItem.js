import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .thumbNail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 160px;
      object-fit: cover;
    }
    a {
      color: black;
      text-decoration: none;
    }
  }

  .content {
    h2 {
      margin: 0;
    }
    a {
      color: black;
      text-decoration: none;
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      size: 0.9rem;
    }
  }

  & + & {
    margin-top: 2rem;
  }
`;

function NewsItem({ articles }) {
  const { title, description, url, urlToImage } = articles;
  return (
    <NewsItemBlock>
      <div className="thumbNail">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={urlToImage} alt="thumbNail" />
        </a>
      </div>
      <div className="content">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
}

export default NewsItem;
