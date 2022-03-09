import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { List } from "react-virtualized";

const TodolistDiv = styled.div`
  min-height: 320px;
  max-height: 513px;
  //스크롤바
  overflow-y: auto;
`;
// useEffect(()=>{},[])
// useEffect(()=>{},['특정값'])
// useEffect(()=>{
//   return ()=>{console.log()}
// },[])

function TodoList({
  todos,
  handleRemove,
  handleToggle,
  handleChangeInput,
  handleModify,
}) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];

      return (
        <TodoItem
          todo={todo}
          key={key}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
          handleModify={handleModify}
          handleChangeInput={handleChangeInput}
          style={style}
        />
      );
    },
    [todos, handleRemove, handleToggle, handleChangeInput]
  );

  return (
    <List
      width={512}
      height={290}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: "none" }}
    />
  );
}

export default TodoList;
