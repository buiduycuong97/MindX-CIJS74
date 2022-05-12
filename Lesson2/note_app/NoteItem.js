import React from "react";

const NoteItem = ({ props }) => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        background: "#333",
        color: "white",
        fontSize: "20px",
        padding: "10px",
        border: "1px solid #333",
        margin: "10px",
        width: "50%",
      }}
      className="node-item"
    >
      <div style={{ textAlign: "center", width: "30%" }}>{props.field}</div>
      <div style={{ textAlign: "center", width: "40%" }}>{props.remember}</div>
      <div style={{ textAlign: "center", width: "30%" }}>{props.date}</div>
    </div>
  );
};

export default NoteItem;
