import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    // Get items from server
    useEffect(() => {
        fetch('https://defiant-hosiery-duck.cyclic.app/my-items')
            .then((res) => res.json())
            .then((data) => setMyItems(data));
    }, []);

    // Delete items from server
    const deleteItems = (id) => {
        const proceed = window.confirm(
            'Are you sure you want to delete this item?'
        );
        if (proceed) {
            const url = `https://defiant-hosiery-duck.cyclic.app/my-items/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = myItems.filter((item) => item._id !== id);
                    setMyItems(remaining);
                });
        }
    };

    return (
        <>
            <div className="container">
                <div className="m-4">
                    <h2 className="fw-semibold text-center items-header">
                        My Items
                    </h2>
                    <div className="y-line mx-auto"></div>
                </div>

                {myItems.map((items) => (
                    <div key={items._id} className="card w-75 p-2 mx-auto m-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    width={250}
                                    src={items.img}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{items.name}</h4>
                                    <p className="card-text">
                                        {items.description}
                                    </p>
                                    <p>Price: ${items.price}</p>
                                    <p>Supplier: {items.supplier}</p>
                                    <p className="fs-5 fw-semibold">
                                        Quantity: {items.quantity}
                                    </p>
                                    <Button
                                        onClick={() => deleteItems(items._id)}
                                        className="item-button rounded-pill px-4 py-2"
                                    >
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

export default MyItems;
