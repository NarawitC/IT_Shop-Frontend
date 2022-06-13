import axios from '../../config/axios';

export const getAllCategoryInfo = async () => {
  return await axios.get('/category/allCategory');
};
export const getCategoryById = async (categoryId) => {
  return await axios.get(`/category/${categoryId}`);
};
