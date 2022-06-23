import { useParams } from 'react-router-dom';

import AllOrderLayout from '../../../../components/layout/order/layout/AllOrderLayout';
import OrderAndDeliveryLayout from '../../../../components/layout/order/layout/OrderAndDeliveryLayout';
import AdminTotalPaymentDetail from '../../../../components/layout/order/layout/AdminTotalPaymentDetail';

import AdminAddressDetail from '../../../../components/order/AdminAddressDetail';
import OrderTopicSection from '../../../../components/order/OrderTopicSection';
import AdminSelectedPendingOrder from '../../../../components/order/AdminSelectedPendingOrder';

import { useAdminOrderContext } from '../../../../contexts/admin/AdminOrderContext';

function AdminSelectedPendingOrderPage() {
  const { orderId } = useParams();
  const { pendingOrders } = useAdminOrderContext();
  const selectedPendingOrder = pendingOrders.find((order) => {
    return order.id === +orderId;
  });
  return (
    <div>
      <OrderAndDeliveryLayout>
        <AdminAddressDetail order={selectedPendingOrder}></AdminAddressDetail>
        <AllOrderLayout>
          <OrderTopicSection
            textCol1={'Purchased products'}
            textCol2={'Price per unit'}
            textCol3={'Quantity'}
            textCol4={'Item subtotal'}
            // textCol5={'View'}
          ></OrderTopicSection>
          <AdminSelectedPendingOrder
            order={selectedPendingOrder}
          ></AdminSelectedPendingOrder>
        </AllOrderLayout>
        <div className="d-flex justify-content-center bg-light1 py-3">
          <img
            src={selectedPendingOrder.paymentSlip}
            alt=""
            style={{ maxHeight: '600px' }}
          />
        </div>
        <AdminTotalPaymentDetail
          order={selectedPendingOrder}
        ></AdminTotalPaymentDetail>
      </OrderAndDeliveryLayout>
    </div>
  );
}

export default AdminSelectedPendingOrderPage;
