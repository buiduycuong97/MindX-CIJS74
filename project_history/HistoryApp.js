import React, { useState } from "react";
import NavbarHistory from "./NavbarHistory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThongTin from "./ThongTin";
import ThoiKy from "./ThoiKy";
import ChienTich from "./ChienTich";
import AccountForm from "./AccountForm";

const HistoryApp = () => {
  const [isEnable, setIsEnable] = useState(true);
  return (
    <BrowserRouter>
      <NavbarHistory setIsEnable={setIsEnable}></NavbarHistory>
      <Routes>
        <Route path="/"></Route>
        <Route path="/tt" element={<ThongTin></ThongTin>}></Route>
        <Route path="/tk" element={<ThoiKy></ThoiKy>}></Route>
        <Route path="/ct" element={<ChienTich></ChienTich>}></Route>
        <Route
          path="/login"
          element={
            isEnable && (
              <AccountForm
                isEnable={isEnable}
                setIsEnable={setIsEnable}
              ></AccountForm>
            )
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HistoryApp;
