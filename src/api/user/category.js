import axios from '../../config/axios';

export const getAllCategoryInfo = async () => {
  return await axios.get('/category/allCategory');
};
