import HeaderIdentification from './components/HeaderIdentification';
import SearchBar from './components/SearchBar';
import CartAndProfile from './components/CartAndProfile';
import { useLocation, useNavigate } from 'react-router-dom';
import { checkLocation } from '../../../services/checkLocation';
import { useAuthContext } from '../../../contexts/AuthContext';
import { LogOutIcon } from '../../icon/icon';
import { useAdminAuthContext } from '../../../contexts/admin/AdminAuthContext';

function Header() {
  const { signOut } = useAuthContext();
  const { signOutAdmin } = useAdminAuthContext();
  const location = useLocation();
  const pageStatus = checkLocation(location.pathname);
  const { isAuthPage, isOrderPage, isAdminPage, isUserPage } = pageStatus;
  const handleLogoutBtn = () => {
    if (isAdminPage) {
      signOutAdmin();
    }
    signOut();
  };

  return (
    <>
      <nav
        className={`navbar ${
          isAdminPage ? 'bg-dark2' : 'bg-primary1'
        } font-text3 py-0`}
      >
        <div className="content-default-width d-flex justify-content-between mx-auto align-items-center">
          <HeaderIdentification pageStatus={pageStatus} />
          {isAdminPage ? (
            <div className="fontAudioWide font-size-20"> ADMIN</div>
          ) : null}
          {isAuthPage || isAdminPage || isUserPage ? null : <SearchBar />}
          {isAuthPage || isAdminPage || isUserPage ? null : <CartAndProfile />}
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
