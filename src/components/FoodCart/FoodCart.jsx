import React from 'react';

const FoodCart = ({ singleFoodItem }) => {

    const { name, description, imageUrl } = singleFoodItem
    console.log('Inside foodCart', singleFoodItem);

    return (
        <div className="col">
            <div className="card h-100 p-2">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;