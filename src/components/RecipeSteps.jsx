import React from "react";

function RecipeSteps({ steps }) {
  const listSteps = steps.split(".");
  listSteps.pop();

  const arrayList = listSteps.map((item, i) => {
    return <li key={i}>{item}.</li>;
  });

  return (
    <div className="w-3/6 max-h-96 bg-white rounded-lg border border-gray-200 shadow-xl  dark:bg-gray-800 dark:border-gray-700 overflow-y-auto pl-7 pr-5">
      <h1 className="font-bold text-2xl mt-5">How do I make it?</h1>
      <ul className="list-decimal p-4">{arrayList}</ul>
    </div>
  );
}

export default RecipeSteps;
