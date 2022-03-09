import { createAction, handleActions } from "redux-actions";
import craeteRequestThunk, {
  createActionType,
} from "../lib/craeteRequestThunk";
import {
  fetchAll,
  insertTodo,
  removeTodo,
  checkedTodo,
  updateTodo,
} from "../lib/apis/todos";

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";
const MODIFY = "todos/MODIFY";
const LOAD_TODOS = "todos/LOAD_TODOS";

const FETCH_ALL = "todos/FETCH_ALL";
const FETCH_ALL_SUCCESS = "todos/FETCH_ALL_SUCCESS";
const FETCH_ALL_FAILURE = "todos/FETCH_ALL_FAILURE";

const [INSERT_TODO, INSERT_TODO_SUCCESS, INSERT_TODO_FAILURE] =
  createActionType("todos/INSERT_TODO");

const [REMOVE_TODO, REMOVE_TODO_SUCCESS, REMOVE_TODO_FAILURE] =
  createActionType("todos/REMOVE_TODO");

const [CHECEKED_TODO, CHECEKED_TODO_SUCCESS, CHECEKED_TODO_FAILURE] =
  createActionType("todos/CHECEKED_TODO");

const [UPDATE_TODO, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE] =
  createActionType("todos/UPDATE_TODO");

//(dispath(changeInput(매개변수)))  (매개변수를) => reduec 에 건내준다.
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

export const insert = craeteRequestThunk(INSERT_TODO, insertTodo);

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = craeteRequestThunk(REMOVE_TODO, (id) => id);

export const modify = createAction(MODIFY, (id, text) => ({ id, text }));
export const loadTodos = createAction(LOAD_TODOS, (todos) => todos);

export const fetchAllTodos = craeteRequestThunk(FETCH_ALL, fetchAll);
export const removetodos = craeteRequestThunk(REMOVE_TODO, removeTodo);
export const checkedTodos = craeteRequestThunk(CHECEKED_TODO, checkedTodo);
export const updateTodos = craeteRequestThunk(UPDATE_TODO, updateTodo);

// state : todos
//이 state를 setTodos 할거다 이것을 Reducer가 해준다  Reducer : state의 변화를 주는것
//액션생성함수가 하는일은 받았던 매겨변수를 reducer한테 준다.
//reducer는 그걸 받아서, state에 변화를 주는 용도로 활용한다.

const init = {
  todos: [],
  input: "",
  error: null,
};

const todoList = handleActions(
  {
    [INSERT_TODO_SUCCESS]: (state, { payload: todos }) => ({
      ...state,
      todos,
      error: null,
    }),

    [FETCH_ALL_SUCCESS]: (state, { payload: todos }) => ({
      ...state,
      todos,
      error: null,
    }),
    [FETCH_ALL_FAILURE]: (state, { payload: todos }) => ({
      ...state,
      todos,
      error: null,
    }),

    //이게 지금 비어져있다는 것인데..크흠..

    [REMOVE_TODO_SUCCESS]: (state, { payload: todos }) => ({
      ...state,
      todos,
    }),
    [REMOVE_TODO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),

    [CHECEKED_TODO_SUCCESS]: (state, { payload: todos }) => ({
      ...state,
      todos,
    }),
    [CHECEKED_TODO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),

    [UPDATE_TODO_SUCCESS]: (state, { payload: todos }) => ({
      ...state,
      todos,
    }),
    [UPDATE_TODO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),

    //ddd

    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),

    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [MODIFY]: (state, { payload: { id, text } }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      ),
    }),
    [LOAD_TODOS]: (state, { payload: todos }) => ({
      ...state,
      todos,
    }),
  },

  init
);

export default todoList;
