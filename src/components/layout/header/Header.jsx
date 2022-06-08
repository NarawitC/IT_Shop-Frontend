import HeaderIdentification from './components/HeaderIdentification';
import SearchBar from './components/SearchBar';
import CartAndProfile from './components/CartAndProfile';
import { useLocation } from 'react-router-dom';
import { checkLocation } from './services';

function Header() {
  const location = useLocation();
  const pageStatus = checkLocation(location.pathname);
  const { isAuthPage, isOrderPage, isAdminPage } = pageStatus;
  return (
    <>
      <nav className="navbar bg-primary1 font-text3 py-0">
        <div className="content-default-width d-flex justify-content-between mx-auto align-items-center">
          <HeaderIdentification pageStatus={pageStatus} />
          {isAuthPage || isAdminPage ? null : <SearchBar />}
          {isAuthPage || isAdminPage || isOrderPage ? null : <CartAndProfile />}
        </div>
      </nav>
    </>
  );
}

export default Header;
