import { combineReducers } from "redux";
import counter from "./counter";
import todoList from "./todos";

import loading from "./loading";

const rootReducer = combineReducers({ counter, todoList, loading });

export default rootReducer;
