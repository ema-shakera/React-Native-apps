import axios from "axios";

 const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    method: "get",
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

export default API;