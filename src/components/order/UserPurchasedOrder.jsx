import OrderItemRow from '../layout/orderItem/OrderItemRow';

import { dateFormat } from '../../services/dateFormat';
import OrderPurchaseLayout from '../layout/order/layout/OrderPurchaseLayout';

function UserPurchasedOrder({ order }) {
  const { OrderItems, paymentAt, deliveryAddress } = order;

  return (
    <div className="d-flex flex-column px-2 bg-light1 ">
      <div>
        <div className="col-6 font-size-12">
          Payment date: {dateFormat(paymentAt)}
        </div>
        <div className="col-6 font-size-12">
          Delivery address: {deliveryAddress}
        </div>
      </div>
      <div className="hr-primary "></div>
      <OrderPurchaseLayout>
        {OrderItems.map((orderItem) => (
          <OrderItemRow
            key={orderItem.id}
            orderItem={orderItem}
            order={order}
          />
        ))}
      </OrderPurchaseLayout>
    </div>
  );
}

export default UserPurchasedOrder;
