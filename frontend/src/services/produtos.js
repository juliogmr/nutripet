import axios from 'axios';

export function getProdutos() {
    const endpoint = "http://localhost:8080/nutripet/produtos/listarProdutos";

    return axios.get(endpoint)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return [];
      });
}

export function getProdutosPorLoja(idLoja) {
  const endpoint =  "http://localhost:8080/nutripet/lojas/" + idLoja + "/listarProdutos";

  return axios.get(endpoint)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return []
    });
}