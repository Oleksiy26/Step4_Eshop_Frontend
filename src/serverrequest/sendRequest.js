import axios from 'axios';
import { API_URL } from '../api/API.js';

export const sendRequest = (expansion) =>
  axios
    .get(`${API_URL}/${expansion}`)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
