import React from 'react';
import './Banner.css';
import banner from '../../../assets/electromax-banner.png';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container d-flex align-items-center justify-content-between banner-container">
                <div className="p-lg-5">
                    <h1 className="fw-semibold mb-lg-4">
                        MANAGE YOUR BUSINESS WITH OUR INVENTORY
                    </h1>
                    <p>
                        We are an inventory management company. Our goal to
                        provide a world class business management system for all
                        companies. Definitely we're the exact one that you're
                        looking for.
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
