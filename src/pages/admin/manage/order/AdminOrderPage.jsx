import AllOrderLayout from '../../../../components/layout/order/layout/AllOrderLayout';
import OrderListLayout from '../../../../components/layout/orderItem/layout/OrderListLayout';
import AdminOrderTopicSection from '../../../../components/order/AdminOrderTopicSection';
import { useAdminOrderContext } from '../../../../contexts/admin/AdminOrderContext';
import AdminOrderRow from '../../../../components/layout/order/AdminOrderRow';

function AdminOrderPage() {
  const { pendingOrders } = useAdminOrderContext();
  return (
    <div>
      <AllOrderLayout>
        <AdminOrderTopicSection
          backgroundColor={'#43464e'}
          textColor={'#ffffff'}
          textCol1={'Order id'}
          textCol2={'Payment date'}
          textCol3={'User id'}
          textCol4={'View'}
        ></AdminOrderTopicSection>
        <OrderListLayout>
          {pendingOrders.map((order) => (
            <AdminOrderRow key={order.id} order={order}></AdminOrderRow>
          ))}
        </OrderListLayout>
      </AllOrderLayout>
    </div>
  );
}

export default AdminOrderPage;
