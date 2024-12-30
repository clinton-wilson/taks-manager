import React, { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return; // Prevent adding empty tasks

    addTask({
      id: Date.now(), // Unique identifier for the task
      text: taskText.trim(), // Task text
      completed: false, // Initial completion status
    });

    setTaskText(""); // Clear the input field after adding the task
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "0.5rem", width: "70%" }}
      />
      <button type="submit" style={{ padding: "0.5rem" }}>
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;