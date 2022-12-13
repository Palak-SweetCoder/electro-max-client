import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryItems = () => {
    const { itemsId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemsId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, []);

    return (
        <>
            <div className="container mb-5 mt-5">
                <div className="card w-75 p-2 mx-auto">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={item.img}
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.description}</p>
                                <p>Price: ${item.price}</p>
                                <p>Supplier: {item.supplier}</p>
                                <p>quantity: {item.quantity}</p>
                                <button className="item-button rounded-pill px-3 py-2">
                                    Delivered
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InventoryItems;
