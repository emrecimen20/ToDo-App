import React from "react";
import "../App.css";
import { useState } from "react";
export default function CreateTask({ onAdd }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskContent, setTaskContent] = useState("");

  const changeContent = (event) => {
    setTaskContent(event.target.value);
  };
  const changeTitle = (event) => {
    setTaskTitle(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onAdd(taskTitle, taskContent);
    setTaskContent("");
    setTaskTitle("");
  };

  return (
    <div className="todoDivArea">
      <form className="todoDiv">
        <input
          type="text"
          className="form-control todoText mb-3"
          name="title"
          placeholder="Title"
          value={taskTitle}
          onChange={changeTitle}
        />

        <textarea
          name="content"
          rows="3"
          placeholder="To Do"
          className="form-control todoText mb-3"
          value={taskContent}
          onChange={changeContent}
        ></textarea>

        <button onClick={onSubmit} className="btn btn-primary todoButton">
          Add
        </button>
      </form>
    </div>
  );
}
