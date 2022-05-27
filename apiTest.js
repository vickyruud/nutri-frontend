const axios = require('axios');

const nutriInfo = (ingredients) => {
  const query = ingredients.toString()
  console.log(query);
    if (ingredients !== null) {
      axios
        .get(
          `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
          {
            headers: {
              "X-Api-Key": "yFhkwaiAwI1NnhFNsRWEMA==5Adx9bOrBA17c3Jj",
            },
            contentType: "application/json",
          }
        )
        .then((resp) => {
          console.log(resp.data)
        });
    }
};
  
const ingredients = ['125 grams Yogurt', '1 tablespoon Lemon Juice', '1 teaspoon Turmeric', '2 teaspoon Garam Masala', '1 teaspoon Chilli', '1 teaspoon Ground Cumin', '1 tablespoon Ginger', '10 grams Garlic', '750 grams Chicken', '2 tablespoon Ghee', '250 grams tomato puree', '250 grams Cream', '1 tablespoon Sugar', '2 teaspoon Salt']

console.log(nutriInfo(ingredients));