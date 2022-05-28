import React from "react";
import { useParams } from "react-router-dom";
import IngredientsTable from "./IngredientsTable";
import NutriContent from "./NutriContent";
import RecipeSteps from "./RecipeSteps";

function ViewRecipe() {
  const { id } = useParams();

  const recipes = JSON.parse(localStorage.getItem("recipes"));

  const chosenRecipe = recipes.filter(
    (recipe) => recipe.id === parseInt(id)
  )[0];


  return (
    <div className="flex flex-col gap-5 p-5 ml-5 mr-5 dark:bg-cyan-900 w-full">
    <div className="grid grid-cols-3 gap-8 pt-4 dark:bg-cyan-900">
      <div className="w-xl max-h-96  bg-white rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 overflow-y-auto">
          <img
            className="rounded-t-lg object-cover h-48 w-96  "
            src={chosenRecipe.image_url}
            alt=""
            />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  dark:text-white">
              {chosenRecipe.name}
            </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
            {chosenRecipe.description}
          </p>          
        </div>
      </div>
      <IngredientsTable ingredients={chosenRecipe.ingredients} />
      <NutriContent ingredients={chosenRecipe.ingredients}/>
      </div>
      <div className="w-4/6 max-h-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-y-scroll pl-7 pr-5">
        <h1 className="font-bold underline text-2xl mb-5">Steps</h1>
        <RecipeSteps steps={chosenRecipe.steps}/>
      </div>
      
  </div>
  );
}

export default ViewRecipe;
