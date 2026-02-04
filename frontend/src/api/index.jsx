import axios from "axios";

const api = axios.create({
  // baseURL: "/api",
    baseURL: "http://localhost:5001/api",
        // baseURL: "https://task-manager-5y85.onrender.com/api",
});
export default api;
