import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryItems = () => {
    const { itemsId } = useParams();
    const [item, setItem] = useState({});
    const { img, price, name, supplier, description, quantity } = item;

    useEffect(() => {
        const url = `https://electro-max-server.up.railway.app/items/${itemsId}`;
        fetch(url)
            .then((res) => res.json())
            .then((items) => setItem(items));
    }, [item, itemsId]);

    const reduceQuantity = () => {
        const productQuantity = { quantity: quantity - 1 };

        // send data to the server side
        const url = `https://electro-max-server.up.railway.app/items/${itemsId}`;
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
                alert('Quantity updated!!!');
            });
    };

    return (
        <>
            <div className="container mb-5 mt-5">
                <div className="card w-75 p-2 mx-auto">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
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
            <div className="p-2 mb-4">
                <div className="form-container mx-auto p-lg-5 rounded-4">
                    <Form>
                        <Form.Group
                            className="mb-3 text-center"
                            controlId="formBasicEmail"
                        >
                            <Form.Label>Restock Item</Form.Label>
                            <Form.Control
                                type="text"
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
        </>
    );
};

export default InventoryItems;
