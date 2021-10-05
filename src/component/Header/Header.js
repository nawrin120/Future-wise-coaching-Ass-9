import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>


            {<>
                <Navbar className="nav-background" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/home" className='logo'> <span>Future</span> Wise</Navbar.Brand>
                        <Nav className="ms-auto navbar">
                            <Nav.Link as={Link} to="/home" className="element">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services" className="element">Services</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="element">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/Contact" className="element">Contact</Nav.Link>


                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Container>
                </Navbar>
            </>}
        </div>
    );
};

export default Header;