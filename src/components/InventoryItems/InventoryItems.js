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
        <div>
            <h1>Here is your inventory item: {item.name}</h1>
        </div>
    );
};

export default InventoryItems;
