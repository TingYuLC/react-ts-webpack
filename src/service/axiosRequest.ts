import axios, { AxiosRequestConfig } from 'axios';

const axiosRequest = (config = {}) => {
  const axiosIns = axios.create(config);

  const request = (url: string, options?: AxiosRequestConfig) => {
    const promise = new Promise((resolve, reject) => {
      const axiosOptions: AxiosRequestConfig = {};
      axiosOptions.headers = options.headers || {};
      axiosOptions.url = url;
      axiosOptions.method = options.method || 'get';
      axiosOptions.timeout = options.timeout || 20000;

      const send = () => {
        axiosIns(axiosOptions)
          .then((data) => {
            resolve(data.data);
          })
          .catch((err) => {
            reject(err);
          });
      };

      send();
    });
    return promise;
  };

  return request;
};

export default axiosRequest;
