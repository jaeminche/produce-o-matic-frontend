// import qs from 'qs';
import clientForExtenalApi from './clientForExtenalApi';

export const getIp = () =>
  clientForExtenalApi.get(`https://api.ipify.org?format=json`);

export const getUsersLocation = ({ ip }) =>
  clientForExtenalApi.get(`http://ip-api.com/json/${ip}`);

export const postCopyContractSample = ({ fileId }) =>
  clientForExtenalApi.post(
    `https://www.googleapis.com/drive/v3/files/${fileId}/copy`,
  );

export const getCurrencySet = ({ apikey }) =>
  clientForExtenalApi.get(
    `http://data.fixer.io/api/latest?access_key=${apikey}`,
  );
