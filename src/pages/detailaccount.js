import { useState, useEffect } from 'react'
import { Card, ListGroup, Col, Row, Button } from 'react-bootstrap';
import foto1 from '../assets/foto1.jfif';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../dummy/data.json'

function Listingaccount() {

    const { id } = useParams()
    const [data, setData] = useState()



    useEffect(() => {
        const dataAccount = fakeData[id - 1]
        console.log(dataAccount)
        setData(dataAccount)
    }, [])


    return (
        <div style={{ backgroundColor: 'black', height: '100vh' }}>
            <Card style={{ width: '18rem', marginLeft: '550px', height: '100vh' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div style={{ backgroundColor: 'whitesmoke', height: '200px' }}>
                            <Card.Img variant="top" src={`${data?.image}`}
                                style={{
                                    borderRadius: '60px',
                                    width: '120px',
                                    height: '120px',
                                    objectFit: 'cover',
                                    border: 'solid 2px red',
                                    marginLeft: '65px'
                                }} />
                            <p style={{ marginLeft: '80px' }}>
                                {data?.username}
                            </p>
                            <Row>
                                <Col sm={6}>
                                    Folowing: {data?.following}
                                </Col>
                                <Col sm={6}>
                                    Follower: {data?.follower}
                                </Col>
                            </Row>

                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <Link to='/'>
                    <Button>
                        Back
                    </Button>
                </Link>
            </Card>
        </div>
    );
}
export default Listingaccount;