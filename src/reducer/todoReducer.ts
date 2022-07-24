import { Action, InitialState } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  todoList: [
    { text: "Buy milk", done: true },
    { text: "Buy bread", done: false },
  ],
};

const todoReducer = (state: InitialState = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.ADD_TODO:
      return { todoList: [payload, ...state.todoList] };
    default:
      return state;
  }
};

export default todoReducer;
