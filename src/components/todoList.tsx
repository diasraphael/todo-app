import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "../actions";
import { State } from "../reducer";

export const TodoList = () => {
  const todos = useSelector((state: State) => state.todos.todoList);
  return (
    <ul className="todoList">
      {todos.map((item: Todo, i: number) => (
        <li key={i}>
          <span data-testid={`todo${i}`}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};
