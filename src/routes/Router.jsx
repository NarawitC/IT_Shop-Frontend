import { Route, Routes, Navigate } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthContext';
import HeaderAndFooter from '../components/layout/HeaderAndFooter';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
import UserPage from '../pages/user/UserPage';
import HomePage from '../pages/HomePage';

function Router() {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<HeaderAndFooter></HeaderAndFooter>}>
        {user ? (
          <>
            <Route path="/home" element={<HomePage></HomePage>} />
            <Route path="/user" element={<UserPage></UserPage>} />
            <Route path="*" element={<Navigate to="/home"></Navigate>}></Route>
          </>
        ) : (
          <>
            <Route path="/auth/signUp" element={<SignUpPage></SignUpPage>} />
            <Route path="/auth/signIn" element={<SignInPage></SignInPage>} />
            <Route
              path="*"
              element={<Navigate to="/auth/signIn"></Navigate>}
            ></Route>
          </>
        )}
      </Route>
    </Routes>
  );
}
export default Router;
