import React from 'react';
import RecipeList from './RecipeList';

function MyRecipes({ user, recipes }) {

  const myRecipes = recipes.filter(recipe => recipe.user_id === user.id)
  
  return (
    <div>
      {myRecipes && <RecipeList recipes={myRecipes}/> }      
    </div>
  )
}

export default MyRecipes