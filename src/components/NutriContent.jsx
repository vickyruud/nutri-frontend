/* eslint no-eval: 0 */

import { useState, useEffect } from "react";
import axios from "axios";
import DonutChart from "./DonutChart";

function NutriContent({ ingredients }) {
  const [graphData, setGraphData] = useState([]);
  const rows = eval(ingredients);

  const formatIngredients = rows.map((ingredient) => {
    return ` ${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`;
  });

  const nutriInfo = (ingredients) => {
    if (ingredients !== null) {
      axios
        .get(
          `https://api.calorieninjas.com/v1/nutrition?query=` + ingredients,
          {
            headers: {
              "X-Api-Key": process.env.REACT_APP_API_KEY,
            },
            contentType: "application/json",
          }
        )
        .then((resp) => {
          generateGraphData(resp.data.items);
        });
    }
  };
  const generateGraphData = (information) => {
    let carb = 0;
    let fat = 0;
    let fiber = 0;
    let sugar = 0;
    let protein = 0;

    information.forEach((element) => {
      carb += element.carbohydrates_total_g;
      fat += element.fat_total_g;
      fiber += element.fiber_g;
      sugar += element.sugar_g;
      protein += element.protein_g;
    });

    const arrayOfData = [carb, protein, sugar, fat, fiber];

    const roundedData = arrayOfData.map((data) => {
      return Math.round(data * 100) / 100;
    });

    setGraphData(roundedData);
  };

  useEffect(() => {
    nutriInfo(formatIngredients);
  // eslint-disable-next-line
  }, [ingredients]);

  return (
    <div>
      <DonutChart data={graphData} />
    </div>
  );
}

export default NutriContent;
