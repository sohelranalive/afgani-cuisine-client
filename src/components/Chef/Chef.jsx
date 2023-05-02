import React from 'react';

const Chef = (props) => {

    const { picture, name, yearsOfExperience, numberOfRecipes, likes } = props.info;

    return (
        <div className="col">
            <div className="card h-100 shadow-lg p-4 bg-white rounded">
                <img src={picture} className="card-img-top w-100 h-100" alt="..." />
                <div className="card-body text-start">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Years Of Experience: {yearsOfExperience}</p>
                    <p className="card-text">Numbers Of Recipe: {numberOfRecipes}</p>
                    <p>{likes} People liked this</p>
                </div>
                <button className='btn btn-danger'>View Recipe</button>
            </div>
        </div>
    );
};

export default Chef;