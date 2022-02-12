import axios from "axios";
import { baseUrl } from "./interceptor";

export const clientDataApi = {
  all: () => {
    return axios.get(`${baseUrl}/client/getalldata`);
  },
  packet: ({ params }) => {
    return axios.get(`${baseUrl}/client/getpaket/${params}`);
  }
};

export const authApi = {
  // signup: (body) => {
  //   return axios.post(`/auth/signup`, body);
  // },
  login: (body) => {
    return axios.post(`${baseUrl}/auth/login`, body);
  },
  refreshToken: (body) => {
    return axios.post(`${baseUrl}/auth/refresh_token`, body);
  },
  logout: (body) => {
    return axios.delete(`${baseUrl}/auth/logout`, body);
  },
  loggedIn: (body) => {
    return axios.post(`${baseUrl}/auth/loggedIn`, body);
  },
};

;