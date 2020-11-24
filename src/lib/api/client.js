import axios from 'axios';

const env = process.env.NODE_ENV || 'development';
console.log('env', env);

const host = env === 'production' ? 'http://13.125.45.94/' : null;
// const host = 'http://13.124.187.20/';

const option = host && {
  baseURL: `${host}`,
};

const client = option ? axios.create(option) : axios.create();

// client.intercepter.response.use(
//   (response) => {
//     console.log('response=====', response && response);
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// client.interceptors.request.use(
//   function (config) {
//     console.log('config', config);
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

/** client.defaults.baseURL = 'https://';

client.defaults.headers.common['Authorization'] = 'Bearer ';

axios.intercepter.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

*/

export default client;
