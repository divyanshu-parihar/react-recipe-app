import { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import getRecipies from './utils/getRecipies';
import './App.css'
import Recipe from './components/Recipe';
type recipe = {
  recipe: {
    uri: string;
    label: string;
    image: string;
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
  }
}


function App() {
  const [recipes, setRecipes] = useState<[]>([]);
  const [query, setQuery] = useState<string>('chicken');
  const [loading, setloading] = useState(true)
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();
    setloading(true);
    getRecipies(query, "5eebe68b", "9764673ef850323778f542dc200048d1", setRecipes);
    setloading(false);

  }
  useEffect(() => {
    getRecipies("chicken", "5eebe68b", "9764673ef850323778f542dc200048d1", setRecipes);
    setloading(false);
  }, [])
  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-bar" type='text' onChange={(e) => setQuery(e.target.value)} placeholder="search"></input>
        <button className="search-button" type='submit' disabled={loading}>submit</button>
      </form>
      {recipes.map((recipe: recipe) => {
        // console.log(recipe.label)
        return <Recipe image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} calories={recipe.recipe.calories} title={recipe.recipe.label} key={recipe.recipe.label} />;
      })}
    </div>
  );
}

export default App;
