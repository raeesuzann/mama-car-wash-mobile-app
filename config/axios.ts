import axios from 'axios';

export const api = axios.create({ baseURL: 'https://localhost:3000/api' });

api.interceptors.request.use((req) => {
  console.log('➡️ Request:', req.url, req.method);
  return req;
});

api.interceptors.response.use(
  (res) => {
    console.log('✅ Response:', res.status);
    return res;
  },
  (err) => {
    console.log('❌ Error:', err.response?.status, err.response?.data);
    return Promise.reject(err);
  }
);
