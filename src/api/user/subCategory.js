import axios from '../../config/axios';

export const getSubCategoryById = async (subCategoryId) => {
  return await axios.get(`/subCategory/${subCategoryId}`);
};
