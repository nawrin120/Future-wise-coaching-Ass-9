import React from 'react';
import { Card } from 'react-bootstrap';
import './ServicesElement.css'

const ServiceElement = (props) => {
    console.log(props)
    const { image, Course, Time, Class, Fee, Description } = props.program

    return (
        <Card className='fullCard'>
            <Card.Img variant="top" className='image' src={image} />
            <Card.Body>
                <Card.Title className='tittle'>Course Name: {Course}</Card.Title>
                <Card.Text> <span className='description'>Description :</span> {Description}</Card.Text>
                <Card.Text className='class'>Class : {Class}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <h5>Time: {Time}</h5>
                <h4>Fee: {Fee} </h4>
            </Card.Footer>
        </Card>
    );
};

export default ServiceElement;

