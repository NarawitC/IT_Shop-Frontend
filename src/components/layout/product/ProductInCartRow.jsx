import { Link, useLocation, useNavigate } from 'react-router-dom';

import { checkLocation } from '../../../services/checkLocation';
import DigitWithBahtIcon from '../../common/DigitWithBahtIcon';
import SquareCheckBox from '../../common/SquareCheckBox';
import Counter from '../../common/Counter';
import { useOrderContext } from '../../../contexts/OrderContext';
import TrashButton from '../../common/TrashButton';

function ProductInCartRow({ idx }) {
  const {
    inCartOrderItems,
    setInCartOrderItems,
    setSelectedInCartItems,
    selectedInCartItems,
    isSelectAllInCartItems,
  } = useOrderContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { isUserPage } = checkLocation(location.pathname);
  const {
    product: {
      id: productId,
      mainPicture,
      price: pricePerUnit,
      name,
      quantity: maxQuantity,
    },
    inputQuantity,
  } = inCartOrderItems[idx];
  const itemSubtotal = pricePerUnit * inputQuantity;

  const handleCheckBoxWhenNotChecked = () => {
    setSelectedInCartItems([...selectedInCartItems, productId]);
  };

  const handleCheckBoxWhenChecked = () => {
    setSelectedInCartItems(
      selectedInCartItems.filter((item) => item !== productId)
    );
  };

  const handleIncreaseCounter = () => {
    const newInCartOrderItems = [...inCartOrderItems];
    newInCartOrderItems[idx].inputQuantity += 1;
    setInCartOrderItems(newInCartOrderItems);
  };
  const handleDecreaseCounter = () => {
    const newInCartOrderItems = [...inCartOrderItems];
    newInCartOrderItems[idx].inputQuantity -= 1;
    setInCartOrderItems(newInCartOrderItems);
  };
  const handleDeleteButton = () => {
    const newInCartOrderItems = [...inCartOrderItems];
    newInCartOrderItems.splice(idx, 1);
    setInCartOrderItems(newInCartOrderItems);
  };
  // console.log(inCartOrderItems);
  return (
    <div className="d-flex ">
      <div className="col-5 align-items-center d-flex gap-3 ms-2 ">
        <div className="col-1 d-flex align-items-center ">
          {isUserPage ? null : (
            <SquareCheckBox
              onClickWhenChecked={handleCheckBoxWhenChecked}
              onClickWhenNotChecked={handleCheckBoxWhenNotChecked}
              state={isSelectAllInCartItems}
              className={'col-5'}
            ></SquareCheckBox>
          )}
        </div>

        <Link to={`/product/info/${productId}`}>
          <img
            src={`${mainPicture}`}
            className="my-1"
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
        <div className="col-2 align-items-center d-flex -justify-content-center">
          <Counter
            state={inputQuantity}
            onClickDecrease={handleDecreaseCounter}
            onClickIncrease={handleIncreaseCounter}
            maxQuantity={maxQuantity}
          ></Counter>
        </div>
        <div className="col-3 align-items-center text-center">
          <DigitWithBahtIcon digit={itemSubtotal} />
        </div>
        <div className="flex-fill align-items-center text-center">
          <TrashButton onClick={handleDeleteButton}></TrashButton>
        </div>
      </div>
    </div>
  );
}

export default ProductInCartRow;
