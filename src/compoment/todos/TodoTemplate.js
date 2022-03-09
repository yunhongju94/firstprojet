import React from "react";
import styled from "styled-components";

const TDT = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;

  border-radius: 4px;

  overflow: hidden;
  background-color: #fffae7;
  border: 4px solid #dee2e6;

  .title {
    font-weight: 800;
    color: #7289f7;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fffae7;
  }
  .content {
  }
`;

function TodoTemplate({ children }) {
  return (
    <TDT>
      <div className="title">Todo List </div>
      <div className="content">{children}</div>
    </TDT>
  );
}

export default TodoTemplate;
