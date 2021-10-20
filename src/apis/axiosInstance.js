import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

instance.defaults.headers.common["Authorization"] = "Auth from instance";

instance.interceptors.request.use((request) => {
  console.log("request : ", request);
  return request;
});

instance.interceptors.response.use((response) => {
  console.log("response : ", response);
  return response;
});

export default instance;
