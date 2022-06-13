import HeaderIdentification from './components/HeaderIdentification';
import SearchBar from './components/SearchBar';
import CartAndProfile from './components/CartAndProfile';
import { useLocation, useNavigate } from 'react-router-dom';
import { checkLocation } from '../../../services/checkLocation';
import { useAuthContext } from '../../../contexts/AuthContext';
import { LogOutIcon } from '../../icon/icon';


function Header() {
  const { signOut } = useAuthContext();
  const location = useLocation();
  const pageStatus = checkLocation(location.pathname);
  const { isAuthPage, isOrderPage, isAdminPage, isUserPage } = pageStatus;
  const handleLogoutBtn = () => {
    signOut();
  };


  return (
    <>
      <nav className="navbar bg-primary1 font-text3 py-0">
        <div className="content-default-width d-flex justify-content-between mx-auto align-items-center">
          <HeaderIdentification pageStatus={pageStatus} />
          {isAuthPage || isAdminPage || isUserPage ? null : <SearchBar />}
          {isAuthPage || isAdminPage || isOrderPage || isUserPage ? null : (
            <CartAndProfile />
          )}
          {isAuthPage ? null : (
            <button className="btn-white-i" onClick={handleLogoutBtn}>
              <LogOutIcon></LogOutIcon>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
