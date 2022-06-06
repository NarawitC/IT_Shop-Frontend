import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';

function HeaderAndFooter() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default HeaderAndFooter;
