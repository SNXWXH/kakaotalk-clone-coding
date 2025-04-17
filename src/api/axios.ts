import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  //! 일단 as로 타입 설정
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
