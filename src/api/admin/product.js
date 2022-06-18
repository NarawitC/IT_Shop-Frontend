import axios from '../../config/axios';

export const adminCreateProduct = async (input) => {
  return await axios.post('/admin/product/createProduct', input);
};

export const getProductById = async (id) => {
  return axios.get(`/product/info/${id}`);
};

export const adminUpdateProduct = async (id, input) => {
  return await axios.patch(`/admin/product/updateProduct/${id}`, input);
};
