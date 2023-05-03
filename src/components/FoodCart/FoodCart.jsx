import React from 'react';

const FoodCart = ({ singleFoodItem }) => {

    const { name, description, imageUrl } = singleFoodItem
    console.log('Inside foodCart', singleFoodItem);

    return (
        <div className="col">
            <div class="card h-100 p-2">
                <img src={imageUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;