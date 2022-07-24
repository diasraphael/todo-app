import { ActionType } from "./actionTypes";

type Delete = {
  id: string;
};

export interface AddAction {
  type: ActionType.ADD_TODO;
  payload: Todo;
}

export interface DeleteAction {
  type: ActionType.DELETE_TODO;
  payload: Delete;
}
export type InitialState = {
  todoList: Todo[];
};

export type Todo = {
  text: string;
  done: boolean;
  id: string;
};

export type Action = AddAction | DeleteAction;
