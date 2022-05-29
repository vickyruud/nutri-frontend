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