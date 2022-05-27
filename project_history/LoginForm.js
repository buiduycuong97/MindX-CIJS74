import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext, login } from "./userHistoryApp";

const LoginForm = () => {
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    //Kiểm tra định dạng email hợp lệ
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    !email ? setEmailError("Nhập vào email !") : setEmailError("");
    !password ? setPasswordError("Nhập vào password !") : setPasswordError("");

    if (email && password) {
      const user = login(email, password);
      !regex.test(email)
        ? setEmailError("Không đúng định dạng email !")
        : setEmailError("");
      if (!user) {
        // nếu không tìm thấy user -> thông báo lỗi
        setEmailError("Email hoặc mật khẩu không chính xác");
      } else {
        // nếu tìm thấy user -> cập nhật trạng thái đăng nhập của MemeApp
        auth.setCurrentUser(user);
        navigate("/tc");
      }
    }
  };

  return (
    <Container className="login-form mt-5">
      <Form
        className="bg-white p-3 border rounded shadow-sm"
        onSubmit={handleLogin}
      >
        <h2 className="text-center">LOGIN</h2>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <div className="text-danger">{emailError}</div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          <div className="text-danger">{passwordError}</div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
