import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <>
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
                            <Nav.Link
                                className="me-5 nav-link"
                                href="home#items"
                            >
                                Items
                            </Nav.Link>

                            <Nav.Link
                                className="me-5 nav-link"
                                href="/manage-inventories"
                            >
                                Manage Inventories
                            </Nav.Link>
                            <Nav.Link className="me-5 nav-link" href="/blogs">
                                Blog
                            </Nav.Link>
                            {user ? (
                                <Button
                                    className="signin-button rounded-pill"
                                    onClick={handleSignOut}
                                >
                                    Sign out
                                </Button>
                            ) : (
                                <Nav.Link
                                    className="me-5 nav-link"
                                    href="/signin"
                                >
                                    Sign in
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Header;
