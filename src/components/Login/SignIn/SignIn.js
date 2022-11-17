import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const SignIn = () => {
    const navigate = useNavigate();

    const navigateToSignUp = () => {
        navigate('/signup');
    };

    return (
        <>
            <div className="signin-bg pb-5">
                <h2 className="text-center pt-5">Please Sign In</h2>
                <div className="y-line mx-auto"></div>
                <div className="form-container mx-auto mt-5 p-lg-5 rounded-4">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button
                                className="signin-button mt-2 px-5"
                                variant="primary"
                                type="submit"
                            >
                                Sign in
                            </Button>
                        </div>
                        <div className="text-white mt-4">
                            <p>
                                NEW TO ELECTRO MAX?{' '}
                                <span
                                    className="register-toggler"
                                    onClick={navigateToSignUp}
                                >
                                    PLEASE REGISTER.
                                </span>
                            </p>
                            <p>
                                FORGET YOUR PASSWORD?{' '}
                                <span className="reset-password">
                                    RESET PASSWORD.
                                </span>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default SignIn;
