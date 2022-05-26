import { createContext, useState } from 'react';

import axios from '../config/axios';
import { setAccessToken } from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const signUp = async (input) => {
    const res = await axios.post('auth/signup', input);
    setAccessToken(res.data.token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
  };
  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
}
export default AuthContextProvider;
export { AuthContext };
