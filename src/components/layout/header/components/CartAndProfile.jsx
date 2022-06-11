import React from 'react';
import { useNavigate } from 'react-router-dom';

import { UserIcon, ShoppingCartIcon } from '../../../icon/icon';
function CartAndProfile() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between" style={{ width: '5rem' }}>
      <button className="btn-white-i" onClick={() => navigate('/')}>
        <ShoppingCartIcon></ShoppingCartIcon>
      </button>
      <button className="btn-white-i" onClick={() => navigate('/user')}>
        <UserIcon></UserIcon>
      </button>
    </div>
  );
}

export default CartAndProfile;
