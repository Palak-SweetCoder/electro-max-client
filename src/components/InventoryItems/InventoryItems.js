import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryItems = () => {
    const { itemsId } = useParams();

    return (
        <div>
            <h1>Here is your inventory item: {itemsId}</h1>
        </div>
    );
};

export default InventoryItems;
