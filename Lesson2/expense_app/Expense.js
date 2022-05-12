import React, { useState } from "react";
import ExpenseCreate from "./ExpenseCreate";
import ExpenseChart from "./ExpenseChart";
import ExpenseItem from "./ExpenseItem";
import expenseData from "../../data/expense_data";

const Expense = () => {
  const [data, setData] = useState(expenseData);
  const [filterYear, setFilterYear] = useState("All");
  const createExpense = (name, amount, date) => {
    const newExpense = {
      id: Date.now(),
      name: name,
      amount: amount,
      date: date,
    };
    setData([newExpense, ...data]);
  };

  const result = data.filter((item) => {
    let date = new Date(item.date);
    if (filterYear == date.getFullYear()) {
      return item;
    } else if (filterYear == "All") {
      return item;
    }
  });
  console.log(result);

  return (
    <div className="expense">
      <ExpenseCreate onCreateForm={createExpense}></ExpenseCreate>
      <div className="expense-content">
        <div className="expense-filter">
          <span>Filer by year</span>
          <select onChange={(e) => setFilterYear(e.target.value)}>
            <option>All</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </select>
        </div>
        <ExpenseChart data={result} filterYear={2022}></ExpenseChart>
        <div className="expense-list">
          {result.map((item) => (
            <ExpenseItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expense;
