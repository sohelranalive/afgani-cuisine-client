import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import FoodCart from '../FoodCart/FoodCart';

const Food = () => {

    const [foodItems, setFoodItems] = useState([])

    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-sohelranalive.vercel.app/food')
            .then(res => res.json())
            .then(data => setFoodItems(data))
    }, [])

    return (
        <div className='mt-5 mb-5'>
            <h1 className='text-center text-white fw-bold mt-5 mb-5'>Best Afagani Cuisine You Must Try</h1>
            <Container className='pb-5'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        foodItems.map(singleFoodItem => <FoodCart
                            singleFoodItem={singleFoodItem}
                            key={singleFoodItem.id}
                        >
                        </FoodCart>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Food;