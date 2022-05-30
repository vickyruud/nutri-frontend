import React from "react";

function RecipeSteps({ steps }) {
  const listSteps = steps.split(".");
  listSteps.pop();

  const arrayList = listSteps.map((item, i) => {
    return <li className="w-full" key={i}>{item}.</li>;
  });

  return (
    <div className="flex flex-col bg-white rounded-lg border border-gray-200 w-full shadow-xl  max-h-96 dark:bg-gray-800 dark:border-gray-700 overflow-y-auto pl-7 pr-5">
      <h1 className="font-bold text-2xl mt-5 border-b-2 border-gray-800">How do I make it?</h1>
      <ul className="list-decimal p-4 w-full ">{arrayList}</ul>
    </div>
  );
}

export default RecipeSteps;
