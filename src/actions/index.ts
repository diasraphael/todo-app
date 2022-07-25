import { ActionType } from "./actionTypes";

export interface AddAction {
  type: ActionType.ADD_TODO;
  payload: Todo;
}

export interface EditAction {
  type: ActionType.EDIT_TODO;
  payload: Todo;
}

export interface DoneAction {
  type: ActionType.TODO_DONE;
  payload: Todo;
}

export interface DeleteAction {
  type: ActionType.DELETE_TODO;
  payload: Todo;
}
export type InitialState = {
  todoList: Todo[];
};

export type Todo = {
  text?: string;
  done?: boolean;
  id: string;
};

export type Action = AddAction | DeleteAction | DoneAction | EditAction;
