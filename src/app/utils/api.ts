import axios from "axios"
import Cookies from "./cookie";


const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use(async config => {
    const token = await Cookies.get('token');
    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;