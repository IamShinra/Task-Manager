import axios from "axios";

const api = axios.create({
  // baseURL: "/api",
    // baseURL: "https://task-manager-17d1.onrender.com/api",
      baseURL: process.env.REACT_APP_API_URL || "http://localhost:5001/api",
      //updating for both production and local lvl

    
});
export default api;
