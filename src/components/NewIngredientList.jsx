import React from "react";
import NewIngredient from "./NewIngredient";

function NewIngredientList({ ingredients, setIngredients }) {
  const arrayOfNewIngredients = [...new Array(3)].map((item, i) => {
    return (
      <NewIngredient
        key={i}
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
    );
  });

  return <div>{arrayOfNewIngredients}</div>;
}

export default NewIngredientList;
