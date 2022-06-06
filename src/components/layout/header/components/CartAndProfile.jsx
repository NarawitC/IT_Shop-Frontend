import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartAndProfile() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between" style={{ width: '5rem' }}>
      <button className="btn-white-i" onClick={() => navigate('/')}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <button className="btn-white-i" onClick={() => navigate('/')}>
        <i className="fa-solid fa-user"></i>
      </button>
    </div>
  );
}

export default CartAndProfile;
