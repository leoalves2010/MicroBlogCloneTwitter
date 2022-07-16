import axios from "axios";

export const ApiService = axios.create({
    baseURL: "https://localhost:3002/api",
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
});