import { useEffect } from 'react';

import UserPurchasedOrder from '../../../layout/order/UserPurchasedOrder';
import UserSelectedPurchasedOrder from '../../../layout/order/UserSelectedPurchasedOrder';
import AllOrderLayout from '../../../layout/order/layout/AllOrderLayout';
import OrderTopicSection from '../../../layout/order/OrderTopicSection';
import OrderItemListLayout from '../../../layout/orderItem/layout/OrderItemListLayout';
import OrderAndDeliveryLayout from '../../../layout/order/layout/OrderAndDeliveryLayout';
import AddressDetail from '../../../layout/order/AddressDetail';
import TotalPaymentDetail from '../../../layout/order/layout/TotalPaymentDetail';
import { getUserPurchasedOrders } from '../../../../api/user/user';
import { useUserContext } from '../../../../contexts/UserContext';

function UserMyPurchase() {
  const {
    purchasedOrders,
    setPurchasedOrders,
    selectedPurchasedOrder,
    setSelectedPurchasedOrder,
  } = useUserContext();

  useEffect(() => {
    const fetchPurchasedOrders = async () => {
      const { data } = await getUserPurchasedOrders();
      setPurchasedOrders(data.orders);
    };
    fetchPurchasedOrders();
  }, []);
  useEffect(() => {
    setSelectedPurchasedOrder(null);
  }, []);
  return (
    <>
      {selectedPurchasedOrder ? (
        <OrderAndDeliveryLayout>
          <AddressDetail
            selectedPurchasedOrder={selectedPurchasedOrder}
          ></AddressDetail>
          <AllOrderLayout>
            <OrderTopicSection
              textCol1={'Purchased products'}
              textCol2={'Price per unit'}
              textCol3={'Quantity'}
              textCol4={'Item subtotal'}
              textCol5={'View'}
            ></OrderTopicSection>
            <UserSelectedPurchasedOrder
              selectedPurchasedOrder={selectedPurchasedOrder}
            ></UserSelectedPurchasedOrder>
          </AllOrderLayout>
          <TotalPaymentDetail
            order={selectedPurchasedOrder}
          ></TotalPaymentDetail>
        </OrderAndDeliveryLayout>
      ) : (
        <AllOrderLayout>
          <OrderTopicSection
            textCol1={'Purchased order'}
            textCol2={'Price per unit'}
            textCol3={'Quantity'}
            textCol4={'Item subtotal'}
            textCol5={'View'}
          ></OrderTopicSection>
          <OrderItemListLayout>
            {purchasedOrders.map((order) => {
              return <UserPurchasedOrder key={order.id} order={order} />;
            })}
          </OrderItemListLayout>
        </AllOrderLayout>
      )}
    </>
  );
}

export default UserMyPurchase;
