import React, { useState } from "react";

function AddTodo(props: any) {
  const { todos } = props;
  const [todosList, setTodosList] = useState(todos);
  const [input, setInput] = useState("");
  const addTodo = (event: any) => {
    event.preventDefault();
    setTodosList([...todosList, { text: input, done: false }]);
    setInput("");
  };
  console.log(todosList);
  return (
    <form className="addTodo">
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button type="submit" disabled={!input} onClick={addTodo}>
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
