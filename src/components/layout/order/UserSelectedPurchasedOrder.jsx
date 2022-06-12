import OrderItemRow from '../orderItem/OrderItemRow';

function UserSelectedPurchasedOrder({ selectedPurchasedOrder }) {
  const { OrderItems } = selectedPurchasedOrder;
  return (
    <div className="d-flex flex-column px-2 bg-light1">
      {OrderItems.map((orderItem) => (
        <OrderItemRow key={orderItem.id} orderItem={orderItem} />
      ))}
    </div>
  );
}

export default UserSelectedPurchasedOrder;
