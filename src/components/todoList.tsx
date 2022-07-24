import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "../actions";
import { State } from "../reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faSquareCheck,
  faPenSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { ActionType } from "../actions/actionTypes";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: State) => state.todos.todoList);
  return (
    <ul className="todoList">
      {todos.map((item: Todo, i: number) => (
        <div key={i} className="flex">
          <li>
            <span data-testid={`todo${i}`}>{item.text}</span>
          </li>
          <h1>
            <FontAwesomeIcon
              icon={faTrashCan}
              color="red"
              title="Delete"
              onClick={() => {
                dispatch({
                  type: ActionType.DELETE_TODO,
                  payload: { id: item.id },
                });
              }}
            />
          </h1>
          {!item.done && (
            <h1>
              <FontAwesomeIcon
                icon={faSquareCheck}
                color="green"
                title="Done"
                onClick={() => {
                  dispatch({
                    type: ActionType.TODO_DONE,
                    payload: { id: item.id },
                  });
                }}
              />
            </h1>
          )}
          {!item.done && (
            <h1>
              <FontAwesomeIcon
                icon={faPenSquare}
                color="#00a8f0"
                title="Edit"
                onClick={() => {}}
              />
            </h1>
          )}
        </div>
      ))}
    </ul>
  );
};
