import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);

    const addItem = (e) => {
        e.preventDefault();
        const email = user.email;
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;
        const supplier = e.target.supplier.value;
        const img = e.target.img.value;
        const item = {
            email,
            name,
            price,
            quantity,
            description,
            supplier,
            img,
        };
        console.log(item);

        //send data to the server side items collection
        fetch('https://electro-max-server.up.railway.app/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('data send succes', data);
                alert('Item added successfully!!!');
                e.target.reset();
            });

        //send data to the server side my-items collection
        fetch('https://electro-max-server.up.railway.app/my-items/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('data send succes', data);
                e.target.reset();
            });
    };
    return (
        <>
            <div className="container">
                <div className="m-4">
                    <h2 className="fw-semibold text-center items-header">
                        Add Your Items
                    </h2>
                    <div className="y-line mx-auto"></div>
                </div>
                <div className="form-container mx-auto mt-5 mb-5 p-lg-5 rounded-4">
                    <Form onSubmit={addItem}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            {/* <Form.Label>Product Name</Form.Label> */}
                            <Form.Control
                                type="email"
                                name="email"
                                defaultValue={user.email}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Item Name"
                                required
                                autoComplete="off"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                name="supplier"
                                placeholder="Supplier"
                                required
                                autoComplete="off"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="number"
                                name="quantity"
                                placeholder="Your Quantity"
                                required
                                autoComplete="off"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="number"
                                name="price"
                                placeholder="Item Price"
                                required
                                autoComplete="off"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                name="img"
                                placeholder="Input Your Image URL"
                                required
                                autoComplete="off"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Input Your Item Description"
                                required
                                autoComplete="off"
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button
                                className="signin-button mt-2 px-5"
                                variant="primary"
                                type="submit"
                            >
                                Add Item
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default AddItems;
