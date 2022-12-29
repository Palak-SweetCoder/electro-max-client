import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const navigate = useNavigate();
    const [items] = useItems([]);
    const homeItems = items.slice(0, 6);

    const navigateToManageInventories = () => {
        navigate('/manage-inventories');
    };

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
            <div className="text-center">
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

export default Items;
