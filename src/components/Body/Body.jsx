import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chef from '../Chef/Chef';

const Body = () => {

    const [chefInfo, setChefInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setChefInfo(data))
    }, [])

    return (
        <div className='text-center bg-custom-color-light pb-4'>
            <h1 className='pt-5 text-white fw-bold'>Meet the CHEF</h1>
            <Container className='mt-4 mb-4'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        chefInfo.map(chef => <Chef
                            info={chef}
                            key={chef.id}
                        ></Chef>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default Body;