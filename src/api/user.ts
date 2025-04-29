import { LoginData, ProfileData, RegisterData } from '../types';
import api from './axios';

export const login = (loginData: LoginData) => api.post('/signin', loginData);

export const register = (registerData: RegisterData) =>
  api.post('/signup', registerData);

export const getUserInfo = () =>
  api.get('/users/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

export const profile = (profileData: ProfileData) =>
  api.patch('/users/me', profileData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
