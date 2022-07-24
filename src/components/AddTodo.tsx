import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType } from "../actions/actionTypes";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = (event: any) => {
    event.preventDefault();
    dispatch({
      type: ActionType.ADD_TODO,
      payload: { text: input, done: false },
    });
    setInput("");
  };
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
