import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

function HeaderAndFooter() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HeaderAndFooter;
