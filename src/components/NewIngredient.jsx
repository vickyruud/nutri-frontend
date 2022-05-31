import React, { useState } from "react";

function NewIngredient({setIngredients, ingredients}) {

  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    const newIngredientObj = {
      name,
      unit,
      quantity
    }
    setIngredients([...ingredients, newIngredientObj])
  }

  return (
    <div className="flex border border-teal-500 p-5 mb-5">
      <input
        className="appearance-none bg-transparent border w-48 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Ingredient Name"
        aria-label="Name"
        onChange={(event) => {setName(event.target.value)}}
      />
       <input
        className="appearance-none bg-transparent border w-48 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Unit"
        aria-label="Unit"
        onChange={(event) => {setUnit(event.target.value)}}
      />  
      <input
        className="appearance-none bg-transparent border w-48 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Quantity"
        aria-label="Quantity"
        onChange={(event) => {setQuantity(event.target.value)}}

      /> 
      <button
        className="flex-shrink-0  bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 m-2 rounded"
        onClick={onSave}
      >
        Save
      </button>
      <button
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 m-2 rounded"
      >
        +
      </button>
      <button
        className="flex-shrink-0 border-transparent border-4 bg-red-500 text-white hover:text-teal-800 text-sm py-1 px-2 m-2 rounded"
      >
        -
      </button>
    </div>
  );
}

export default NewIngredient;
