import { Outlet } from 'react-router-dom';
import Header from './header/Header';

function AuthLayout() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default AuthLayout;
