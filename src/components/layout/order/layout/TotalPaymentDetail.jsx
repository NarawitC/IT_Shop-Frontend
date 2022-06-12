import { useLocation } from 'react-router-dom';

import { checkLocation } from '../../header/services';
import Button from '../../../../components/button/Button';

import DigitWithBahtIcon from '../../../common/DigitWithBahtIcon';
function TotalPaymentDetail({ buttonText, onClick, order }) {
  const { id, productPrice, deliveryPrice } = order;
  const location = useLocation();
  const { isUserPage } = checkLocation(location.pathname);
  return (
    <div className="d-flex flex-column gap-2 bg-light1 align-items-center flex-row-reverse pe-5 py-3">
      <div className="d-flex col-4 justify-content-between flex-column gap-1  ">
        {isUserPage ? (
          <div className="d-flex justify-content-between align-items-center font-weight-500">
            <div>Order id:</div>
            <div>{id}</div>
          </div>
        ) : null}
        <div className="d-flex justify-content-between align-items-center font-text2">
          <div>Merchandise subtotal:</div>
          <div>{productPrice}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center font-text2">
          <div>Shipping Total:</div>
          <div>{deliveryPrice}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="font-text2">Total Payment:</div>
          <div className="font-text-secondary font-size-20 font-weight-500">
            <DigitWithBahtIcon
              digit={productPrice + deliveryPrice}
            ></DigitWithBahtIcon>
          </div>
        </div>
      </div>
      {isUserPage ? null : (
        <Button className={'btn btn-primary'} onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}

export default TotalPaymentDetail;
