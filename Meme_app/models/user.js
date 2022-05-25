import React from "react";

export function generateInitialUsers() {
    const initialData = [
        { id: 'admin', name: 'Meme Admin', email: 'admin@meme.com', password: '12345678' },
        { id: 'the-user', name: 'Meme User', email: 'user1@meme.com', password: '12345678' }
    ];

    // nếu chưa có dữ liệu trong localstorage => khởi tạo dữ liệu
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(initialData));
    }
}

export function getUsers() {
    // vào localstorage lấy dữ liệu với key = users
    let json = localStorage.getItem('users');
    return !json ? [] : JSON.parse(json);
}

export function login(email, password) {
    const users = getUsers();
    const foundUser = users.find(user => user.email == email && user.password == password);

    // nếu tìm thấy người dùng => lưu trạng thái đăng nhập vào localstorage
    if (foundUser) {
        localStorage.setItem('current-user', JSON.stringify(foundUser));
    }

    return foundUser;
}

export function autoLogin() {
    // tìm trong localstorage xem current-user có giá trị hay không
    const json = localStorage.getItem('current-user');

    return json ? JSON.parse(json) : null;
}

export function register(name, email, password) {

}

export const AuthContext = React.createContext(null);
// Provider, useContext