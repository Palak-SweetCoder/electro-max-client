import React from 'react';
import { Button } from 'react-bootstrap';
import { ImFacebook, ImInstagram, ImLinkedin, ImTwitter } from 'react-icons/im';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <div className="container p-5 d-flex justify-content-between flex-wrap">
                    <div className="p-2">
                        <h3 className="footer-title">CONTACT US</h3>
                        <p>
                            Email: electromaxhelp@gmail.com <br />
                            Cell: +1-412-496-2290
                        </p>
                        <p>
                            &copy; COPYRIGHT ELECTRO MAX{' '}
                            {new Date().getFullYear()}
                        </p>
                    </div>

                    {/* ---------------company section-----------------  */}

                    <div className="d-flex flex-column align-items-baseline p-2">
                        <h3 className="footer-title">COMPANY</h3>
                        <Button
                            variant="link"
                            className="p-0 m-0 text-decoration-none btn-color"
                        >
                            About Us
                        </Button>
                        <Button
                            variant="link"
                            className="p-0 m-0 text-decoration-none btn-color"
                        >
                            Privacy Policy
                        </Button>
                        <Button
                            variant="link"
                            className="p-0 m-0 text-decoration-none btn-color"
                        >
                            Terms & Condition
                        </Button>
                        <Button
                            variant="link"
                            className="p-0 m-0 text-decoration-none btn-color"
                        >
                            Legal
                        </Button>
                    </div>

                    {/* ------------------Follow us section----------------  */}

                    <div className="p-2">
                        <h3 className="footer-title">FOLLOW US ON</h3>
                        <div className="">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImFacebook className="icon-width me-3" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImTwitter className="icon-width me-3" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImInstagram className="icon-width me-3" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImLinkedin className="icon-width me-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
