import React, { useState, useEffect } from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";
import DeleteModal from "./DeleteModal";
  
  const TaskList = () => {
    const [tasks, setTasks] = useState(() => {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    });
  
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = (task) => {
      setTasks([...tasks, task]);
    };
  
    const toggleComplete = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    const editTask = (id, newText) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newText } : task
        )
      );
    };
  
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
      closeModal();
    };
  
    const openModal = (task) => {
      setIsModalOpen(true);
      setTaskToDelete(task);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setTaskToDelete(null);
    };
  
    const filteredTasks = tasks
      .filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "active") return !task.completed;
        return true;
      })
      .filter((task) => {
        return task.text.toLowerCase().includes(search.toLowerCase());
      })
      .sort((a, b) => a.text.localeCompare(b.text));
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "0.5rem", marginBottom: "1rem", width: "100%" }}
        />
        <div style={{ marginBottom: "1rem" }}>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              editTask={editTask}
              deleteTask={() => openModal(task)} // Open modal when clicking delete
            />
          ))
        ) : (
          <p>No tasks to display!</p>
        )}
        <div style={{ padding: "1rem" }}>

            <div style={{ padding: "1rem" }}>
        <AddTaskForm addTask={addTask} />
      </div>
        </div>
        {isModalOpen && (
          <DeleteModal
            task={taskToDelete}
            onCancel={closeModal}
            onConfirm={() => deleteTask(taskToDelete.id)}
          />
        )}
      </div>
    );
  };
  
  export default TaskList;