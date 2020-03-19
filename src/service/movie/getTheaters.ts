import axiosRequest from '../index';
import api from './api';

/**
 * @func 获取热映电影
 * @param {number} start 开始位置
 * @param {number} count 返回数量
 */
const getTheaters = async (start: number, count: number) => {
  const url = api.inTheaters.replace('{start}', start.toString()).replace('{count}', count.toString());
  return axiosRequest(url, {});
};

export default getTheaters;
