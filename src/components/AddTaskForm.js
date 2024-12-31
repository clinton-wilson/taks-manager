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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-4 mt-4 bg-gray-50 p-4 rounded-md shadow-sm"
    >
      <input
        type="text"
        placeholder="Task description"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;