import axios from 'axios';

export function getLojas() {
  const endpoint = "http://localhost:8080/nutripet/lojas/listarLojas";

  return axios.get(endpoint)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return [];
    });
}