import React from "react";
import "../App.css";
export default function Task({ title, content, id, onDelete }) {
  const deleteClick = () => {
    onDelete(id);
  };
  return (
    <div className="col-md-4  mb-4 my-4">
      <div className="contentDiv">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={deleteClick} className="btn btn-danger">
          SİL
        </button>
      </div>
    </div>
  );
}
