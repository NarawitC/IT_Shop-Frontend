import { Link, useLocation } from 'react-router-dom';

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
    selectedInCartItems,
    setSelectedInCartItems,
  } = useOrderContext();
  const location = useLocation();
  const { isOrderCheckoutPage } = checkLocation(location.pathname);
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
    const newInCartOrderItems = { ...inCartOrderItems[idx] };
    setSelectedInCartItems([...selectedInCartItems, newInCartOrderItems]);
  };
  const handleCheckBoxWhenChecked = () => {
    const arr = selectedInCartItems.filter(
      (item) => item.product.id !== inCartOrderItems[idx].product.id
    );
    setSelectedInCartItems(arr);
  };

  const handleIncreaseCounter = () => {
    const arr = [...inCartOrderItems];
    arr.map((item) => {
      if (item.product.id === productId) {
        item.inputQuantity += 1;
      }
      return item;
    });
    setInCartOrderItems(arr);
    const newSelectedInCartItems = [...selectedInCartItems];
    newSelectedInCartItems.map((item) => {
      if (item.product.id === productId) {
        item.inputQuantity += 1;
      }
      return item;
    });
    setSelectedInCartItems(newSelectedInCartItems);
  };

  const handleDecreaseCounter = () => {
    const arr = [...inCartOrderItems];
    arr.map((item) => {
      if (item.product.id === inCartOrderItems[idx].product.id) {
        item.inputQuantity -= 1;
      }
      return item;
    });

    setInCartOrderItems(arr);
    const newSelectedInCartItems = [...selectedInCartItems];
    newSelectedInCartItems.map((item) => {
      if (item.product.id === productId) {
        item.inputQuantity -= 1;
      }
      return item;
    });
    setSelectedInCartItems(newSelectedInCartItems);
  };
  const handleDeleteButton = () => {
    const arr = [...inCartOrderItems];
    arr.filter((item) => {
      if (item.product.id !== productId) {
        return item;
      }
      return item;
    });
    setInCartOrderItems(arr);
    const newSelectedInCartItems = [...selectedInCartItems];
    newSelectedInCartItems.filter((item) => {
      if (item.product.id !== productId) {
        return item;
      }
      return item;
    });
    setSelectedInCartItems(newSelectedInCartItems);
  };

  return (
    <div className="d-flex ">
      <div className="col-5 align-items-center d-flex gap-3 ms-2 ">
        <div className="col-1 d-flex align-items-center ">
          {isOrderCheckoutPage ? (
            <SquareCheckBox
              onClickWhenChecked={handleCheckBoxWhenChecked}
              className={'col-5'}
              onClickWhenNotChecked={handleCheckBoxWhenNotChecked}
            />
          ) : null}
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
          {isOrderCheckoutPage ? (
            <TrashButton onClick={handleDeleteButton}></TrashButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProductInCartRow;
