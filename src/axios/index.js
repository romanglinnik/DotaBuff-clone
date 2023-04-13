import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.opendota.com/api/",
})

export default axiosInstance