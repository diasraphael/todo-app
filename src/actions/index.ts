import { ActionType } from "./actionTypes";

export interface AddAction {
  type: ActionType.ADD_TODO;
  payload: {};
}
export type InitialState = {
  todoList: Todo[];
};

export type Todo = {
  text: string;
  done: boolean;
};

export type Action = AddAction;
