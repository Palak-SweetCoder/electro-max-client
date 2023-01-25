import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand
                        className="fw-bold brand"
                        as={Link}
                        to="/home"
                    >
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

                            {user ? (
                                <Nav.Link
                                    className="me-5 nav-link"
                                    href="/manage-inventories"
                                >
                                    Manage Inventories
                                </Nav.Link>
                            ) : (
                                <div></div>
                            )}
                            {user ? (
                                <Nav.Link
                                    className="me-5 nav-link"
                                    href="/add-item"
                                >
                                    Add Item
                                </Nav.Link>
                            ) : (
                                <div></div>
                            )}
                            {user ? (
                                <Nav.Link
                                    className="me-5 nav-link"
                                    href="/my-items"
                                >
                                    My Items
                                </Nav.Link>
                            ) : (
                                <div></div>
                            )}
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
