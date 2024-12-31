import React, { useState, useEffect } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";
import DeleteModal from "./DeleteModal";
import { signOut } from "firebase/auth";
import { auth } from "./firebase"; // Import your Firebase auth instance

const TaskList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Firebase signOut method
      setUser(null); // Clear the user state after signing out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center">Task Manager</h1>
        <SignupForm setUser={setUser} />
        <p className="text-center">or</p>
        <LoginForm setUser={setUser} />
      </div>
    );
  }

  const addTask = (task) => setTasks([...tasks, task]);

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const openModal = (task) => {
    setIsModalOpen(true);
    setTaskToDelete(task);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  const confirmDelete = () => {
    deleteTask(taskToDelete.id);
    closeModal();
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "active") return !task.completed;
      return true;
    })
    .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-center">Welcome, {user.email}</h1>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            Sign Out
          </button>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md ${
                filter === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`px-4 py-2 rounded-md ${
                filter === "active"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-md ${
                filter === "completed"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Completed
            </button>
          </div>
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              editTask={editTask}
              deleteTask={() => openModal(task)}
            />
          ))}
          <AddTaskForm addTask={addTask} />
          {isModalOpen && (
            <DeleteModal
              task={taskToDelete}
              onCancel={closeModal}
              onConfirm={confirmDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;