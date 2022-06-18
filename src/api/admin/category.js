import axios from '../../config/axios';

export const getAllCategories = async () => {
  return await axios.get('/category/allCategory');
};
