import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useTodo } from "./todoContext";

const TodoList = () => {
  const { job, setJob, jobs, setJobs } = useTodo();
  const [data, setData] = useState(jobs);
  useEffect(() => {
    setData(jobs);
  }, [jobs]);

  return (
    <div
      className="todo-list-container"
      
    >
      {data.length > 0 &&
        data.map((item, index1) => {
          return (
            <div
              key={index1}
              className={`todo-item-container ${item.finished ? "done" : ""}`}
            >
              <input
                checked={item.finished}
                type="checkbox"
                className="item-done-button"
                color="#9a9a9a"
                onChange={(e) => {
                  const updateJobs = jobs.map((item2, index2) => {
                    if (item.name === item2.name) {
                      item2.finished = e.target.checked;
                      return item2;
                    } else {
                      return item2;
                    }
                  });
                  localStorage.setItem("jobs", JSON.stringify(updateJobs));
                  setJobs(updateJobs);
                }}
              />
              <div className="item-title">{item.name}</div>
              <div style={{ marginLeft: "auto" }}>{item.date} days</div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
