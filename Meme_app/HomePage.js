import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import AsideLeft from './AsideLeft';
import MainContent from './MainContent';

import { getAllMemes } from '../../data/meme_data';

export default function HomePage() {

    const [memes, setMemes] = useState([]);

    useEffect(() => {
        let data = getAllMemes();
        setMemes(data);
    }, []);

    return (<Row>
        <Col lg={3} md={4} xs={12}><AsideLeft /></Col>
        <Col><MainContent data={memes} /></Col>
    </Row>);
}