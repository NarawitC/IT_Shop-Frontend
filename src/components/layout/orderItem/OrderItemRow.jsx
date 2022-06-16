import { Link, useLocation, useNavigate } from 'react-router-dom';

import SquareCheckBox from '../../common/SquareCheckBox';
import DigitWithBahtIcon from '../../common/DigitWithBahtIcon';
import EyeButton from '../../common/EyeButton';
import { checkLocation } from '../../../services/checkLocation';
import { useUserContext } from '../../../contexts/UserContext';

function OrderItemRow({ orderItem, order }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOrderCheckoutPage, isUserPage } = checkLocation(location.pathname);
  const { setSelectedPurchasedOrder, selectedPurchasedOrder } =
    useUserContext();
  const {
    Product: { price: pricePerUnit, name, mainPicture },
    quantity,
    productId,
  } = orderItem;
  const itemSubtotal = pricePerUnit * quantity;
  const handleEyeBtnClick = () => {
    if (selectedPurchasedOrder) {
      navigate('/product/info/' + productId);
    } else {
      setSelectedPurchasedOrder(order);
    }
  };
  return (
    <div className="d-flex ">
      <div className="col-5 align-items-center d-flex gap-3 ms-2">
        <div className="col-1 d-flex align-items-center">
          {isOrderCheckoutPage ? (
            <SquareCheckBox className={'col-5'}></SquareCheckBox>
          ) : null}
        </div>

        <Link to={`/product/info/${productId}`}>
          <img
            src={`${mainPicture}`}
            className="my-1 "
            style={{ width: '100px', height: '80px' }}
            alt="..."
          ></img>
        </Link>

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
        <div className="flex-fill align-items-center text-center">
          <EyeButton onClick={handleEyeBtnClick}></EyeButton>
        </div>
      </div>
    </div>
  );
}

export default OrderItemRow;
