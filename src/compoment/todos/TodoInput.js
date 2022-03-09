import React, { useRef, useState } from "react";
import styled from "styled-components";

const Todoform = styled.form`
  display: flex;
  background: #495057;

  input {
    background: #b4bbdd;
    outline: none;
    border: 2px solid #dee2e6;
    font-weight: 600;

    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;

    flex: 1;

    &::placeholder {
      color: #dee2e6;
    }
  }
  button {
    background: none;
    outline: none;
    border: 2px solid #dee2e6;

    background-color: #b4bbdd;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;

    cursor: pointer;
    &:hover {
      background: #adb5bd;
    }
    transition: 0.1s background eas;
  }
`;

function TodoInput({ input, handleAdd, handleChangeInput }) {
  const nextId = useRef(1);

  return (
    //온 서브및
    <Todoform
      onSubmit={(e) => {
        e.preventDefault();
        if (input === "") {
          return;
        }
        handleAdd(input);
        handleChangeInput("");
      }}
    >
      <input
        placeholder="input your todo"
        value={input}
        onChange={(e) => handleChangeInput(e.target.value)}
      />
      <button type="submit">+</button>
    </Todoform>
  );
}

export default TodoInput;
