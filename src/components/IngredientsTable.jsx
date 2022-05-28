/* eslint no-eval: 0 */

import React from "react";

function IngredientsTable({ ingredients }) {
  const jsonIngredients = eval(ingredients);

  const arrayOfRows = jsonIngredients.map((ingredient, i) => {
    return (
      <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th          
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap  capitalize"
        >
          {ingredient.name}
        </th>
        <td className="px-6 py-4">{ingredient.quantity}</td>
        <td className="px-6 py-4">{ingredient.unit} </td>
      </tr>
    );
  });

  return (
    <div className="relative overflow-x-auto h-96 shadow-xl sm:rounded-lg overflow-scroll">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Ingredient
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Unit
            </th>
          </tr>
        </thead>
        <tbody>{arrayOfRows}</tbody>
      </table>
    </div>
  );
}

export default IngredientsTable;
