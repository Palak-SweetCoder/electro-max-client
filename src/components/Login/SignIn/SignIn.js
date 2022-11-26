import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signin.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const customId = 'custom-id-yes';
    const location = useLocation();
    let errorElement;

    let from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const navigateToSignUp = () => {
        navigate('/signup');
    };

    const handleEmailBlur = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const handlePasswordBlur = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    if (user) {
        toast.success('Signin Success!!!', {
            toastId: customId,
        });
        navigate(from, { replace: true });
    }

    if (loading) {
        return (
            <div className="text-center m-5 p-5">
                <Loading></Loading>
            </div>
        );
    }

    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        );
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    return (
        <>
            <div className="signin-bg pb-5">
                <h2 className="text-center pt-5">Please Sign In</h2>
                <div className="y-line mx-auto"></div>
                <div className="form-container mx-auto mt-5 p-lg-5 rounded-4">
                    <Form onSubmit={handleSignIn}>
                        <Form.Group
                            onBlur={handleEmailBlur}
                            className="mb-3"
                            controlId="formBasicEmail"
                        >
                            <Form.Label>Email address</Form.Label>
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
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                            />
                        </Form.Group>
                        {errorElement}
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
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </>
    );
};

export default SignIn;
