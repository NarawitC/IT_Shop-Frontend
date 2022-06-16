import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SquareCheckBox from '../../common/SquareCheckBox';
import { useOrderContext } from '../../../contexts/OrderContext';
import Button from '../../button/Button';
import DigitWithBahtIcon from '../../common/DigitWithBahtIcon';
import { createOrderAndDeleteInCartOrder } from '../../../api/user/order';
import { createOrderItemByOrderId } from '../../../api/user/orderItem';

function CheckoutInCartOrder() {
  const navigate = useNavigate();
  const {
    inCartOrderItems,
    setInCartOrderItems,
    isSelectAllInCartItems,
    setIsSelectAllInCartItems,
    selectedInCartItems,
    allProductPrice,
    setAllProductPrice,
  } = useOrderContext();
  const [selectedInCartItemsPrice, setSelectedInCartItemsPrice] = useState(0);

  const isSelectAllButton = true;
  const handleCheckBoxWhenNotChecked = () => {
    setIsSelectAllInCartItems((prev) => !prev);
  };
  const handleCheckBoxWhenChecked = () => {
    setIsSelectAllInCartItems((prev) => !prev);
  };

  const handleCheckoutButton = async () => {
    const {
      data: {
        order: { id: orderId },
      },
    } = await createOrderAndDeleteInCartOrder();
    if (isSelectAllInCartItems) {
      //| inCartOrderItems =[{productObj,inputQuantity}]
      inCartOrderItems.forEach(async (item) => {
        await createOrderItemByOrderId({
          orderId,
          product: item.product,
          inputQuantity: item.inputQuantity,
        });
      });
    } else if (!isSelectAllInCartItems) {
      //| selectedInCartItems =array of productId
      const selectedInCartItemsOutput = await Promise.all(
        selectedInCartItems.map(async (productId) => {
          const item = inCartOrderItems.find(
            (item) => item.product.id === productId
          );
          return item;
        })
      );
      selectedInCartItemsOutput.forEach(async (item) => {
        await createOrderItemByOrderId({
          orderId,
          product: item.product,
          inputQuantity: item.inputQuantity,
        });
      });
    }
    navigate('/order/placeOrder');
  };
  useEffect(() => {
    if (isSelectAllInCartItems) {
      const result = inCartOrderItems.reduce((acc, item) => {
        return acc + item.product.price * item.inputQuantity;
      }, 0);
      setAllProductPrice(result);
    } else if (!isSelectAllInCartItems) {
      setAllProductPrice(selectedInCartItemsPrice);
    }
  }, [isSelectAllInCartItems, inCartOrderItems, selectedInCartItemsPrice]);

  useEffect(() => {
    const fetchSelectedInCartItemsOutput = async () => {
      const result = await Promise.all(
        selectedInCartItems.map(async (productId) => {
          const item = inCartOrderItems.find(
            (item) => item.product.id === productId
          );
          return item;
        })
      );
      return result;
    };
    fetchSelectedInCartItemsOutput().then((result) => {
      const res = result.reduce((acc, item) => {
        return acc + item.product.price * item.inputQuantity;
      }, 0);
      setSelectedInCartItemsPrice(res);
    });
  }, []);

  return (
    <div className="px-2 bg-light1 d-flex py-3 align-items-center ">
      <div className="ms-2 col-5 d-flex gap-3 ">
        <div className="col-1 align-items-center">
          <SquareCheckBox
            onClickWhenNotChecked={handleCheckBoxWhenNotChecked}
            onClickWhenChecked={handleCheckBoxWhenChecked}
            isSelectAllButton={isSelectAllButton}
            state={isSelectAllInCartItems}
          ></SquareCheckBox>
        </div>
        <div className="font-text2">Select all (x)</div>
        <div className="link-text5" onClick={() => setInCartOrderItems([])}>
          Delete
        </div>
      </div>
      <div className="col-7 d-flex">
        <div className="font-text-secondary d-flex gap-2 font-size-20 col-6 align-items-center justify-content-center">
          <div>Store price: </div>
          <DigitWithBahtIcon digit={allProductPrice} />
        </div>
        <div className="col-6 px-5">
          <Button
            onClick={handleCheckoutButton}
            className={'my-btn-primary col6'}
          >
            Check out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutInCartOrder;
