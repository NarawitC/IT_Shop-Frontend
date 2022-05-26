import { Route, Routes } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import Sidebar from '../components/layout/sidebar/Sidebar';
import FriendPage from '../pages/FriendPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/" element={<AuthLayout></AuthLayout>}>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route
          path="profile/:id"
          element={<ProfilePage></ProfilePage>}
        ></Route>
        <Route path="friend" element={<Sidebar></Sidebar>}>
          <Route path="" element={<FriendPage></FriendPage>}></Route>
        </Route>
      </Route>
    </Routes>
  );
}
export default Router;
