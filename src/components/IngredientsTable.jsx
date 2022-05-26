/* eslint no-eval: 0 */

import React from "react";

function IngredientsTable({ ingredients }) {
  const jsonIngredients = eval(ingredients);

  const arrayOfRows = jsonIngredients.map((ingredient, i) => {
    return (
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          key={i}
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          {ingredient.name}
        </th>
        <td className="px-6 py-4">{ingredient.quantity}</td>
        <td className="px-6 py-4">{ingredient.unit} </td>
      </tr>
    );
  });

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Ingredient
            </th>
            <th scope="col" class="px-6 py-3">
              Quantity
            </th>
            <th scope="col" class="px-6 py-3">
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
