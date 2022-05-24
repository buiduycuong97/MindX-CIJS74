import React from "react";
import "./NavbarHistory.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";

const NavbarHistory = ({ setIsEnable }) => {
  const navigate = useNavigate();
  const activeClassName = ({ isActive }) =>
    isActive ? "nav-link text-danger" : "nav-link";
  return (
    <div className="navbar-history">
      <div className="navbar-history__header">
        <div className="navbar-history__header__left">
          <div className="name-page">
            <Link to="/">Name</Link>
          </div>
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>
        </div>
        <div className="navbar-history__header__right">
          <input
            checked
            type="button"
            onChange={() => ""}
            defaultValue="Account"
            onClick={() => {
              navigate("/login");
              setIsEnable(true);
            }}
          />
        </div>
      </div>
      <Nav className="navbar-history__nav">
        <NavLink to="/" className={activeClassName}>
          Trang chủ
        </NavLink>
        <NavLink to="/tt" className={activeClassName}>
          Thông tin
        </NavLink>
        <NavLink to="/tk" className={activeClassName}>
          Thời kỳ
        </NavLink>
        <NavLink to="/ct" className={activeClassName}>
          Chiến tích
        </NavLink>
      </Nav>
    </div>
  );
};

export default NavbarHistory;
