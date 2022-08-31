import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:4001/api/v1`
});

instance.interceptors.request.use(  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
});

export default instance;