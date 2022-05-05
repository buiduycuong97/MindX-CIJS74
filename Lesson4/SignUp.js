import React, { useState } from "react";
import "../css/SignUp.css";
export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGerder] = useState("");
  const [age, setAge] = useState(1);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  const changeGender = (e) => {
    setGerder(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const changeAddress = (e) => {
    setAddress(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log(e.target.value);
  };

  const signUp = (e) => {
    if (password != confirmPassword) {
      alert("password and confirm password not match");
      e.preventDefault();
    } else if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      e.preventDefault();
      alert("All fields must be valid data");
    } else {
      alert(`Bạn đã đăng ký thành công với thông tin:
        Họ và tên: ${firstName + lastName}
        Giới tính: ${gender}
        Age: ${age}
        Address: ${address}
        Email: ${email}
        `);
    }
  };
  return (
    <div id="form">
      <h1>Sign Up</h1>
      <form action="" onSubmit={signUp}>
        <div>
          <p>First name:</p>
          <input type="text" onChange={changeFirstName} />
        </div>
        <div>
          <p>Last name:</p>
          <input type="text" onChange={changeLastName} />
        </div>
        <div>
          <p>Gender:</p>
          <input type="text" onChange={changeGender} />
        </div>
        <div>
          <p>Age:</p>
          <input type="number" min={1} onChange={changeAge} />
        </div>
        <div>
          <p>Address:</p>
          <input type="text" onChange={changeAddress} />
        </div>
        <div>
          <p>Email:</p>
          <input
            type="email"
            onChange={changeEmail}
            placeholder={"example@gmail.com "}
          />
        </div>
        <div>
          <p>Password:</p>
          <input
            type="password"
            minLength={8}
            maxLength={16}
            placeholder={"Must be 8-16 characters"}
            onChange={changePassword}
          />
        </div>
        <div>
          <p>Confirm Password:</p>
          <input
            type="password"
            minLength={8}
            maxLength={16}
            placeholder={"Must be 8-16 characters"}
            onChange={changeConfirmPassword}
          />
        </div>
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
