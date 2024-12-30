import React from "react";

const Task = ({ task }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "0.5rem", marginBottom: "0.5rem" }}>
      <p>{task}</p>
    </div>
  );
};

export default Task;