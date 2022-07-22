import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import { TodoList } from "./components/todoList";

import "./styles.scss";

export default function App() {
  const [todos] = useState([
    { text: "Buy milk", done: true },
    { text: "Buy bread", done: false },
  ]);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList todos={todos} />
      <AddTodo todos={todos}></AddTodo>
    </div>
  );
}
