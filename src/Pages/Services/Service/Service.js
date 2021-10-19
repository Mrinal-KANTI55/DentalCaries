import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id,name, picture, price, address } = props.service;
    return (
        <div>
            <Col>
                <Card className="my-3">
                    <Card.Img className="p-2" variant="top" src={picture} width="350px" height="250px" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            address :{address},price :{price}
                        </Card.Text>
                        
                        <Link to={`/selectservice/${_id}`}><Button variant="warning">Read More</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;