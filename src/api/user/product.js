import axios from '../../config/axios';

export const getAllProductInfo = async () => {
  return await axios.get(`/product/allProduct}`);
};
export const getProductByCategoryId = async (categoryId) => {
  return await axios.get(`/product/category/${categoryId}`);
};
export const getProductBySubProductId = async (subCategoryId) => {
  return await axios.get(`/product/subCategory/${subCategoryId}`);
};
