import axios from "axios";
export const API_URL = "http://localhost:5000/api";

export const getProducts = (route) =>
  axios
    .get(`${API_URL}/${route}`)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
