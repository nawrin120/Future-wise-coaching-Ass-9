import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeElement.css'

const HomeElement = (props) => {
    console.log(props)
    const { image, Course, Time, Class, Fee } = props.service
    return (
        <Col className='sigle-service'>
            <Card className="service-cart">
                <Card.Img variant="top" className="home-img" src={image} />
                <Card.Body>
                    <Card.Title className='Course-name'>Course Name: {Course}</Card.Title>
                    <Card.Text className='time'> <span className='bold'>Time :</span> {Time} </Card.Text>
                    <Card.Text className='cls-num'> <span className='bold'>Classes :</span> {Class}</Card.Text>
                   
                    <Card.Text className='fee'> <span className='bold'>Fee :</span> {Fee} </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeElement;