import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { name, price, description, img } = item;

    return (
        <div>
            <div className="card single-card ms-lg-auto mx-sm-auto">
                <img
                    src={img}
                    className="card-img-top mx-auto p-3 img-fluid"
                    alt="..."
                />
                <div className="y2-line mx-auto mb-4"></div>
                <div className="card-body">
                    <h5 className="card-title fw-semibold">{name}</h5>
                    <p>Price: ${price}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Item;
