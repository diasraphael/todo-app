import { ActionType } from "./actionTypes";

type Id = {
  id: string;
};

export interface AddAction {
  type: ActionType.ADD_TODO;
  payload: Todo;
}

export interface DoneAction {
  type: ActionType.TODO_DONE;
  payload: Id;
}

export interface DeleteAction {
  type: ActionType.DELETE_TODO;
  payload: Id;
}
export type InitialState = {
  todoList: Todo[];
};

export type Todo = {
  text: string;
  done: boolean;
  id: string;
};

export type Action = AddAction | DeleteAction | DoneAction;
