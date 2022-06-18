import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import { checkLocation } from '../../services/checkLocation';
import { useLocation } from 'react-router-dom';

function HeaderAndFooter() {
  const location = useLocation();
  const { isAdminPage } = checkLocation(location.pathname);
  return (
    <div>
      <Header />
      <Outlet />
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default HeaderAndFooter;
