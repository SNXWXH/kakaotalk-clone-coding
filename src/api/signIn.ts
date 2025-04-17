import api from './axios';

export const login = (loginData) => api.post('/signin', loginData);
