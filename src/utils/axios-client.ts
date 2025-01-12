import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
process.env.NODE_ENV == "production"
  ? process.env.NEXT_PUBLIC_API_BASE_URL
  : process.env.NEXT_PUBLIC_API_LOCAL_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosInstance;
