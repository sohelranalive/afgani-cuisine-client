import React, { useState } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = (props) => {

    const recipeInfo = props.recipe;
    const { name, ingredients, cookingMethod, rating } = recipeInfo;

    const [fav, setFav] = useState(false)


    const handleAddToFav = () => {
        setFav(true)
        // toast("Item added your favorite list!")

        toast.success('Added to favorite !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <div className="card mb-3">
            <div className="card-header text-end">
                {
                    fav
                        ? <button disabled className='btn btn-light'>Add to Favorite <IoIosHeart /></button>
                        : <button onClick={handleAddToFav} className='btn btn-light'>Add to Favorite <IoIosHeartEmpty />
                            <ToastContainer />
                        </button>
                }
            </div>
            <div className="card-body">
                <h5 className="card-title">Recipe Name: {name}</h5>
                <br />
                <p className="card-text">Ingredients: {ingredients.join(', ')}</p>
                <p className="card-text about">How to cook: {cookingMethod}</p>
                <br />
                <p className="card-text about">Ratings: {rating}</p>
            </div>
        </div>
    );
};

export default Recipe;