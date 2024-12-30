import React from "react";

const DeleteModal = ({ task, onCancel, onConfirm }) => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "5px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}>
        <p>Are you sure you want to delete the task "{task.text}"?</p>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={onCancel} style={{ marginRight: "0.5rem" }}>Cancel</button>
          <button onClick={onConfirm} style={{ backgroundColor: "red", color: "white" }}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;