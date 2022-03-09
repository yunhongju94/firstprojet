import React from "react";
import styled, { css } from "styled-components";

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비지니스" },
  { name: "entertainment", text: "연예" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.5rem;

  &:hover {
    color: #495057;
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid black; ;
    `}

  & + & {
    margin-left: 1rem;
  }
`;

function Categories({ category, handleSelect }) {
  return (
    <div>
      <CategoriesBlock>
        {categories.map((c) => (
          <Category
            key={c.name}
            onClick={() => handleSelect(c.name)}
            active={category === c.name}
          >
            {c.text}
          </Category>
        ))}
      </CategoriesBlock>
    </div>
  );
}

export default Categories;
