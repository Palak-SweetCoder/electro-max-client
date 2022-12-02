import React, { useState } from 'react';
import './UsersOutline.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const UsersOutline = () => {
    const [counterStart, setCounterStart] = useState(false);

    return (
        <>
            <div>
                <h2 className="fw-semibold text-center mt-5 items-header">
                    OUR MANAGEMENT OUTLINE.
                </h2>
                <div className="y-line mx-auto"></div>
                <ScrollTrigger
                    onEnter={() => setCounterStart(true)}
                    onExit={() => setCounterStart(false)}
                >
                    <div className="mt-3 mb-5 rounded-4">
                        <div className="container p-5 d-lg-flex justify-content-around align-items-center">
                            <div className="text-center shadow counter-bg p-5 rounded-5 mb-4">
                                <h4 className="counter-header fw-semibold">
                                    Total Items
                                </h4>
                                <h3 className="counter-number">
                                    {counterStart && (
                                        <CountUp
                                            start={0}
                                            end={820}
                                            duration={2}
                                            delay={0}
                                        ></CountUp>
                                    )}
                                    <span>+</span>
                                </h3>
                            </div>
                            <div className="text-center shadow counter-bg p-5 rounded-5 mb-4">
                                <h4 className="counter-header fw-semibold">
                                    Verified Dealers
                                </h4>
                                <h3 className="counter-number">
                                    {counterStart && (
                                        <CountUp
                                            start={0}
                                            end={500}
                                            duration={2}
                                            delay={0}
                                        ></CountUp>
                                    )}
                                    <span>+</span>
                                </h3>
                            </div>
                            <div className="text-center shadow counter-bg p-5 rounded-5 mb-4">
                                <h4 className="counter-header fw-semibold">
                                    Active Users
                                </h4>
                                <h3 className="counter-number">
                                    {counterStart && (
                                        <CountUp
                                            start={0}
                                            end={1000}
                                            duration={2}
                                            delay={0}
                                        ></CountUp>
                                    )}
                                    <span>+</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </>
    );
};

export default UsersOutline;
