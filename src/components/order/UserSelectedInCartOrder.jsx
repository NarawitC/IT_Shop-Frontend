import OrderItemRow from '../layout/orderItem/OrderItemRow';

function UserSelectedInCartOrder({ placeOrderOrder }) {
  const { OrderItems = [] } = placeOrderOrder;
  return (
    <div className="d-flex flex-column px-2 bg-light1 py-2">
      {OrderItems.map((orderItem) => (
        <OrderItemRow key={orderItem.Product.id} orderItem={orderItem} />
      ))}
    </div>
  );
}

export default UserSelectedInCartOrder;
