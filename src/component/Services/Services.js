import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import ServiceElement from '../ServiceElement/ServiceElement';
import './Services.css'

const Services = () => {

    const [programs, setPrograms] = useState([])
    useEffect(() => {
        fetch('./servicedata.json')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, [])

    return (
        <div>
            <h1 className='mt-5'>Our Services</h1>
            <CardGroup className="service-card">
                {
                    programs.map(program => <ServiceElement
                        program={program}
                    ></ServiceElement>)
                }

            </CardGroup>

        </div>
    );
};

export default Services;