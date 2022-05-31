import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { saveRecipe } from "../helpers/saveData";
import NewIngredient from "./NewIngredient";
import NewIngredientList from "./NewIngredientList";

function NewRecipe({ setShowModal }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");
  const [servings, setServings] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const { createNewRecipe, user } = useContext(ThemeContext);

  const closeModal = (event) => {
    event.preventDefault();
    setShowModal(false);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipeObj = {
      user_id:user.id,
      name,
      description,
      steps,
      servings,
      cooking_time: cookingTime,
      ingredients: JSON.stringify(ingredients)
    };
    console.log(newRecipeObj);
    createNewRecipe(newRecipeObj);
  }

 


  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 dark:bg-teal-700 overflow-auto">
      <h3 className="text-2xl pt-5 font-bold text-center">
        Create a new recipe
      </h3>
      <form className="p-5 border-2 border-gray-800 m-5" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group pt-4">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 h-16  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer overflow-y-auto"
            placeholder=" "
            required=""
            onChange={(event) => setName(event.target.value)}
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group pt-4">
          <textarea
            type="text"
            name="description"
            id="description"
            className="block py-2.5 h-16  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer overflow-y-auto"
            placeholder=" "
            required=""
            onChange={(event) => setDescription(event.target.value)}
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full group pt-4">
          <textarea
            type="text"
            name="steps"
            id="steps"
            className="block py-2.5 h-32 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={(event) => setSteps(event.target.value)}
          />
          <label
            htmlFor="steps"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Steps
          </label>
        </div>

        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 w-full mt-5 mb-5 group">
            <input
              type="number"
              min="0"
              name="servings"
              id="servings"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              onChange={(event) => setServings(event.target.value)}
            />
            <label
              htmlFor="servings"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Servings
            </label>
          </div>
          <div className="relative z-0 w-full mt-5 mb-5 group">
            <input
              type="number"
              min="0"
              name="cooking_time"
              id="cooking_time"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              onChange={(event) => setCookingTime(event.target.value)}
            />
            <label
              htmlFor="cooking_time"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Cooking Time(mins)
            </label>
          </div>
        </div>
        <NewIngredientList
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
        <div className="flex flex-row justify-between">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <button
            type="submit"
            onClick={closeModal}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewRecipe;
