import { useLocation } from 'react-router-dom';

import SquareCheckBox from '../../common/SquareCheckBox';
import DigitWithBahtIcon from '../../common/DigitWithBahtIcon';
import EyeButton from '../../common/EyeButton';
import { checkLocation } from '../header/services';
import { useUserContext } from '../../../contexts/UserContext';

function OrderItemRow({ orderItem, order }) {
  const location = useLocation();
  const { isUserPage } = checkLocation(location.pathname);
  const { setSelectedPurchasedOrder } = useUserContext();
  const {
    Product: { price: pricePerUnit, name },
    quantity,
    orderId,
  } = orderItem;
  const itemSubtotal = pricePerUnit * quantity;
  const handleEyeBtnClick = () => {
    setSelectedPurchasedOrder(order);
  };
  return (
    <div className="d-flex ">
      <div className="col-5 align-items-center d-flex ">
        <div className="col-1">
          {isUserPage ? null : (
            <SquareCheckBox className={'col-5'}></SquareCheckBox>
          )}
        </div>
        <div>{name}</div>
      </div>
      <div className="col-7 d-flex justify-content-between gap-1 align-items-center">
        <div className="col-3 align-items-center text-center">
          <DigitWithBahtIcon digit={pricePerUnit} />
        </div>
        <div className="col-2 align-items-center text-center">{quantity}</div>
        <div className="col-3 align-items-center text-center">
          <DigitWithBahtIcon digit={itemSubtotal} />
        </div>
        <div className="col-4 align-items-center text-center">
          {isUserPage ? (
            <EyeButton onClick={handleEyeBtnClick}></EyeButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default OrderItemRow;
