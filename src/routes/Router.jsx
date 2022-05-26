import { Route, Routes } from 'react-router-dom';
import FriendPage from '../pages/FriendPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
      <Route path="/friend" element={<FriendPage></FriendPage>}></Route>
    </Routes>
  );
}
export default Router;
