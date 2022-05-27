import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { initialData, register } from "./userHistoryApp";

const SignupForm = () => {
  const [data, setData] = useState(() =>
    JSON.parse(localStorage.getItem("users"))
  );
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    !userName ? setUserNameError("Nhập vào tên !") : setUserNameError("");

    !email ? setEmailError("Nhập vào email !") : setEmailError("");

    !password ? setPasswordError("Nhập vào password !") : setPasswordError("");

    if (email && password) {
      !regexEmail.test(email)
        ? setEmailError("Không đúng định dạng email !")
        : setEmailError("");

      password.length < 6 || password.length > 20
        ? setPasswordError("Giới hạn 6-20 ký tự !")
        : setPasswordError("");

      const newUser = {
        id: `the-user-${data.length}`,
        name: userName,
        email: email,
        password: password,
      };
      register(newUser);
      setData(JSON.parse(localStorage.getItem("users")));
      navigate("/tc");
    }
  };
  return (
    <div>
      <Container className="login-form mt-5">
        <Form
          className="bg-white p-3 border rounded shadow-sm"
          onSubmit={handleSignup}
        >
          <h2 className="text-center">SIGN UP</h2>

          <Form.Group className="mb-3">
            <Form.Label>User name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            ></Form.Control>
            <div className="text-danger">{userNameError}</div>
          </Form.Group>

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

          <Button type="submit" variant="primary">
            Sign up
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignupForm;
