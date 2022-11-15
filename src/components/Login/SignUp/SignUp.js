import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const navigateToSignIn = () => {
        navigate('/signin');
    };
    return (
        <>
            <div className="signin-bg pb-5">
                <h2 className="text-center pt-5">Please Sign Up</h2>
                <div className="y-line mx-auto"></div>
                <div className="form-container mx-auto mt-5 p-lg-5 rounded-4">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Your password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                            />
                        </Form.Group>
                        <Button
                            className="signin-button mt-2 px-4"
                            variant="primary"
                            type="submit"
                        >
                            Sign up
                        </Button>
                        <div className="text-white mt-4">
                            <p>
                                ALREADY REGISTERED?{' '}
                                <span
                                    className="register-toggler"
                                    onClick={navigateToSignIn}
                                >
                                    PLEASE SIGN IN.
                                </span>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
