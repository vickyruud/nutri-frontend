const axios = require("axios");

export const saveComment = (comment) => {
  return axios.post(`/comments`, comment).then((res) => {
    return res.data;
  });
};
