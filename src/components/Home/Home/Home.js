import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import OurPartners from '../OurPartners/OurPartners';
import UsersOutline from '../UsersOutline/UsersOutline';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <UsersOutline></UsersOutline>
            <OurPartners></OurPartners>
        </>
    );
};

export default Home;
