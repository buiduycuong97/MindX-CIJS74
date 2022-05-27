import React from "react";

export const initialData = [
  {
    id: "admin",
    name: "History Admin",
    email: "admin@gmail.com",
    password: "123123",
  },
  {
    id: "the-user-1",
    name: "History User",
    email: "user1@gmail.com",
    password: "123123",
  },
];
export function generateInitialUsers() {
  const data = initialData;
  // nếu chưa có dữ liệu trong localstorage => khởi tạo dữ liệu
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(data));
  }
}

export function getUsers() {
  // vào localstorage lấy dữ liệu với key = users
  let json = localStorage.getItem("users");
  return !json ? [] : JSON.parse(json);
}

export function login(email, password) {
  const users = getUsers();
  const foundUser = users.find(
    (user) => user.email == email && user.password == password
  );

  // nếu tìm thấy người dùng => lưu trạng thái đăng nhập vào localstorage
  if (foundUser) {
    localStorage.setItem("current-user", JSON.stringify(foundUser));
  }

  return foundUser;
}

export function autoLogin() {
  // tìm trong localstorage xem current-user có giá trị hay không
  const json = localStorage.getItem("current-user");

  return json ? JSON.parse(json) : null;
}

export function logout() {
  const json = localStorage.removeItem("current-user");
  return json;
}

export function register(newUser) {
  //lấy giá trị hiện tại trong local cộng thêm giá trị mới
  let userData = JSON.parse(localStorage.getItem("users"));
  localStorage.setItem("users", JSON.stringify([...userData, newUser]));
}

export const AuthContext = React.createContext(null);
// Provider, useContext
