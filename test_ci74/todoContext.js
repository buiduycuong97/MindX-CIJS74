import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const TodoContext = createContext(null);
function TodoProvider(props) {
  const language = {
    vi: {
      task: "Nhiệm vụ còn lại của bạn : ",
      unfinished: "Chưa hoàn thành",
      submit: "Gửi đi",
      reset: "Tạo mới",
    },
    en: {
      task: "Your task left : ",
      unfinished: "Unfinished",
      submit: "Submit",
      reset: "Reset",
    },
  };
  const [changeLanguage, setChangeLanguage] = useState("en");

  const [job, setJob] = useState("");
  const [jobsLocal, setJobsLocal] = useState(() => {
    const storageJob = JSON.parse(localStorage.getItem("jobs"));
    if (storageJob) {
      return storageJob;
    } else {
      return [];
    }
  });
  //   console.log(jobsLocal);
  const [jobs, setJobs] = useState(jobsLocal);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJobs = [
      ...jobsLocal,
      {
        name: job,
        finished: false,
        id: Math.floor(Math.random() * 10000),
        date: Math.floor(Math.random() * (50 - 10) + 10) - new Date().getDate(),
      },
    ];
    console.log(newJobs);

    const jsonJobs = JSON.stringify(newJobs);
    setJobs((prev) => {
      return newJobs;
    });
    localStorage.setItem("jobs", jsonJobs);
    setJobsLocal(JSON.parse(localStorage.getItem("jobs")));
    setJob("");
  };

  const handleFilter = (checked) => {
    if (checked === false) {
      setJobs(JSON.parse(localStorage.getItem("jobs")) || []);
    } else if (checked === true) {
      setJobs(
        JSON.parse(localStorage.getItem("jobs")).filter(
          (item) => item.finished === !checked
        ) || []
      );
    }
  };

  const reset = () => {
    localStorage.removeItem("jobs");
    setJobs([]);
    setJobsLocal([]);
  };
  const value = {
    jobs,
    setJobs,
    job,
    setJob,
    handleSubmit,
    handleFilter,
    language,
    changeLanguage,
    setChangeLanguage,
    reset,
  };
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
