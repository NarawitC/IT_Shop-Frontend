import { useLocation } from 'react-router-dom';

import { checkLocation } from '../../../../services/checkLocation';
import Button from '../../../../components/button/Button';
import { calculateDeliveryPrice } from '../../../../services/calculateDeliveryPrice';
import { useOrderContext } from '../../../../contexts/OrderContext';
import DigitWithBahtIcon from '../../../common/DigitWithBahtIcon';
import { useEffect } from 'react';
function TotalPaymentDetail({ buttonText, onClick, order }) {
  const { allProductPrice, deliveryPrice, setDeliveryPrice } =
    useOrderContext();
  const { id } = order;
  let { productPrice } = order;
  if (productPrice === 0) {
    productPrice = allProductPrice;
  }
  useEffect(() => {
    if (order.deliveryPrice === null) {
      if (allProductPrice < 1000) {
        setDeliveryPrice(calculateDeliveryPrice());
      } else {
        setDeliveryPrice(0);
      }
    }
  }, [allProductPrice, order.deliveryPrice, setDeliveryPrice]);

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
        {isUserPage ? null : (
          <Button className={'btn btn-primary my-2 mx-5'} onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}

export default TotalPaymentDetail;
