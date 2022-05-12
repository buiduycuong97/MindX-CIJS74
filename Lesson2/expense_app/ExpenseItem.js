import React from "react";

const ExpenseItem = ({ name, amount, date }) => {
  return (
    <div
      style={{ border: "1px solid black", margin: "10px" }}
      className="expense-item"
    >
      <div className="expense-date">{date}</div>
      <div className="expense-name">{name}</div>
      <div className="expense-amount">$ {amount}</div>
    </div>
  );
};

export default ExpenseItem;
