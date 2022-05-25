import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="flex flex-col items-center  bg-gray-200 rounded-lg border shadow-lg shadow-gray-500 dark:shadow-gray-600 xl:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-900 dark:hover:bg-cyan-800">
      <img
        className="object-cover h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={recipe.image_url}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {recipe.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">
          {recipe.description}
        </p>
      </div>
    </div>
  );
}

export default RecipeCard;
