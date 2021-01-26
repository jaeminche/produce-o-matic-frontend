// import qs from 'qs';
import clientForExternalApi from './clientForExternalApi';

export const getIp = () =>
  clientForExternalApi.get(`https://api.ipify.org?format=json`);

export const getUsersLocation = () =>
  // clientForExternalApi.get(`http://ip-api.com/json/${ip}`); // insecure request
  // clientForExternalApi.get(`https://geolocation-db.com/json`); // returns city: null
  // clientForExternalApi.get(`https://extreme-ip-lookup.com/json`); // returns incorrect, but nearest city name
  clientForExternalApi.get(`https://ipapi.co/json`);
// ! ip-api.com 제외한 서비스를 이용할 경우엔 getIp 호출 필요없음. 그리고 ip 서비스에서 lat, long 반환하는 경우, 날씨위젯을 위한 위치 정보 동의 구하지 않아도 됨.

export const postCopyContractSample = ({ fileId }) =>
  clientForExternalApi.post(
    `https://www.googleapis.com/drive/v3/files/${fileId}/copy`,
  );

export const getCurrencySet = ({ apikey }) =>
  clientForExternalApi.get(
    `http://data.fixer.io/api/latest?access_key=${apikey}`,
  );
