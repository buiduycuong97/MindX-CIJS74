import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { AuthContext, login } from './models/user';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLoginForm = (event) => {
        event.preventDefault();

        if (!email) setEmailError('Nhập vào email');
        if (!password) setPasswordError('Nhập vào mật khẩu');

        if (email && password) {
            // tiến hành đăng nhập
            const user = login(email, password);

            if (!user) { // nếu không tìm thấy user -> thông báo lỗi
                setEmailError('Email hoặc mật khẩu không chính xác');
            } else { // nếu tìm thấy user -> cập nhật trạng thái đăng nhập của MemeApp
                auth.setCurrentUser(user);
                navigate('/');
            }
        }
    }

    return (<Container className="login-page">

        <Form className="bg-white p-3 border rounded shadow-sm" onSubmit={handleLoginForm}>
            <h2 className="text-center">Login to your account</h2>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" onChange={(event) => setEmail(event.target.value)} />
                <div className="text-danger">{emailError}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(event) => setPassword(event.target.value)} />
                <div className="text-danger">{passwordError}</div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button type="submit" variant="primary">Login</Button>
        </Form>

    </Container>);
}