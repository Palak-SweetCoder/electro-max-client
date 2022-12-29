import React from 'react';
import { Button } from 'react-bootstrap';
import useItems from '../../hooks/useItems';

const ManageInventories = () => {
    const [items] = useItems([]);

    return (
        <>
            <div className="container mt-4 mb-4">
                <div>
                    <h2 className="fw-semibold text-center items-header">
                        Here is our <br />
                        All inventory items: {items.length}
                    </h2>
                    <div className="y-line mx-auto"></div>
                </div>

                {items.map((item) => (
                    <div key={item._id} className="card w-75 p-2 mx-auto m-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    width={250}
                                    src={item.img}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">
                                        {item.description}
                                    </p>
                                    <p>Price: ${item.price}</p>
                                    <p>Supplier: {item.supplier}</p>
                                    <p className="fs-5 fw-semibold">
                                        Quantity: {item.quantity}
                                    </p>
                                    <Button className="item-button rounded-pill px-4 py-2">
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ManageInventories;
