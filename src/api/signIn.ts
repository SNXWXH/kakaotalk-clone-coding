import { LoginData } from '../types';
import api from './axios';

export const login = (loginData: LoginData) => api.post('/signin', loginData);
