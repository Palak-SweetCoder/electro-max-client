import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationError, setValidationError] = useState('');
    const navigate = useNavigate();
    let errorElement;

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const navigateToSignIn = () => {
        navigate('/signin');
    };

    const handleNameBlur = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const handleEmailBlur = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const handlePasswordBlur = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleConfirmPasswordBlur = (e) => {
        const confirmPassword = e.target.value;
        setConfirmPassword(confirmPassword);
    };

    if (user) {
        navigate('/home');
    }

    if (loading) {
        return (
            <div className="text-center m-5 p-5">
                <Loading></Loading>
            </div>
        );
    }

    if (error || validationError) {
        errorElement = (
            <div>
                <p className="text-danger">
                    Error: {error?.message} {validationError}
                </p>
            </div>
        );
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setValidationError(
                'Your password and confirm password did not matched!!!'
            );
            return;
        }
        if (password.length < 6) {
            setValidationError(
                'Your password must be at least 6 character long!!!'
            );
            return;
        }
        createUserWithEmailAndPassword(email, password);
    };

    return (
        <>
            <div className="signin-bg pb-5">
                <h2 className="text-center pt-5">Please Sign Up</h2>
                <div className="y-line mx-auto"></div>
                <div className="form-container mx-auto mt-5 p-lg-5 rounded-4">
                    <Form onSubmit={handleCreateUser}>
                        <Form.Group
                            onBlur={handleNameBlur}
                            className="mb-3"
                            controlId="formBasicText"
                        >
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                            />
                        </Form.Group>

                        <Form.Group
                            onBlur={handleEmailBlur}
                            className="mb-3"
                            controlId="formBasicEmail"
                        >
                            <Form.Label>Your email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group
                            onBlur={handlePasswordBlur}
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Your password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                            />
                        </Form.Group>

                        <Form.Group
                            onBlur={handleConfirmPasswordBlur}
                            className="mb-3"
                            controlId="formBasicConfirmPassword"
                        >
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Accept electro max terms & conditions."
                            />
                        </Form.Group>

                        {errorElement}

                        <div className="text-center">
                            <Button
                                className="signin-button mt-2 px-5"
                                variant="primary"
                                type="submit"
                            >
                                Sign up
                            </Button>
                        </div>
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
