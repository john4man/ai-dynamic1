import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }),
  register: (email: string, password: string, role: string) => 
    api.post('/auth/register', { email, password, role }),
};

export const business = {
  create: (data: any) => api.post('/businesses', data),
  get: (id: string) => api.get(`/businesses/${id}`),
  update: (id: string, data: any) => api.patch(`/businesses/${id}`, data),
};

export const chat = {
  sendMessage: (businessId: string, message: string) => 
    api.post(`/chats/${businessId}/messages`, { message }),
  getHistory: (businessId: string) => 
    api.get(`/chats/${businessId}/history`),
};

export default api;