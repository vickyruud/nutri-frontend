import React from "react";
import { Link } from 'react-router-dom';


function RecipeCard({ recipe }) {
  return (
      <div className="flex flex-col items-center  bg-gray-200 rounded-lg border shadow-lg shadow-gray-500 dark:shadow-gray-600 xl:flex-row  hover:bg-gray-100 dark:border-gray-500 dark:bg-teal-900 dark:hover:bg-teal-800">
        <img
          className="object-cover h-48 w-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={recipe.image_url}
          alt=""
        />
        <div className="flex flex-col cursor-pointer justify-between p-4 leading-normal">
          <Link to={`/recipes/${recipe.id}`} className="mb-2 underline text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {recipe.name}
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            {recipe.description}
          </p>
        </div>
      </div>
  );
}

export default RecipeCard;
