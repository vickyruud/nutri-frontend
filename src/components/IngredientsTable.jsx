/* eslint no-eval: 0 */

import React from 'react';

function IngredientsTable({ ingredients }) {


  const jsonIngredients = eval(ingredients);

  const arrayOfRows = jsonIngredients.map((ingredient, i ) => {
    return (
      <tr key={i} className="border-2 border-gray-800 ">
        <td>{ingredient.name}</td>
        <td>{ingredient.quantity}</td>
        <td>{ingredient.unit} </td>
      </tr>
    )
  })

  return (
    <table className="table-auto text-white">
  <thead>
    <tr>
      <th>Ingredient</th>
      <th>Quantity</th>
      <th>Unit</th>
    </tr>
  </thead>
  <tbody>
    {arrayOfRows}
  </tbody>
</table>
  )
}

export default IngredientsTable