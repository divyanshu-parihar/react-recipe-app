
import React from 'react';
import style from '../modules/recipe.module.css';

export type props = {
    title: string,
    calories: number,
    image: string,
    ingredients: [{
        text: string,
        quantity: number,
        measure: string,
        food: string,
        weight: number,
        foodCategory: string,
        foodId: string,
        image: string
    }]
}

const Recipe = ({ title, calories, image, ingredients }: props) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;