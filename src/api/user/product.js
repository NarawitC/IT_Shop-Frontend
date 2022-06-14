import axios from '../../config/axios';

export const getAllProductInfo = async () => {
  return axios.get(`/product/allProduct`);
};
export const getProductByCategoryId = async (categoryId) => {
  return axios.get(`/product/category/${categoryId}`);
};
export const getProductBySubProductId = async (subCategoryId) => {
  return axios.get(`/product/subCategory/${subCategoryId}`);
};
