// import qs from 'qs';
import clientForExternalApi from './clientForExternalApi';

export const getIp = () =>
  clientForExternalApi.get(`https://api.ipify.org?format=json`);

export const getUsersLocation = ({ ip }) =>
  // clientForExternalApi.get(`http://ip-api.com/json/${ip}`); // insecure request
  // clientForExternalApi.get(`https://geolocation-db.com/json`); // returns city: null
  clientForExternalApi.get(`https://extreme-ip-lookup.com/json`); // returns incorrect, but nearest city name

export const postCopyContractSample = ({ fileId }) =>
  clientForExternalApi.post(
    `https://www.googleapis.com/drive/v3/files/${fileId}/copy`,
  );

export const getCurrencySet = ({ apikey }) =>
  clientForExternalApi.get(
    `http://data.fixer.io/api/latest?access_key=${apikey}`,
  );
