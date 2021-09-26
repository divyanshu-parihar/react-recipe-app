
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
    }],
    url:string
}

const Recipe = ({ title, calories, image, ingredients ,url}: props) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <div dangerouslySetInnerHTML={{__html: `<b>${ingredient.text}</b>`}} />
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <a href={url} target="_blank" rel="noreferrer">Teach me </a>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;