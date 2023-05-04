import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chef from '../Chef/Chef';

const Body = () => {

    const [chefInfo, setChefInfo] = useState([])
    const [dataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        setDataLoading(true)
        fetch('https://b7a10-chef-recipe-hunter-server-side-sohelranalive.vercel.app/')
            .then(res => res.json())
            .then(data => {
                setChefInfo(data)
                setDataLoading(false)
            })
    }, [])

    return (
        <div className='mt-5 mb-5'>
            <h1 className='text-center text-white fw-bold mt-5 mb-5'>Meet the CHEF</h1>

            {/* Spinner loading  start*/}
            <div className={!dataLoading ? 'd-none' : 'block'}>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-light" style={{ width: '5rem', height: '5rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            {/* Spinner loading  end*/}

            <Container className='pb-5'>
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