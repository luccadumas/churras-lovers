import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'http://localhost:1337/api/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + Cookies.get('token'),
  },
});

// Adicione um interceptor para modificar os headers antes de cada requisição
api.interceptors.request.use(
  (config) => {
    // Verifica se o usuário está logado (tem um token)
    const userToken = Cookies.get('token');
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  (error) => {
    // Faça algo com o erro da requisição
    return Promise.reject(error);
  }
);

export default api;
