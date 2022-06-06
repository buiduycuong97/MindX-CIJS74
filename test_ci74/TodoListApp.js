import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { TodoProvider } from "./todoContext";

export default function TodoListApp() {
  const [test, setTest] = useState("11");
  console.log(test);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return (
    <TodoProvider>
      <div className="App">
        <div className="container">
          <TodoListHeader />
          <TodoList />
          <Form />
        </div>
        <Footer />
      </div>
    </TodoProvider>
  );
};
