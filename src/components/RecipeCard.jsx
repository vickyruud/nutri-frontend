import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  console.log(recipe);
  return (
    <div className="flex flex-col items-center  bg-gray-200 rounded-lg border shadow-lg shadow-gray-500 dark:shadow-gray-600 xl:flex-row  hover:bg-gray-100 dark:border-gray-500 dark:bg-teal-900 dark:hover:bg-teal-800">
      <div class="w-64 h-64 bg-red-100 relative">
        <div
          class="absolute inset-0 bg-cover bg-center z-0"
          style={{backgroundImage : `url(${recipe.image_url})`}}
        ></div>
        <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-end items-center text-2xl text-gray-800 font-semibold bg-red-500  dark:text-white  dark:bg-gray-800 dark:border-gray-700 ">
          {recipe.name}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
