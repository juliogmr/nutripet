import axios from 'axios';

export default function getProdutos() {
    const endpoint = process.env.REACT_APP_BACKEND_URL + "/produtos/listarProdutos";

    return axios.get(endpoint)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return [];
      })
}