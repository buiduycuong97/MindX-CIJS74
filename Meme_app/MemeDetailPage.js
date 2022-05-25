import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getMemeById } from '../../data/meme_data';

export default function MemeDetailPage() {

    const { id } = useParams();
    const [meme, setMeme] = useState({});

    useEffect(() => {
        let data = getMemeById(id);
        setMeme(data);
    }, [id]);

    return (<Container className="meme-detail-page">
        <h2>Meme detail</h2>
        <Row>
            <Col sm={4}>
                <img src={meme.image} className="w-100" />
            </Col>

            <Col>
                <div>ID: <b>{meme.id}</b></div>
                <div>Name: <b>{meme.name}</b></div>
                <div>
                    Description: <br />
                    <span className="text-muted">{meme.description}</span>
                </div>
                <div>
                    Catogories: <br />
                    <span className="text-muted">
                        {meme.categories && meme.categories.map(item => <Badge className="m-1" bg="secondary">{item}</Badge>)}
                    </span>
                </div>
                <div>Date modified: <b>{meme.dateModified}</b></div>
            </Col>
        </Row>
    </Container>);
}