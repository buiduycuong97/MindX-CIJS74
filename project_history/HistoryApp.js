import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThoiKy from "./ThoiKy";
import ThongTin from "./ThongTin";
import ChienTich from "./ChienTich";
import LoginForm from "./LoginForm";
import NavbarHistory from "./NavbarHistory";
import SignupForm from "./SignupForm";
import { autoLogin, AuthContext, generateInitialUsers } from "./userHistoryApp";

const HistoryApp = () => {
  generateInitialUsers();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const theUser = autoLogin();
    setCurrentUser(theUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <NavbarHistory></NavbarHistory>
        <Routes>
          <Route path="/tc" element={<h1>Abc</h1>}></Route>
          <Route path="/tt" element={<ThongTin></ThongTin>}></Route>
          <Route path="/tk" element={<ThoiKy></ThoiKy>}></Route>
          <Route path="/ct" element={<ChienTich></ChienTich>}></Route>
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>
          <Route path="/signup" element={<SignupForm></SignupForm>}></Route>
          <Route path="*" element={<h1>404 Not Found !!!</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default HistoryApp;
