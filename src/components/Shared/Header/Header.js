import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className="fw-bold brand" href="/">
                    ELECTRO MAX
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                    className="text-center ms-5"
                    id="responsive-navbar-nav"
                >
                    <Nav className="ms-auto me-5">
                        <Nav.Link className="me-5 nav-link" href="/blogs">
                            Blog
                        </Nav.Link>
                        <Nav.Link className="me-5 nav-link" href="/signin">
                            Sign in
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
