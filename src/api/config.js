import axios from 'axios';
import { getVariablesEnv } from '../helpers/getVariablesEnv';

const { VITE_URL_API } = getVariablesEnv();

const madeinheavenApi = axios.create({ baseURL: VITE_URL_API });

madeinheavenApi.interceptors.request.use(config => {
    config.headers = {
        'x-token': localStorage.getItem('token'),
    }

    return config;
});

export default madeinheavenApi;