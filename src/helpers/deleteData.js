const axios = require("axios");

export const deleteComment = (id) => {
  return axios.delete(`/comments/${id}`).then((res) => {
    return res.data;
  });
};
