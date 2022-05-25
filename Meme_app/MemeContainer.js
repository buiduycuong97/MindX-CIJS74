import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MemeContainer({ id, name, categories, description, dateModified, image }) {

    return (
        <Container className="meme-container border mb-3 bg-white shadow-sm">
            <Row>
                <Col sm={12} className="text-center">
                    <Link to={"/memes/" + id}><img src={image} className="w-100" /></Link>
                </Col>
                <Col sm={12} className="text-center">
                    <b>{name}</b>
                </Col>
            </Row>
        </Container>
    );
}