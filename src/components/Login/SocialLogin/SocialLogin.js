import React, { useEffect } from 'react';
import './SocialLogin.css';
import { ImGoogle } from 'react-icons/im';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const customId = 'custom-id-yes';
    let errorElement;

    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            toast.success('Google Signin Success!!!', {
                toastId: customId,
            });
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

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

    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <div className="social-line"></div>
                <p className="m-4">or</p>
                <div className="social-line"></div>
            </div>
            {errorElement}
            <button
                onClick={() => signInWithGoogle()}
                className="social-button rounded-pill d-flex align-items-center justify-content-center mx-auto py-2 px-4"
            >
                <ImGoogle></ImGoogle>
                <span className="ms-2">GOOGLE SIGN IN</span>
            </button>
        </>
    );
};

export default SocialLogin;
