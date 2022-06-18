import axios from '../../config/axios';

export const adminCreateProduct = async (input) => {
  return await axios.post('/admin/product/createProduct', input);
};
