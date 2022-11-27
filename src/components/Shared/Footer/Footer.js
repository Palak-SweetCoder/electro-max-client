import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <div className="container p-5">
                    <div className="p-2 text-center">
                        <h3 className="footer-title">ELECTRO MAX</h3>
                        <p>
                            &copy; COPYRIGHT ELECTRO MAX{' '}
                            {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
