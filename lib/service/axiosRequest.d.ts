import { AxiosRequestConfig } from 'axios';
declare const axiosRequest: (config?: {}) => (url: string, options?: AxiosRequestConfig) => Promise<unknown>;
export default axiosRequest;
