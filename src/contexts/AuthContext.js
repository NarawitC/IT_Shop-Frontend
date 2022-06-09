import { createContext, useState, useContext, useEffect } from 'react';

import {
  getAccessToken,
  removeToken,
  setAccessToken,
} from '../services/localStorage';
import { userSignIn, userSignUp } from '../api/user/auth';
import { getUserInfo } from '../api/user/user';
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from './ErrorContext';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { setError } = useErrorContext();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await getUserInfo();
          setUser(resMe.data.user);
        }
      } catch (err) {
        removeToken();
        navigate('/auth/signIn');
      }
    };
    fetchMe();
  }, []);
  const signIn = async (input) => {
    const res = await userSignIn(input);
    setAccessToken(res.data.token);
    const resMe = await getUserInfo();
    setUser(resMe.data.user);
  };

  const signUp = async ({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirmPassword,
    address,
    addressDescription,
  }) => {
    if (!address) {
      address = null;
    }
    if (!addressDescription) {
      addressDescription = null;
    }
    await userSignUp({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
      address,
      addressDescription,
    });
  };

  const signOut = () => {
    removeToken();
    setUser(null);
    navigate('/auth/signIn');
  };
  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;

const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};
export { useAuthContext };
