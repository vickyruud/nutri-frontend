const axios = require('axios');

export const fetchComments = () => {
    return axios.get('/comments', {
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((res) => {
        return res.data;        
    })
}

export const fetchRecipes = () => {
  return axios.get('/recipes', {
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((res) => {
        return res.data
    })
}

export const fetchUsers = () => {
  return axios.get('/users', {
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((res) => {
        return res.data
    })
}