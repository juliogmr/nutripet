import axios from 'axios';

export default function getVeterinarios() {
    const endpoint = "http://localhost:8080/nutripet/veterinarios/listarVeterinarios";

    return axios.get(endpoint)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return [];
      })
}