import axios, { AxiosRequestConfig } from 'axios';

const axiosRequest = (config = {}) => {
  const axiosIns = axios.create(config);

  axiosIns.interceptors.response.use((res) => {
    const { data } = res;
    if (data && data.code === 0) {
      return data.data;
    }
    return Promise.reject(res);
  });

  const request = (url: string, options?: AxiosRequestConfig) => {
    const promise = new Promise((resolve, reject) => {
      const axiosOptions: AxiosRequestConfig = {};
      axiosOptions.headers = options.headers || {};
      axiosOptions.url = url;
      axiosOptions.method = options.method || 'get';
      axiosOptions.timeout = options.timeout || 20000;
      axiosOptions.data = options.data;
      if (axiosOptions.method.toUpperCase() === 'POST' && !axiosOptions.headers['content-type']) {
        axiosOptions.headers['content-type'] = 'application/json;charset=UTF-8';
      }

      const send = () => {
        axiosIns(axiosOptions)
          .then((data) => {
            resolve(data);
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
