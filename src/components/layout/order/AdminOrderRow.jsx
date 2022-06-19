import { Link, useLocation, useNavigate } from 'react-router-dom';
import { dateFormat } from '../../../services/dateFormat';
import { ORDER_STATUS_PENDING } from '../../../config/env';

import EyeButton from '../../common/EyeButton';

function AdminOrderRow({ order }) {
  const navigate = useNavigate();
  const { id: orderId, paymentAt, userId } = order;

  const handleEyeBtnClick = () => {
    navigate(`/admin/order/${ORDER_STATUS_PENDING}/${orderId}`);
  };
  return (
    <div className="d-flex px-2 py-2 text-center align-items-center justify-content-between bg-light1">
      <div className="col-2  align-items-center text-center">{orderId}</div>
      <div className="col-2 align-items-center text-center">
        {dateFormat(paymentAt)}
      </div>
      <div className="col-2 align-items-center text-center">{userId}</div>
      <div className="col-2 align-items-center text-center">
        <EyeButton onClick={handleEyeBtnClick}></EyeButton>
      </div>
    </div>
  );
}

export default AdminOrderRow;
