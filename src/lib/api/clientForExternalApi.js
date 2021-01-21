import axios from 'axios';

const env = process.env.NODE_ENV || 'development';
console.log('env', env);
const isProduction = env === 'production';

const host = isProduction ? 'https://api.produceomatic.com/' : null;
// const host = 'http://13.124.187.20/';

const option = isProduction && {
  baseURL: `${host}`,
  withCredentials: true,
};

const clientForExtenalApi = isProduction ? axios.create() : axios.create();

// clientForExtenalApi.intercepter.response.use(
//   (response) => {
//     console.log('response=====', response && response);
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

clientForExtenalApi.interceptors.request.use(
  function (config) {
    console.log('clientForExtenalApi.인터셉터.request config', config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

/** clientForExtenalApi.defaults.baseURL = 'https://';

clientForExtenalApi.defaults.headers.common['Authorization'] = 'Bearer ';

axios.intercepter.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

*/

export default clientForExtenalApi;
