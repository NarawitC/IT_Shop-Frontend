import axios from '../../config/axios';

export const getAllOrders = () => {
  return axios.get('/admin/order/ordersInfo');
};

export const updateOrderToConfirmed = async (orderId) => {
  return axios.patch(`/admin/order/toConfirmed/${orderId}`);
};
