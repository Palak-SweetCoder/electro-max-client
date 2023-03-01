import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const InventoryItems = () => {
    const { itemsId } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    const { img, price, name, supplier, description, quantity } = item;

    // To load specific data depending on specific id
    useEffect(() => {
        const url = `https://defiant-hosiery-duck.cyclic.app/items/${itemsId}`;
        fetch(url)
            .then((res) => res.json())
            .then((items) => setItem(items));
    }, [item, itemsId]);

    // Reduce quantity by one from previous quantity value
    const reduceQuantity = () => {
        const productQuantity = { quantity: quantity - 1 };

        // send updated quantity to the server side
        const url = `https://defiant-hosiery-duck.cyclic.app/items/${itemsId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productQuantity),
        })
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                swal('Quantity Updated!', '', 'success');
            });
    };

    // Add or increase quantity with previous value
    const increaseQuantity = (e) => {
        e.preventDefault();
        const newStockValue = parseInt(e.target.restock.value);
        const updatedStock = { quantity: quantity + newStockValue };

        //Send restock value to the server
        const url = `https://defiant-hosiery-duck.cyclic.app/items/${itemsId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedStock),
        })
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                swal('Item Restocked!', '', 'success');
                e.target.reset();
            });
    };

    const navigateToManageInventories = () => {
        navigate('/manage-inventories');
    };

    return (
        <>
            {/* ----------------items card----------------- */}
            <div className="container mb-5 mt-5">
                <div className="card w-75 p-2 mx-auto">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                width={250}
                                src={img}
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">{description}</p>
                                <p>Price: ${price}</p>
                                <p>Supplier: {supplier}</p>
                                <p className="fs-5 fw-semibold">
                                    Quantity: {quantity}
                                </p>
                                <button
                                    onClick={reduceQuantity}
                                    className="item-button rounded-pill px-3 py-2"
                                >
                                    Delivered
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------restock form----------------- */}
            <div className="p-2 mb-4">
                <div className="form-container mx-auto p-lg-5 rounded-4">
                    <Form onSubmit={increaseQuantity}>
                        <Form.Group
                            className="mb-3 text-center"
                            controlId="formBasicEmail"
                        >
                            <Form.Label>Restock Item</Form.Label>
                            <Form.Control
                                type="text"
                                name="restock"
                                placeholder="Input your quantity"
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button
                                className="signin-button mt-2 px-5"
                                variant="primary"
                                type="submit"
                            >
                                Restock
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="text-center m-5 p-3">
                <Button
                    onClick={navigateToManageInventories}
                    className="signin-button px-5 fw-semibold"
                >
                    Manage Inventories
                </Button>
            </div>
        </>
    );
};

export default InventoryItems;
