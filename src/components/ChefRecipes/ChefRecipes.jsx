import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ChefRecipes = () => {
    const chefDetails = useLoaderData()
    const { id, name, picture, shortBio, yearsOfExperience, numberOfRecipes, likes } = chefDetails
    console.log(chefDetails)

    const [foodItems, setFoodItems] = useState([])


    useEffect(() => {
        fetch(`https://b7a10-chef-recipe-hunter-server-side-sohelranalive.vercel.app/cuisine/${id}`)
            .then(res => res.json())
            .then(data => setFoodItems(data))
    }, [])


    return (
        <div>
            <Container className='mt-5 mb-5'>
                <h1 className='text-center text-white fw-bold'>Chef's ID: {id}</h1>
                <h2 className='text-center text-white mb-5'>Details About {name} and his special food items</h2>
                <div className='d-md-flex'>
                    <div className='col col-md-4 p-2'>
                        <div className="card">
                            <img src={picture} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <br />
                                <p className="card-text about">{shortBio}</p>
                                <br />
                                <p className="card-text mb-0">Numbers of Recipes: {numberOfRecipes}</p>
                                <p className="card-text">Years of Experience: {yearsOfExperience}</p>
                                <p className="card-text mb-0 ms-2">Reviews: </p>
                                <p>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={likes}
                                        readOnly
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col col-md-8 p-2'>

                        {/* {
                            spinner && <div class="d-flex justify-content-center align-items-center spinner-style">
                                <div className="spinner-border text-light" style={{ width: '5rem', height: '5rem' }} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        } */}
                        {
                            foodItems.map(recipe => <Recipe
                                recipe={recipe}
                                key={recipe._id}
                            >
                            </Recipe>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ChefRecipes;