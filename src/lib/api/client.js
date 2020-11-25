import axios from 'axios';

const env = process.env.NODE_ENV || 'development';
console.log('env', env);

const host = env === 'production' ? 'http://3.35.246.68/' : null;
// const host = 'http://13.124.187.20/';

const option = host && {
  baseURL: `${host}`,
  withCredentials: true,
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

client.interceptors.request.use(
  function (config) {
    console.log('client.인터셉터.request config', config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

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
