import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ActionType } from "../actions/actionTypes";
import { initialTodo } from "./TodoList";

function EditTodo(props: any) {
  const { todo, setEditedTodo } = props;
  const [input, setInput] = useState(todo.text);
  const dispatch = useDispatch();
  const notify = () => {
    toast.success("Todo edited successfully", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  const failureNotify = () => {
    toast.warning("Todo cannot be empty", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  const editTodo = (event: any) => {
    event.preventDefault();
    if (input) {
      dispatch({
        type: ActionType.EDIT_TODO,
        payload: { ...todo, text: input },
      });
      setEditedTodo(initialTodo);
      notify();
    } else {
      failureNotify();
    }
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
