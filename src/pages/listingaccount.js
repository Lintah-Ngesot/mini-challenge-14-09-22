import React from 'react'
import { Card, ListGroup, Col, Row } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import data from '../dummy/data.json'

function Listingaccount() {
    return (
        <div style={{ backgroundColor: 'black', height: '100vh' }}>
            <Card style={{ width: '18rem', marginLeft: '550px', backgroundColor: 'white', height: '100vh' }}>
                <ListGroup variant="flush">
                    {data.map((item) => {
                        return (
                            <>
                                <ListGroup.Item>
                                    <Link to={`/detailaccount/${item.id}`} className='text-decoration-none'>
                                    <Row style={{ backgroundColor: 'black' }}>
                                        <Col sm={4}>    
                                            <Card.Img variant="top" src={item.image} style={{ borderRadius: '60px', height: '70px', objectFit: 'cover' }} />
                                        </Col>
                                        <Col sm={8}>
                                            <p style={{ color: 'white' }}>
                                                {item.username}
                                            </p>
                                            <p style={{ color: 'white' }}>
                                                Follower {item.follower}
                                            </p>
                                        </Col>
                                    </Row>
                                    </Link>
                                </ListGroup.Item>

                            </>

                        )
                    })}

                </ListGroup>
            </Card>
        </div>
    );
}
export default Listingaccount;