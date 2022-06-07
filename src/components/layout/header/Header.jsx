import HeaderIdentification from './components/HeaderIdentification';
import SearchBar from './components/SearchBar';
import CartAndProfile from './components/CartAndProfile';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  return (
    <>
      <nav className="navbar bg-primary1 font-text3 py-0">
        <div className="content-default-width d-flex justify-content-between mx-auto align-items-center">
          <HeaderIdentification />
          <SearchBar />
          <CartAndProfile />
        </div>
      </nav>
    </>
  );
}

export default Header;
