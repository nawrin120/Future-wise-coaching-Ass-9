import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeElement from '../HomeElement/HomeElement';
import './Home.css'

const Home = () => {

    const [services, seSetservices] = useState([])

    useEffect(() => {
        fetch('./homedata.json')
            .then(res => res.json())
            .then(data => seSetservices(data))
    }, [])
    return (
        <div>
            <h5 className='headingFive'>The Best Coaching Center !!</h5>
            <h1 className='headingOne'> Future Wise </h1>
            <small>FUTURE WISE & IELTS coaching center are providing their services from O level to medium level students. They are taking all categories of students like university teachers, professors, graduate students, young learners,Academics and jobholders. They are located in Motijhil, Dhaka, Bangladesh.</small>
            <div>
                <Row xs={1} md={2} className="g-4">
                    {
                        services.map(service => <HomeElement
                            service={service}
                        ></HomeElement>)
                    }


                </Row>
            </div>
        </div>
    );
};

export default Home;