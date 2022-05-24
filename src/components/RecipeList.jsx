import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeList({ recipes }) {
  

  const arrayOfRecipes = recipes.map(recipe => {
    return (
      <RecipeCard key={recipe.id} recipe={recipe} />
    )
  })

  return (
    <div className='grid grid-cols-3 gap-4 m-4'>
      {arrayOfRecipes}
    </div>
  )
}

export default RecipeList