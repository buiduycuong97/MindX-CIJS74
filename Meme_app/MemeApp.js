import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import MemeDetailPage from './MemeDetailPage';

import { AuthContext, autoLogin, generateInitialUsers } from './models/user';
generateInitialUsers();

export default function MemeApp() {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const theUser = autoLogin();
        setCurrentUser(theUser);
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            <BrowserRouter>
                <div className="meme-app">
                    <Navbar />
                    <Container fluid>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/memes/:id" element={<MemeDetailPage />} />
                            <Route path="*" element={<h2 className="text-danger">Không tìm thấy trang nào bro ơi 😢😢</h2>} />
                        </Routes>
                    </Container>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}
