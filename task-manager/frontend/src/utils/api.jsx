import axios from "axios"
// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: '/',
});

export default api