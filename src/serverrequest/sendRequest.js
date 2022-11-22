import axios from 'axios';
import { API_URL } from "../api/API.js"

export const sendRequest = ()=> axios
  .get(`${API_URL}/products`)
  .then((products) => {
    console.log(products);
  })
  .catch((err) => {
    console.log(err);
  });
