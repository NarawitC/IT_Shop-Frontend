import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useOrderContext } from '../../contexts/OrderContext';
import Button from '../button/Button';
import DigitWithBahtIcon from '../common/DigitWithBahtIcon';
import { createOrderAndDeleteInCartOrder } from '../../api/user/order';
import { createOrderItemByOrderId } from '../../api/user/orderItem';

function CheckoutInCartOrder() {
  const {
    allProductPrice,
    setAllProductPrice,
    selectedInCartItems,
    setSelectedInCartItems,
  } = useOrderContext();
  const navigate = useNavigate();

  const handleCheckoutButton = async () => {
    const {
      data: { order },
    } = await createOrderAndDeleteInCartOrder();
    selectedInCartItems.forEach(async (item) => {
      await createOrderItemByOrderId(
        order.id,
        item.product,
        item.inputQuantity
      );
    });
    navigate('/order/placeOrder');
  };

  useEffect(() => {
    setAllProductPrice(
      selectedInCartItems.reduce((acc, item) => {
        return acc + item.product.price * item.inputQuantity;
      }, 0)
    );
  }, [selectedInCartItems]);
  useEffect(() => {
    setSelectedInCartItems([]);
  }, []);

  return (
    <div className="px-2 bg-light1 d-flex py-3 align-items-center ">
      <div className="ms-2 col-5 d-flex gap-3 "></div>
      <div className="col-7 d-flex">
        <div className="font-text-secondary d-flex gap-2 font-size-20 col-6 align-items-center justify-content-center">
          <div>Product price: </div>
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
