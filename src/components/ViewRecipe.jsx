import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import IngredientsTable from "./IngredientsTable";
import NutriContent from "./NutriContent";
import RecipeSteps from "./RecipeSteps";
import TypeWriterEffect from "react-typewriter-effect";
import { AppContext } from "../App";
import CommentList from "./CommentList";

function ViewRecipe() {
  const { id } = useParams();


  const { dark, user } = useContext(AppContext);

  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const comments = JSON.parse(localStorage.getItem("comments"));


  const chosenComments = comments.filter(
    (comment) => comment.recipe_id === parseInt(id)
  );

  const chosenRecipe = recipes.filter(
    (recipe) => recipe.id === parseInt(id)
  )[0];
  
  //stores recipes and comments in local storage
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
    localStorage.setItem('chosenRecipe', JSON.stringify(chosenRecipe))
    localStorage.setItem('chosenComments', JSON.stringify(chosenComments))
  }, [chosenComments, chosenRecipe])

  const legendColor = dark === "dark" ? "white" : "black";


  return (
    <div className="flex flex-col gap-24 p-5 ml-5 mr-5 dark:bg-cyan-900 w-full">         
      <div className="grid grid-cols-3 gap-8 pt-4 dark:bg-cyan-900">
        <div className="w-xl max-h-96  bg-white rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 overflow-y-hidden">
          <img
            className="rounded-t-lg object-contain h-48 w-48 pt-2  "
            src={chosenRecipe.image_url}
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  dark:text-white">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: legendColor,
                  fontWeight: 500,
                  fontSize: "1.5em",
                }}
                startDelay={10}
                cursorColor={legendColor}
                multiText={[chosenRecipe.name]}
                multiTextDelay={1000}
                typeSpeed={100}
                hideCursorAfterText={true}
              />
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              {chosenRecipe.description}
            </p>
          </div>
        </div>
        <IngredientsTable ingredients={chosenRecipe.ingredients} />
        <NutriContent ingredients={chosenRecipe.ingredients} />
      </div>
      <div className="flex justify-between gap-16 w-full">
        <RecipeSteps steps={chosenRecipe.steps} />
        <CommentList comments={chosenComments} user={user} recipe={chosenRecipe} />
      </div>
    </div>
  );
}

export default ViewRecipe;
