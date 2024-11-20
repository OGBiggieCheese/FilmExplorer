import axios, { AxiosError } from "axios";
const baseUrl = import.meta.env.VITE_DATABASE_URL;

export const serverAxiosInstance = axios.create({
  baseURL: baseUrl,
});

serverAxiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.message) {
      return Promise.reject({
        code: error.status,
        message: error.message,
      });
    }

    return Promise.reject({
      code: "9999",
      message: "Error desconocido",
    });
  }
);