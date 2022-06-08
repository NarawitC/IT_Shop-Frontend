import axios from '../../config/axios';

export const getUserInfo = async () => {
  return await axios.get('/user/info');
};
