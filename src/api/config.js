import axios from 'axios';

const madeinheavenApi = axios.create({
    baseURL: 'https://madeinheaven.onrender.com/api'
});

madeinheavenApi.interceptors.request.use(config => {
    config.headers = {
        'x-token': localStorage.getItem('token'),
    }

    return config;
});

export default madeinheavenApi;