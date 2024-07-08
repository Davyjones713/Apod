import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod",
  params: {
    api_key: "F3CSSgHCgdYVepCz5jua2rYEdpRR5FW5bRYjF9qT",
  },
});

export default axiosInstance;
