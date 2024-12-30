import React, { useState } from "react";

const Task = ({ task, toggleComplete, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, newText.trim());
    setIsEditing(false);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "0.5rem", marginBottom: "0.5rem" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            style={{ marginRight: "0.5rem" }}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginRight: "0.5rem",
            }}
          >
            {task.text}
          </span>
          <button onClick={handleEdit} style={{ marginRight: "0.5rem" }}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;