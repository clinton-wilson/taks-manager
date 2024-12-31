import React, { useState } from "react";

const Task = ({ task, toggleComplete, editTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);
  
    const handleSave = () => {
      if (newText.trim()) {
        editTask(task.id, newText.trim());
        setIsEditing(false);
      }
    };
  
    return (
      <div className="flex items-center justify-between p-4 bg-gray-50 border rounded-lg mb-2 hover:shadow-md">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className="h-5 w-5 text-blue-500 focus:ring focus:ring-blue-300 mr-4"
          />
          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="border border-gray-300 rounded p-1"
            />
          ) : (
            <span
              className={`${
                task.completed ? "line-through text-gray-500" : "text-gray-800"
              } font-medium`}
            >
              {task.text} (Due: {task.dueDate})
            </span>
          )}
        </div>
        <div className="flex space-x-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
            >
              Edit
            </button>
          )}
          <button
            onClick={deleteTask}
            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default Task;