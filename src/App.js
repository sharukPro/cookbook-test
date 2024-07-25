import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import chickenImage from './Images/chicken.jpg';
import spaghImage from './Images/Spaghetti-Bolognese.webp';
import hamburgerImage from './Images/hamburger.webp';

const App = () => {
  const [recipes] = useState([
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      author: 'Chef John',
      image: spaghImage,
      ingredients: ['Spaghetti', 'Tomato Sauce', 'Ground Beef'],
      instructions: 'Cook spaghetti. Prepare sauce. Mix together.'
    },
    {
      id: 2,
      name: 'Chicken Curry',
      author: 'Chef Smith',
      image: chickenImage,
      ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'],
      instructions: 'Cook chicken. Add curry powder and coconut milk. Simmer.'
    },
    {
      id: 3,
      name: 'Hamburger',
      author: 'Aravind',
      image: hamburgerImage,
      ingredients: ['Beef', 'Onion', 'Cheese', 'Egg'],
      instructions: 'Grill the patties until the juices run clear and the meat is no longer pink in the center  .'
    },
  ]);

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div style={{ display: 'flex' }}>
      <RecipeList recipes={recipes} onRecipeSelect={handleRecipeSelect} selectedRecipe={selectedRecipe} />
      <RecipeDetails recipe={selectedRecipe} />
    </div>
  );
};

export default App;
