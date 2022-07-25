import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType } from "../actions/actionTypes";
import { initialTodo } from "./TodoList";

function EditTodo(props: any) {
  const { todo, setEditedTodo } = props;
  const [input, setInput] = useState(todo.text);
  const dispatch = useDispatch();
  const editTodo = (event: any) => {
    event.preventDefault();
    if (input) {
      dispatch({
        type: ActionType.EDIT_TODO,
        payload: { ...todo, text: input },
      });
      setEditedTodo(initialTodo);
    }
    return false;
  };
  return (
    <form className="editTodo">
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button type="submit" onClick={editTodo}>
        Update
      </button>
      <button
        type="button"
        onClick={() => {
          setEditedTodo(initialTodo);
        }}
      >
        Cancel
      </button>
    </form>
  );
}

export default EditTodo;
