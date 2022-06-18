import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AddressDetail from '../../components/order/AddressDetail';
import AllOrderLayout from '../../components/layout/order/layout/AllOrderLayout';
import OrderAndDeliveryLayout from '../../components/layout/order/layout/OrderAndDeliveryLayout';
import OrderTopicSection from '../../components/order/OrderTopicSection';
import UserSelectedInCartOrder from '../../components/order/UserSelectedInCartOrder';
import { useOrderContext } from '../../contexts/OrderContext';
import TotalPaymentDetail from '../../components/layout/order/layout/TotalPaymentDetail';
import { getInCartOrder } from '../../api/user/order';

function OrderPlaceOrderPage() {
  const navigate = useNavigate();
  const { placeOrderOrder, setPlaceOrderOrder } = useOrderContext();
  useEffect(() => {
    const fetchInCartOrder = async () => {
      const { data } = await getInCartOrder();
      setPlaceOrderOrder(data.order);
    };
    fetchInCartOrder();
  }, []);
  const handlePlaceOrderButton = () => {
    navigate('/order/payment');
  };
  return (
    <div className="content-default-width mx-auto">
      <OrderAndDeliveryLayout>
        <AddressDetail placeOrderOrder={placeOrderOrder}></AddressDetail>
        <AllOrderLayout>
          <OrderTopicSection
            textCol1={'Product ordered'}
            textCol2={'Price per unit'}
            textCol3={'Quantity'}
            textCol4={'Item subtotal'}
            textCol5={'View'}
          ></OrderTopicSection>
          <UserSelectedInCartOrder
            placeOrderOrder={placeOrderOrder}
          ></UserSelectedInCartOrder>
        </AllOrderLayout>
        <TotalPaymentDetail
          buttonText={'Place order'}
          order={placeOrderOrder}
          onClick={handlePlaceOrderButton}
        ></TotalPaymentDetail>
      </OrderAndDeliveryLayout>
    </div>
  );
}

export default OrderPlaceOrderPage;
