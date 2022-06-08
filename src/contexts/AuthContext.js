import { createContext, useState, useContext } from 'react';

import {
  getAccessToken,
  removeToken,
  setAccessToken,
} from '../services/localStorage';
import { userSignIn, userSignUp } from '../api/user/auth';
import { getUserInfo } from '../api/user/user';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const signIn = async (input) => {
    const res = await userSignIn(input);
    setAccessToken(res.data.token);
    const resMe = await getUserInfo();
    setUser(resMe.data.user);
  };

  const [signUpPage, setSignUpPage] = useState('1');
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [StreetName, setStreetName] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [addressDescription, setAddressDescription] = useState('');

  const signUp = async () => {
    try {
      let address =
        StreetName.trim() +
        province.trim() +
        district.trim() +
        postalCode.trim();
      if (!address) {
        address = null;
      }
      if (!addressDescription.trim()) {
        setAddressDescription(null);
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        signUpPage,
        setSignUpPage,
        setFirstName,
        setLastName,
        setPhoneNumber,
        setEmail,
        setPassword,
        setConfirmPassword,
        setStreetName,
        setProvince,
        setDistrict,
        setPostalCode,
        setAddressDescription,
        signUp,
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
