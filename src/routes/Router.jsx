import { Route, Routes } from 'react-router-dom';
import HeaderAndFooter from '../components/layout/HeaderAndFooter';
import LoginPage from '../pages/LoginPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HeaderAndFooter></HeaderAndFooter>}>
        <Route path="/auth/signIn" element={<LoginPage></LoginPage>} />
      </Route>
    </Routes>
  );
}
export default Router;
