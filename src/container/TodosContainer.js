import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "../compoment/todos/TodoInput";
import TodoList from "../compoment/todos/TodoList";
import TodoTemplate from "../compoment/todos/TodoTemplate";

import { useActions } from "../lib/useAction";

import {
  changeInput,
  fetchAllTodos,
  insert,
  modify,
  removetodos,
  checkedTodos,
  updateTodos,
} from "../modules/todos";

function TodosContainer() {
  //state 가져왓고
  const { todos, input, error } = useSelector(({ todoList }) => ({
    todos: todoList.todos,
    input: todoList.input,
    error: todoList.error,
  }));

  const dispatch = useDispatch();

  const [
    handleChangeInput,
    handleAdd,
    handleRemove,
    handleToggle,
    handleModify,
  ] = useActions(
    [changeInput, insert, removetodos, checkedTodos, updateTodos],
    []
  );

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  // useEffect(() => {
  //   const savedTodos = localStorage.getItem("todos");
  //   if (savedTodos) {
  //     const parsedTodos = JSON.parse(savedTodos);
  //     handleLoadTodos(parsedTodos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);ssddd

  return (
    <TodoTemplate>
      <TodoInput
        input={input}
        handleAdd={handleAdd}
        handleChangeInput={handleChangeInput}
      />
      <TodoList
        todos={todos}
        handleRemove={handleRemove}
        handleToggle={handleToggle}
        handleModify={handleModify}
      />
    </TodoTemplate>
  );
}

export default TodosContainer;
