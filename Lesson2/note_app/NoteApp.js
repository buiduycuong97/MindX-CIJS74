import React, { useState } from "react";
import NoteItem from "./NoteItem";
import noteData from "./NoteData";
import NoteCreate from "./NoteCreate";

const NoteApp = () => {
  const [data, setData] = useState(noteData);
  const [filterField, setFilterField] = useState("");
  const [filterYear, setFilterYear] = useState("All");

  const addNewNote = (field, remember, date) => {
    const newItem = {
      id: Date.now(),
      field: field,
      remember: remember,
      date: date,
    };
    setData([newItem, ...data]);
  };

  let result = data.filter((item) => {
    let date = new Date(item.date);
    if (filterYear == date.getFullYear()) return item;
    else if (filterYear === "All") {
      return item;
    }
    //    return filterYear == date.getFullYear();
  });

  return (
    <div className="note-app">
      <NoteCreate onCreat={addNewNote}></NoteCreate>
      <div className="note-list">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            boxSizing: "border-box",
            padding: "10px",
            margin: "10px",
          }}
          className="note-filter"
        >
          <div className="note-filter-field">
            <label>Field </label>
            <select onChange={(e) => setFilterYear(e.target.value)}>
              <option selected>All</option>
              <option>Xa hoi</option>
              <option>Cam xuc</option>
              <option>Giao tiep</option>
              <option>Quan he</option>
              <option>Cong viec</option>
            </select>
          </div>
          <div className="note-filter-date">
            <label>Year </label>
            <select onChange={(e) => setFilterYear(e.target.value)}>
              <option selected>All</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </div>
        </div>
        {result.map((item) => (
          <NoteItem key={item.id} props={item}></NoteItem>
        ))}
      </div>
    </div>
  );
};

export default NoteApp;
