import React, { useState } from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <AddTaskForm addTask={addTask} />
      {tasks.length > 0 ? (
        tasks.map((task, index) => <Task key={index} task={task} />)
      ) : (
        <p>No tasks yet. Add one!</p>
      )}
    </div>
  );
};

export default TaskList;