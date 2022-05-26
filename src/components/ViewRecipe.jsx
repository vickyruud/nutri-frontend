import React from "react";
import { useParams } from "react-router-dom";
import IngredientsTable from "./IngredientsTable";

function ViewRecipe() {
  
  const { id } = useParams();

  const recipes = JSON.parse(localStorage.getItem('recipes'));

  const chosenRecipe = recipes.filter((recipe) => recipe.id === parseInt(id))[0];

  console.log(chosenRecipe);


  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="flex flex-row flex-wrap w-fit h-96 bg-white rounded-lg border shadow-lg shadow-gray-500 dark:shadow-gray-600  hover:bg-gray-100 dark:border-gray-500 dark:bg-teal-900 dark:hover:bg-teal-800">
        <img
          className="object-cover h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={chosenRecipe.image_url}
          alt=""
        />
        <div className="flex flex-col items-center">
        <p className="p-4 ml-4">Name: {chosenRecipe.name}</p>
        <p className="p-4 ml-4">Servings: {chosenRecipe.servings}</p>
        <p className="p-4 ml-4">Cooking Time: {chosenRecipe.cooking_time}</p>
        </div>

        <div className="flex flex-col cursor-pointer justify-between p-4 leading-normal">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            {chosenRecipe.description}
          </p>
        </div>
       
      </div>
      <IngredientsTable ingredients={chosenRecipe.ingredients} />
      <div>
        Graph
      </div>
    </div>
  );
}

export default ViewRecipe;
