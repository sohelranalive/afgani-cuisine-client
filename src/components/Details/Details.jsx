import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const chefDetails = useLoaderData()
    const { id, picture } = chefDetails
    console.log(chefDetails)

    useEffect(() => {
        fetch(`http://localhost:5000/cuisine/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


    return (
        <div className='bg-custom-color-light pb-5 pt-5 text-white'>
            <Container>
                <h1 className='text-center'>Chef's ID: {id}</h1>
                <div className='d-md-flex'>
                    <div className='col col-md-4 border p-4'>
                        <div className="card">
                            <img src={picture} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col col-md-8 border p-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia facilis exercitationem commodi beatae cupiditate soluta quod rerum vitae aliquid corrupti vero sed quis blanditiis earum natus pariatur odio magni repellat ducimus modi aspernatur, quos assumenda. Labore distinctio architecto placeat impedit, eaque debitis cupiditate inventore harum voluptatum, hic amet ducimus optio doloribus. Quis eius reiciendis vel sint! Excepturi nesciunt similique velit! Totam eius, nostrum reiciendis, reprehenderit, ullam saepe voluptatibus praesentium ducimus accusamus eligendi magni aliquam deserunt voluptatem earum pariatur ex facere omnis tempore accusantium delectus aut dicta. Consequatur sed quaerat, tempora non ipsum, adipisci exercitationem, harum ea inventore quis a!
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Details;