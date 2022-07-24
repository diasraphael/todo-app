import { Action, InitialState, Todo } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  todoList: [
    {
      text: "Buy milk",
      done: true,
      id: "b1e7298b-30a4-4353-a98c-4ec36ae54887",
    },
    {
      text: "Buy bread",
      done: false,
      id: "b1e7298b-30a4-4353-a98c-4ec36ae54888",
    },
  ],
};

const todoReducer = (state: InitialState = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.ADD_TODO:
      return { todoList: [payload, ...state.todoList] };
    case ActionType.DELETE_TODO:
      return {
        todoList: state.todoList.filter((todo: Todo) => todo.id !== payload.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
