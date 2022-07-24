import { combineReducers } from "redux";
import { InitialState } from "../actions";
import todoReducer from "./todoReducer";

export type State = {
  todos: InitialState;
};

export const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
