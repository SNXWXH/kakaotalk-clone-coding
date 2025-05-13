import { LoginData, ProfileData, RegisterData } from '../types';
import api from './axios';

export const login = (loginData: LoginData) => api.post('/signin', loginData);

export const register = (registerData: RegisterData) =>
  api.post('/signup', registerData);

export const getUserInfo = () => api.get('/users/me');

export const profileUpdate = (profileData: ProfileData) =>
  api.patch('/users/me', profileData);
