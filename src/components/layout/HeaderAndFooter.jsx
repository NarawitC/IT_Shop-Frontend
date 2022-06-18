import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import { checkLocation } from '../../services/checkLocation';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HeaderAndFooter() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdminPage } = checkLocation(location.pathname);
  return (
    <div>
      <Header />
      <button onClick={() => navigate('/admin/product/createProduct')}>
        asd
      </button>
      <Outlet />
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default HeaderAndFooter;
