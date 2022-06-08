import { Route, Routes } from 'react-router-dom';
import HeaderAndFooter from '../components/layout/HeaderAndFooter';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HeaderAndFooter></HeaderAndFooter>}>
        <Route path="/auth/signUp" element={<SignUpPage></SignUpPage>} />
        <Route path="/auth/signIn" element={<SignInPage></SignInPage>} />
      </Route>
    </Routes>
  );
}
export default Router;
