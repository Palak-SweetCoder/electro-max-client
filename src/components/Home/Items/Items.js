import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items, setItems] = useState([]);
    const homeItems = items.slice(0, 6);

    useEffect(() => {
        fetch('https://electro-max-server.up.railway.app/items')
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <>
            <div id="items">
                <h2 className="fw-semibold text-center mt-5 items-header">
                    OUR ITEMS
                </h2>
                <div className="y-line mx-auto"></div>
                <div className="container mt-5 mb-5">
                    <div className=" row row-cols-lg-3 row-cols-md-2 g-4">
                        {homeItems.map((item) => (
                            <Item item={item} key={item._id}></Item>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Items;
