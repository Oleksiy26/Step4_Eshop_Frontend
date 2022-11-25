import axios from "axios";
export const API_URL = "http://localhost:5000/api";

export const getProducts = (route) =>
  axios
    .get(`${API_URL}/${route}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return {
        products: err.data,
        status: err.status,
        statusText: err.statusText,
      };
    });
