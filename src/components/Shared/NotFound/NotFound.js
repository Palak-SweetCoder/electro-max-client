import React from 'react';
import errorimg from '../../../assets/not-found.png';

const NotFound = () => {
    return (
        <>
            <div className="container">
                <div className="m-5">
                    <h2 className="items-header text-center fw-bolder fs-1">
                        The Page You're Looking For
                    </h2>
                    <h2 className="mt-3 items-header text-center fw-bolder fs-1">
                        That's Not Found!!!
                    </h2>
                    <div className="p-4 text-center">
                        <img className="img-fluid" src={errorimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
