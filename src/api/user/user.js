import axios from '../../config/axios';

export const getUserInfo = async () => {
  return await axios.get('/user/info');
};

export const updateUserInfo = async (data) => {
  return await axios.patch('/user/update', data);
};
