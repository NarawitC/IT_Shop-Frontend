import OrderItemRow from '../orderItem/OrderItemRow';

function UserSelectedInCartOrder({ selectedInCartOrder }) {
  const { OrderItems } = selectedInCartOrder;
  return (
    <div className="d-flex flex-column px-2 bg-light1">
      {OrderItems.map((orderItem) => (
        <OrderItemRow key={orderItem.id} orderItem={orderItem} />
      ))}
    </div>
  );
}

export default UserSelectedInCartOrder;
