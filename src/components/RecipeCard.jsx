import React from 'react';

function RecipeCard({ recipe }) {
  return (    
    <a href='https://www.google.com/' class="flex flex-col items-center  bg-gray-200 rounded-lg border shadow-lg shadow-gray-500 dark:shadow-gray-600 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={recipe.image_url} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">{recipe.name}</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{recipe.description}</p>
    </div>
    </a>

  )
}

export default RecipeCard