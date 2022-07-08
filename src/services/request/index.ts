/* eslint-disable no-param-reassign */
import axios from "axios";
import { AuthService } from "../auth";
import { SharedConfigSerivce } from "../config";

const RequestService = axios.create();

RequestService.defaults.baseURL = SharedConfigSerivce.APP_URL;

RequestService.interceptors.request.use(
  (config) => {
    const authToken = AuthService.getAuthToken();
    if (authToken) {
      config.headers = {
        Authorization: `Bearer ${authToken}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

RequestService.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export { RequestService };
