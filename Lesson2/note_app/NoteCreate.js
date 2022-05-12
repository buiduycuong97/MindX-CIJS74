import React, { useState } from "react";

const NoteCreate = ({ onCreat }) => {
  const [isAdding, setIsAdding] = useState(true);
  const [field, setFiled] = useState("");
  const [remember, setRemember] = useState("");
  const [date, setDate] = useState("");

  const handleCreat = (e) => {
    if (!field || !remember || !date) {
      e.preventDefault();
      alert("K duoc de trong");
      return;
    } else {
      onCreat(field, remember, date);
      e.target.reset();
      setIsAdding(!isAdding);
    }
  };
  return (
    <div className="note-create">
      {isAdding && (
        <button onClick={() => setIsAdding(!isAdding)}>Add new note</button>
      )}
      {!isAdding && (
        <form
          style={{
            width: "50%",
            background: "white",
            color: "black",
            fontSize: "15px",
            padding: "10px",
            border: "1px solid #333",
            margin: "10px",
          }}
          onSubmit={handleCreat}
        >
          <div style={{ display: "flex", margin: "2px", padding: "5px" }}>
            <label style={{ width: "20%" }}>Field : </label>
            <input
              style={{ width: "80%", padding: "5px" }}
              type="text"
              onChange={(e) => setFiled(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", margin: "2px", padding: "5px" }}>
            <label style={{ width: "20%" }}>Remember : </label>
            <input
              style={{ width: "80%", padding: "5px" }}
              type="text"
              onChange={(e) => setRemember(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", margin: "2px", padding: "5px" }}>
            <label style={{ width: "20%" }}>Date : </label>
            <input
              style={{ width: "80%", padding: "5px" }}
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsAdding(!isAdding)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default NoteCreate;
