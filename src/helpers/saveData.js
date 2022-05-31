const axios = require("axios");

export const saveComment = (comment) => {
  return axios.post(`/comments`, comment).then((res) => {
    return res.data;
  });
};

export const saveRecipe = (recipe) => {
  return axios.post(`/recipes`, recipe).then((res) => {
    return res.data;
  });
};

