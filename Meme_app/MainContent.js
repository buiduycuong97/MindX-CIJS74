import React, { useState } from 'react';
import { Form, Button, InputGroup, Row, Col, Container } from 'react-bootstrap';
import MemeContainer from './MemeContainer';

export default function MainContent({ data }) {

    const [keyword, setKeyword] = useState('');

    const changeKeyword = (event) => {
        setKeyword(event.target.value);
    }

    const result = keyword 
        ? data.filter(item => item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1) 
        : data;

    return (<Container fluid className="main-content">
        <Row>
            <Col>
                <h4>Meme List</h4>
            </Col>
            <Col>
                <Form.Control type="text" placeholder="Enter keyword to search" onChange={changeKeyword} />
            </Col>
        </Row>

        <Row className="meme-list mt-3">
            {result.map(memeData => <Col lg={4} md={6}>
                <MemeContainer
                    key={"meme-container-" + memeData.id}
                    {...memeData}
                />
            </Col>)}
        </Row>

    </Container>);
}