import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { id, name, price, description, img, quantity, supplier } = item;
    const navigate = useNavigate();

    const navigateToInventory = (id) => {
        navigate(`/inventory/${id}`);
    };

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
                    <p>Quantity: {quantity}</p>
                    <small className="supplier">Supplier: {supplier}</small>
                    <p className="card-text">{description}</p>
                    <div className="text-center">
                        <Button
                            onClick={() => navigateToInventory(id)}
                            className="item-button px-5 py-2"
                        >
                            Update Stock
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
