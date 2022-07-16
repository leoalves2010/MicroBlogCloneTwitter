import axios from "axios";

export const ApiService = axios.create({
    baseURL: "http://localhost:3002/api",
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
});