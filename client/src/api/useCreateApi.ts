import axios from "axios";

const useCreateApi = () => {
  const api = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
  });

  api.interceptors.request.use(
    (config) => {
      const csrfToken = localStorage.getItem("csrfToken");
      if (csrfToken) {
        config.headers["X-CSRF-TOKEN"] = csrfToken;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => {
      if (response.headers["x-csrf-token"]) {
        localStorage.setItem("csrfToken", response.headers["x-csrf-token"]);
      }
      return response;
    },
    (err) => Promise.reject(err)
  );

  return api;
};

export default useCreateApi;
