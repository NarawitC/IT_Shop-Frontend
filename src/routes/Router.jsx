import { Route, Routes, Navigate } from 'react-router-dom';
import HeaderAndFooter from '../components/layout/HeaderAndFooter';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
import { useAuthContext } from '../contexts/AuthContext';

function Router() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<HeaderAndFooter></HeaderAndFooter>}>
        {user ? (
          <>
            <Route path="*" element={<div>Home page</div>}></Route>
          </>
        ) : (
          <>
            <Route path="/auth/signUp" element={<SignUpPage></SignUpPage>} />
            <Route path="/auth/signIn" element={<SignInPage></SignInPage>} />
            <Route
              path="/"
              element={<Navigate to="/auth/signIn"></Navigate>}
            ></Route>
          </>
        )}
      </Route>
    </Routes>
  );
}
export default Router;
