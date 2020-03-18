import axiosRequest from '../index';
import api from './api';

interface SigninProps {
  auth: string;
}

/**
 * @func 登录
 * @param {data} 请求主体
 */
const signin = (data: SigninProps) => {
  const url = api.signin;
  return axiosRequest(url, {
    method: 'POST',
    data,
  });
};

export default signin;
