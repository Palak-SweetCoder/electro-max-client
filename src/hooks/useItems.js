import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://electro-max-server.up.railway.app/items')
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return [items, setItems];
};
export default useItems;
