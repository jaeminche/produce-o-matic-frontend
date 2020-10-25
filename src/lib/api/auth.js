import client from './client';

export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

export const signup = ({ username, password }) =>
  client.post('/api/auth/signup', { username, password });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');
