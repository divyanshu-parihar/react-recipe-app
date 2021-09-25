const getRecipies = async (
  query: string,
  APP_ID: string,
  APP_KEY: string,
  setRecipes: Function
) => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json();
  setRecipes(data.hits);

};

export default getRecipies;
