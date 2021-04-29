import axios from 'axios';

const api = axios.create({
    baseURL: "http://stgfidelidade.ddns.net/appmedico2/appAPI"
});

export default api;

