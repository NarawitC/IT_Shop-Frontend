import { createContext, useState, useContext, useEffect } from 'react';

import {
  getAccessToken,
  removeToken,
  setAccessToken,
} from '../../services/localStorage';
import { adminSignIn } from '../../api/admin/auth';
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from '../ErrorContext';
import { getAdminInfo } from '../../api/admin/admin';

const AdminAuthContext = createContext();
function AdminAuthContextProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();
  const { setError } = useErrorContext();
  // console.log(admin);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await getAdminInfo();
          setAdmin(resMe.data.admin);
        }
      } catch (err) {
        removeToken();
        navigate('/admin/auth/signIn');
      }
    };
    fetchMe();
  }, []);

  const signInAdmin = async (input) => {
    const res = await adminSignIn(input);
    setAccessToken(res.data.token);
    console.log(res.data.token);
    const resMe = await getAdminInfo();
    setAdmin(resMe.data.admin);
  };

  const signOutAdmin = () => {
    removeToken();
    setAdmin(null);
    navigate('/auth/signIn');
  };
  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        signInAdmin,
        signOutAdmin,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}
export default AdminAuthContextProvider;

const useAdminAuthContext = () => {
  const ctx = useContext(AdminAuthContext);
  return ctx;
};
export { useAdminAuthContext };
