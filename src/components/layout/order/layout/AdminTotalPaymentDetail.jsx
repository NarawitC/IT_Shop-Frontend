import Button from '../../../button/Button';
import { updateOrderToConfirmed } from '../../../../api/admin/order';
import { useNavigate, useOutletContext } from 'react-router-dom';

import DigitWithBahtIcon from '../../../common/DigitWithBahtIcon';
function AdminTotalPaymentDetail({ order }) {
  const { setIsLoading } = useOutletContext();
  const navigate = useNavigate();
  const { id, deliveryPrice, productPrice } = order;
  const handleConfirmButton = async () => {
    setIsLoading(true);
    await updateOrderToConfirmed(id);
    setIsLoading(false);
    navigate('/admin/order/confirmCompleted');
  };

  return (
    <div className="d-flex flex-column gap-2 bg-light1 align-items-center flex-row-reverse pe-5 py-3">
      <div className="d-flex col-4 justify-content-between flex-column gap-1  ">
        <div className="d-flex justify-content-between align-items-center font-weight-500">
          <div>Order id:</div>
          <div>{id}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center font-text2">
          <div>Product price:</div>
          <div>{productPrice}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center font-text2">
          <div>Delivery price:</div>
          <div>{order.deliveryPrice || deliveryPrice}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="font-text2">Total Payment:</div>
          <div className="font-text-secondary font-size-20 font-weight-500">
            <DigitWithBahtIcon
              digit={productPrice + deliveryPrice}
            ></DigitWithBahtIcon>
          </div>
        </div>
        <Button
          className={'btn btn-primary my-2 mx-5'}
          onClick={handleConfirmButton}
        >
          Confirmed
        </Button>
      </div>
    </div>
  );
}

export default AdminTotalPaymentDetail;
