import axios from '../../config/axios';

export const getInCartOrder = () => {
  return axios.get('/order/inCartOrder');
};
