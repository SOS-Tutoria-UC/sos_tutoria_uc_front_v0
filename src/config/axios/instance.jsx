import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_PRODUCTION}/api/v1`
});

instance.interceptors.request.use(  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
});

export default instance;