import React from "react";
import AddTodo from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

import "./styles.scss";

export default function App() {
  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList />
      <AddTodo />
    </div>
  );
}
