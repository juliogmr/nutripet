import axios from 'axios';

export function getProdutos() {
    const endpoint = process.env.REACT_APP_BACKEND_URL + "/produtos/listarProdutos";

    return axios.get(endpoint)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return [];
      });
}

export function getProdutosPorLoja(idLoja) {
  const endpoint = process.env.REACT_APP_BACKEND_URL + "/lojas/" + idLoja + "/listarProdutos";

  return axios.get(endpoint)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return []
    });
}