import React from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';

const Home = () => {

    return (
        <>
            <div className='bg-custom-color'>
                <Banner></Banner>
            </div>
            <Body></Body>
        </>
    );
};

export default Home;