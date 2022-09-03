import axios from "axios";

const API = axios.create({ baseURL: "https://gorest.co.in/public/v2" });

const token = process.env.REACT_APP_TOKEN;

API.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const fecthUsers = (page) => API.get(`/users?page=${page}`);
export const fecthOneUser = (id) => API.get(`/users/${id}`);
export const createUsers = (data) => API.post(`/users`, data);
export const updateUsers = (id, data) => API.patch(`/users/${id}`, data);
export const deleteUsers = (id) => API.delete(`/users/${id}`);
