import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefRecipes = () => {
    const chefDetails = useLoaderData()
    const { id, name, picture, shortBio, yearsOfExperience, numberOfRecipes, likes } = chefDetails
    console.log(chefDetails)

    const [foodItems, setFoodItems] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/cuisine/${id}`)
            .then(res => res.json())
            .then(data => setFoodItems(data))
    }, [])

    return (
        <div className='bg-custom-color-light pb-5 pt-5'>
            <Container>
                <h1 className='text-center text-white fw-bold'>Chef's ID: {id}</h1>
                <h3 className='text-center text-white'>{name}'s special food items</h3>
                <div className='d-md-flex'>
                    <div className='col col-md-4 p-2'>
                        <div className="card">
                            <img src={picture} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <br />
                                <p className="card-text about">{shortBio}</p>
                                <br />
                                <p className="card-text ">{likes} Pople liked !!!</p>
                                <p className="card-text">Numbers of Recipes: {numberOfRecipes}</p>
                                <p className="card-text">Years of Experience: {yearsOfExperience}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col col-md-8 p-2'>
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