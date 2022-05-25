import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as BSNavbar, Button } from "react-bootstrap";

import { AuthContext } from "./models/user";

export default function Navbar() {

    const activeClassName = ({ isActive }) => isActive ? "nav-link text-primary" : "nav-link";

    const auth = useContext(AuthContext);

    return (<BSNavbar expand="lg" bg="white" className="border-bottom mb-3">
        <Container fluid>
            <BSNavbar.Brand>Hello Memes</BSNavbar.Brand>
            <BSNavbar.Toggle aria-control="my-navbar" />
            <BSNavbar.Collapse id="my-navbar">
                {/* ms-auto = margin-left: auto */}
                {/* me-auto = margin-right: auto */}
                <Nav className="ms-auto">
                    <NavLink className={activeClassName} to="/">Home</NavLink>

                    {
                        auth.currentUser
                            ? <>
                                <NavLink className={activeClassName} to="/me">{auth.currentUser.name}</NavLink>
                                <Button variant="danger" className="ms-2">Logout</Button>
                            </>
                            : <>
                                <NavLink className={activeClassName} to="/login">Login</NavLink>
                                <NavLink className={activeClassName} to="/register">Register</NavLink>
                            </>
                    }

                </Nav>
            </BSNavbar.Collapse>
        </Container>
    </BSNavbar>);
}