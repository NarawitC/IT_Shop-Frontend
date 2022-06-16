import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AddressDetail from '../../components/layout/order/AddressDetail';
import AllOrderLayout from '../../components/layout/order/layout/AllOrderLayout';
import OrderAndDeliveryLayout from '../../components/layout/order/layout/OrderAndDeliveryLayout';
import TotalPaymentDetail from '../../components/layout/order/layout/TotalPaymentDetail';
import OrderTopicSection from '../../components/layout/order/OrderTopicSection';
import UserSelectedInCartOrder from '../../components/layout/order/UserSelectedInCartOrder';
import { getInCartOrder } from '../../api/user/order';

function OrderPlaceOrderPage() {
  const navigate = useNavigate();
  const [inCartOrder, setInCartOrder] = useState({});
  useEffect(() => {
    const fetchInCartOrder = async () => {
      const { data } = await getInCartOrder();
      setInCartOrder(data.order);
    };
    fetchInCartOrder();
  }, []);
  const handlePlaceOrderButton = () => {
    navigate('/order/payment');
  };
  return (
    <div className="content-default-width mx-auto">
      <OrderAndDeliveryLayout>
        <AddressDetail selectedInCartOrder={inCartOrder}></AddressDetail>
        <AllOrderLayout>
          <OrderTopicSection
            textCol1={'Product ordered'}
            textCol2={'Price per unit'}
            textCol3={'Quantity'}
            textCol4={'Item subtotal'}
            textCol5={'View'}
          ></OrderTopicSection>
          <UserSelectedInCartOrder
            selectedInCartOrder={inCartOrder}
          ></UserSelectedInCartOrder>
        </AllOrderLayout>
        <TotalPaymentDetail
          buttonText={'Place order'}
          order={inCartOrder}
          onClick={handlePlaceOrderButton}
        ></TotalPaymentDetail>
      </OrderAndDeliveryLayout>
    </div>
  );
}

export default OrderPlaceOrderPage;
