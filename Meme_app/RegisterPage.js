import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function RegisterPage() {
    return (<Container className="register-page">

        <Form className="bg-white p-3 border rounded shadow-sm">
            <h2 className="text-center">Create an account</h2>

            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Button variant="primary">Register</Button>
        </Form>

    </Container>);
}