import React, { useEffect } from 'react';
import RecipeList from './RecipeList';

function MyRecipes({ user, recipes }) {

  const myRecipes = recipes.filter(recipe => recipe.user_id === user.id)
  console.log(user);
  
  return (
    <div>
      {myRecipes && <RecipeList recipes={myRecipes}/> }      
    </div>
  )
}

export default MyRecipes