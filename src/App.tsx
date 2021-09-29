import { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import getRecipies from './utils/getRecipies';
import './App.css'
import Recipe from './components/Recipe';
import dotenv from 'dotenv';
import {props} from './components/Recipe'
dotenv.config();
type recipe = {
  recipe: {
    uri: string;
    label: string;
    image: string;
    recipe:props
    calories: number;
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
    url:string;
  }
}


function App() {
  const [recipes, setRecipes] = useState<[]>([]);
  const [query, setQuery] = useState<string>('pasta');
  const [loading, setloading] = useState(true)
  const [buttonText, setButtonText] = useState("submit");
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();
    setloading(true);
    setButtonText("Loading");
    getRecipies(query, process.env.REACT_APP_API_APP_ID!, process.env.REACT_APP_API_APP_SECRET!, setRecipes);
    setButtonText("Submit");
    setloading(false);

  }
  useEffect(() => {
    setloading(state => !state);
    setButtonText("Loading");
    getRecipies(query, process.env.REACT_APP_API_APP_ID!, process.env.REACT_APP_API_APP_SECRET!, setRecipes);
    
    setloading(state => !state);
    setButtonText("Loading");
    setButtonText("Submit")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-bar" type='text' onChange={(e) => setQuery(e.target.value)} placeholder="search"></input>
        <button className="search-button" type='submit' disabled={loading} value={buttonText}>{buttonText}</button>
      </form>
      {!loading ?(recipes.map((recipe: recipe) => {
        return <Recipe url={recipe.recipe.url} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} calories={recipe.recipe.calories} title={recipe.recipe.label} key={recipe.recipe.label} />;
      })):<p>Developer is just lazy to add a loading state . Sorry!</p>}
    </div>
  );
}

export default App;
