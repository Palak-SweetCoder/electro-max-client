import React from 'react';
import './Banner.css';
import banner from '../../../assets/electromax-banner.png';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container d-flex align-items-center justify-content-between banner-container">
                <div className="p-lg-5">
                    <h1>Tempor incididunt ut labore et dolor.</h1>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal
                    </p>
                </div>
                <div className="p-lg-2">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
