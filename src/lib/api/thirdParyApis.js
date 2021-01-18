// import qs from 'qs';
import client from './client';

export const getIp = () => client.get(`https://api.ipify.org?format=json`);

export const getUsersLocation = ({ ip }) =>
  client.get(`http://ip-api.com/json/${ip}`);
