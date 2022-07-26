import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType } from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const notify = () => {
    toast.success("Todo added successfully", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  const addTodo = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    dispatch({
      type: ActionType.ADD_TODO,
      payload: { text: input, done: false, id: uuidv4() },
    });
    setInput("");
    notify();
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
