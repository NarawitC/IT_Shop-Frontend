import axios from '../../config/axios';

export const getInCartOrder = () => {
  return axios.get('/order/inCartOrder');
};

export const createOrderAndDeleteInCartOrder = async () => {
  return await axios.patch('/order/createOrder');
};
