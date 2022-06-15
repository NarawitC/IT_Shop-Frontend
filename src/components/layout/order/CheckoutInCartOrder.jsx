import { useState } from 'react';

import SquareCheckBox from '../../common/SquareCheckBox';
import { useOrderContext } from '../../../contexts/OrderContext';
import Button from '../../button/Button';
import DigitWithBahtIcon from '../../common/DigitWithBahtIcon';
import { createOrderAndDeleteInCartOrder } from '../../../api/user/order';
import { createOrderItemByOrderId } from '../../../api/user/orderItem';

function CheckoutInCartOrder() {
  const {
    inCartOrderItems,
    setInCartOrderItems,
    isSelectAllInCartItems,
    setIsSelectAllInCartItems,
    selectedInCartItems,
  } = useOrderContext();

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
      console.log(selectedInCartItemsOutput);
      selectedInCartItemsOutput.forEach(async (item) => {
        await createOrderItemByOrderId({
          orderId,
          product: item.product,
          inputQuantity: item.inputQuantity,
        });
      });
    }
  };

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
          <DigitWithBahtIcon
            digit={inCartOrderItems.reduce((acc, item) => {
              return acc + item.inputQuantity * item.product.price;
            }, 0)}
          />
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
