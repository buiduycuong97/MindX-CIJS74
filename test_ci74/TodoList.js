import React from "react";
import { useContext } from "react";
import { useTodo } from "./todoContext";

const TodoList = () => {
  const { job, setJob, jobs, setJobs } = useTodo();
  console.log(jobs);

  return (
    <div className="todo-list-container">
      {jobs.length > 0 &&
        jobs.map((item, index1) => {
          return (
            <div
              key={index1}
              className={`todo-item-container ${item.finished ? "done" : ""}`}
            >
              <input
                defaultChecked={item.finished}
                type="checkbox"
                className="item-done-button"
                color="#9a9a9a"
                onChange={(e) => {
                  console.log(e.target.checked);

                  setJobs((prev) => {
                    return jobs.map((item2, index2) => {
                      if (index1 == index2) {
                        item2.finished = e.target.checked;
                        return item2;
                      } else {
                        return item2;
                      }
                    });
                  });
                }}
              />
              <div className="item-title">{item.name}</div>
            </div>
          );
        })}

      {/* <div className="todo-item-container">
        <input type="checkbox" className="item-done-button" color="#9a9a9a" />
        <div className="item-title">Build some websites</div>
      </div> */}
      {/* <div className="todo-item-container">
        <input type="checkbox" className="item-done-button" color="#9a9a9a" />
        <div className="item-title">Do excercises</div>
      </div>
      <div className="todo-item-container">
        <input type="checkbox" className="item-done-button" color="#9a9a9a" />
        <div className="item-title">Go shopping</div>
      </div>
      <div className="todo-item-container done">
        <input type="checkbox" color="#9a9a9a" className="item-done-button" />
        <div className="item-title">House cleaning</div>
      </div> */}
    </div>
  );
};

export default TodoList;
