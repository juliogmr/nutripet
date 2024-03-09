import axios from 'axios';

export default function getVeterinarios() {
    const endpoint = process.env.REACT_APP_BACKEND_URL + "/veterinarios/listarVeterinarios";

    return axios.get(endpoint)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return [];
      })
}