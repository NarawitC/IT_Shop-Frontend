import OrderItemRow from '../layout/orderItem/OrderItemRow';

function AdminSelectedPendingOrder({ order }) {
  const { OrderItems } = order;
  return (
    <div className="d-flex flex-column px-2 bg-light1 py-2">
      {OrderItems.map((orderItem) => (
        <OrderItemRow key={orderItem.id} orderItem={orderItem} />
      ))}
    </div>
  );
}

export default AdminSelectedPendingOrder;
