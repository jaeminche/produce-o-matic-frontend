// import qs from 'qs';
import client from './client';

export const getIp = () => client.get(`https://api.ipify.org?format=json`);

export const getUsersLocation = ({ ip }) =>
  client.get(`http://ip-api.com/json/${ip}`);

export const postCopyContractSample = ({ fileId }) =>
  client.post(`https://www.googleapis.com/drive/v3/files/${fileId}/copy`);
