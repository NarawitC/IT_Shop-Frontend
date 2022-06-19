import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuthContext } from '../../../contexts/admin/AdminAuthContext';
import AdminMenuItem from './components/AdminMenuItem';
import { checkLocation } from '../../../services/checkLocation';
import LoadingPage from '../../LoadingPage';
import { useState } from 'react';

function AdminSideBar() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdminOrderPage, isAdminProductPage } = checkLocation(
    location.pathname
  );
  const {
    admin: { employeeId },
  } = useAdminAuthContext();
  const handleMenuClick = (menuName) => {
    navigate(`/admin/${menuName}`);
  };
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="content-default-width mx-auto d-flex justify-content-between gap-3">
      <div className="col-2 bg-light1 px-2 py-3 d-flex flex-column gap-3 h-25">
        <div className="ms-3 font-size-24 font-weight-500">{employeeId}</div>
        <div className="hr-gray"></div>
        <div className="d-flex flex-column gap-2 ms-2">
          <AdminMenuItem
            menuName={'Order'}
            thisPage={isAdminOrderPage}
            onClick={() => handleMenuClick('order')}
          ></AdminMenuItem>
          <AdminMenuItem
            menuName={'Product'}
            thisPage={isAdminProductPage}
            onClick={() => handleMenuClick('product')}
          ></AdminMenuItem>
        </div>
      </div>
      <div className="col-10 align-items-center">
        <Outlet context={{ setIsLoading }} />
      </div>
    </div>
  );
}

export default AdminSideBar;
