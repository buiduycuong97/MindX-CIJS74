import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const TodoContext = createContext(null);
function TodoProvider(props) {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJob = JSON.parse(localStorage.getItem("jobs"));
    if (storageJob) {
      return storageJob;
    } else {
      return [];
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobs((prev) => {
      const newJobs = [
        ...prev,
        { name: job, finished: false, id: Math.floor(Math.random() * 10000) },
      ];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  const handleFilter = (checked) => {
    if (checked === false) {
      setJobs(JSON.parse(localStorage.getItem("jobs")));
    } else {
      console.log(checked);

      setJobs(jobs.filter((item) => item.finished === !checked));
    }
  };

  //   useEffect(() => {
  //     const updateJobs = [...jobs];
  //     localStorage.setItem("jobs", JSON.stringify(updateJobs));
  //   }, [jobs]);
  const value = { jobs, setJobs, job, setJob, handleSubmit, handleFilter };
  return <TodoContext.Provider value={value} {...props}></TodoContext.Provider>;
}

function useTodo(props) {
  const context = useContext(TodoContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within a TodoProvider");
  }
  return context;
}

export { useTodo, TodoProvider };
