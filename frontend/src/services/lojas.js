import axios from 'axios';

export function getLojas() {
  const endpoint = process.env.REACT_APP_BACKEND_URL + "/lojas/listarLojas";

  return axios.get(endpoint)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return [];
    });
}