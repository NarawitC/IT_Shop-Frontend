import axios from '../../config/axios';

export const adminSignIn = async (input) => {
  return await axios.post('/admin/auth/signIn', input);
};
