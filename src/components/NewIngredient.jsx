import React, { useState } from "react";

function NewIngredient() {

  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
    <div class="flex border border-teal-500 p-5 mb-5">
      <input
        class="appearance-none bg-transparent border w-48 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Ingredient Name"
        aria-label="Name"
        onChange={(event) => {setName(event.target.value)}}
      />
       <input
        class="appearance-none bg-transparent border w-48 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Unit"
        aria-label="Unit"
        onChange={(event) => {setUnit(event.target.value)}}
      />  
      <input
        class="appearance-none bg-transparent border w-48 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Quantity"
        aria-label="Quantity"
        onChange={(event) => {setQuantity(event.target.value)}}

      />  
      <button
        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
      >
        Add another
      </button>
      <button
        class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
        type="button"
      >
        Delete Ingredient
      </button>
    </div>
  );
}

export default NewIngredient;
