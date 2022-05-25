import React from "react";
import "./AccountForm.css";

const AccountForm = ({ isEnable, setIsEnable }) => {
  return (
    <div>
      <form className="account-form">
        <input checked id="signin" name="action" type="radio" value="signin" />
        <label htmlFor="signin">Sign in</label>
        <input id="signup" name="action" type="radio" value="signup" />
        <label htmlFor="signup">Sign up</label>
        <input id="reset" name="action" type="radio" value="reset" />
        <label htmlFor="reset">Reset</label>
        <div id="wrapper">
          <div id="arrow"></div>
          <input id="email" placeholder="Email" type="text" />
          <input id="pass" placeholder="Password" type="password" />
          <input id="repass" placeholder="Repeat password" type="password" />
        </div>
        <button className="account-form__btn">
          <span className="account-form__sp">
            Reset Password <br />
            Sign In <br />
            Sign Up <br />
          </span>
        </button>
        <button
          className="account-form__btn"
          onClick={() => setIsEnable(!isEnable)}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default AccountForm;
