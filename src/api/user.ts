import { LoginData, RegisterData } from '../types';
import api from './axios';

export const login = (loginData: LoginData) => api.post('/signin', loginData);
export const register = (registerData: RegisterData) =>
  api.post('/signup', registerData);
