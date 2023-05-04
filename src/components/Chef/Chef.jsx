import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Chef = (props) => {

    const { picture, name, yearsOfExperience, numberOfRecipes, likes, id } = props.info;

    return (
        <div className="col">
            <div className="card h-100 shadow-lg p-4 bg-white rounded">
                <img src={picture} className="card-img-top w-100 h-100" alt="..." />
                <div className="card-body text-start">
                    <h5 className="card-title">{name}</h5>
                    <br />
                    <p className="card-text mb-0">Years Of Experience: {yearsOfExperience}</p>
                    <p className="card-text">Numbers Of Recipe: {numberOfRecipes}</p>
                    <p className='mb-0 fs-4 ms-0'>Ratings:</p>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={likes}
                        readOnly
                        className='ms-0'
                    />
                </div>
                <Link className='my-button' to={`/chef_recipes/${id}`} >View Recipe</Link>
            </div>
        </div>
    );
};

export default Chef;