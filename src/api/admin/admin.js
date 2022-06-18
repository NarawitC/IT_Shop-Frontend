import axios from '../../config/axios';

export const getAdminInfo = async () => {
  return await axios.get('/admin/admin/info');
};
