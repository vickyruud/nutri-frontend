import React from "react";

function RecipeSteps({ steps }) {
  const listSteps = steps.split(".");
  listSteps.pop()

  const arrayList = listSteps.map((item, i) => {
    return <li key={i}>{item}.</li>;
  });

  return (
    <ul className="list-decimal">
      {arrayList}
    </ul>
  );
}

export default RecipeSteps;
