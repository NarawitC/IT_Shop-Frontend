import { useEffect } from 'react';

import UserPurchasedOrder from '../../../layout/order/UserPurchasedOrder';
import UserSelectedPurchasedOrder from '../../../layout/order/UserSelectedPurchasedOrder';
import AllOrderLayout from '../../../layout/order/layout/AllOrderLayout';
import OrderTopicSection from '../../../layout/order/OrderTopicSection';
import OrderPurchaseLayout from '../../../layout/order/layout/OrderPurchaseLayout';
import OrderItemListLayout from '../../../layout/orderItem/layout/OrderItemListLayout';
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
        <OrderPurchaseLayout>
          <UserSelectedPurchasedOrder
            selectedPurchasedOrder={selectedPurchasedOrder}
          />
        </OrderPurchaseLayout>
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
