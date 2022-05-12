import React, { useState } from "react";
import "./ExpenseCreate.css";
const ExpenseCreate = ({ onCreateForm }) => {
  const [editable, setEditable] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleCreateExpense = (e) => {
    e.preventDefault();
    if (!newName || !newAmount || !newDate) {
      alert("please input all");
      return;
    }
    onCreateForm(newName, newAmount, newDate);
    e.target.reset();
    setEditable(false);
  };

  return (
    <div>
      <div className="expense-create">
        {!editable ? (
          <button className="btn_add" onClick={() => setEditable(true)}>
            ADD NEW EXPENSE
          </button>
        ) : (
          <form onSubmit={handleCreateExpense}>
            <div>
              <label>Name</label>
              <input type="text" onChange={(e) => setNewName(e.target.value)} />
            </div>
            <div>
              <label>Amount</label>
              <input
                type="number"
                onChange={(e) => setNewAmount(e.target.value)}
              />
            </div>
            <div>
              <label>Date</label>
              <input type="date" onChange={(e) => setNewDate(e.target.value)} />
            </div>
            <div>
              <button type="submit">Add</button>
              <button type="button" onClick={() => setEditable(false)}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ExpenseCreate;
