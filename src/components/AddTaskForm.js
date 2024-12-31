import React, { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim() || !dueDate) return; // Prevent empty tasks or missing dates

    addTask({
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
      dueDate, // Add the due date
    });

    setTaskText("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task description"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "60%" }}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      />
      <button type="submit" style={{ padding: "0.5rem" }}>
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;