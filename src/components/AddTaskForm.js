import React, { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "0.5rem", width: "80%", marginRight: "0.5rem" }}
      />
      <button type="submit" style={{ padding: "0.5rem" }}>
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;