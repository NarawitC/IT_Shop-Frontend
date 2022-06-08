import HeaderIdentification from './components/HeaderIdentification';
import SearchBar from './components/SearchBar';
import CartAndProfile from './components/CartAndProfile';
import { useLocation, useNavigate } from 'react-router-dom';
import { checkLocation } from './services';
import { useAuthContext } from '../../../contexts/AuthContext';

function Header() {
  const { signOut } = useAuthContext();
  const location = useLocation();
  const pageStatus = checkLocation(location.pathname);
  const { isAuthPage, isOrderPage, isAdminPage } = pageStatus;
  const handleLogoutBtn = () => {
    signOut();
  };
  return (
    <>
      <nav className="navbar bg-primary1 font-text3 py-0">
        <div className="content-default-width d-flex justify-content-between mx-auto align-items-center">
          <HeaderIdentification pageStatus={pageStatus} />
          {isAuthPage || isAdminPage ? null : <SearchBar />}
          {isAuthPage || isAdminPage || isOrderPage ? null : <CartAndProfile />}
          {isAuthPage ? null : (
            <button className="btn-white-i" onClick={handleLogoutBtn}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
