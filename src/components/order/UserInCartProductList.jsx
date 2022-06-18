import { useOrderContext } from '../../contexts/OrderContext';
import ProductInCartRow from '../layout/product/ProductInCartRow';

function UserInCartProductList() {
  const { inCartOrderItems } = useOrderContext();

  return (
    <div className="d-flex flex-column px-2 bg-light1">
      {inCartOrderItems.map((item, idx) => (
        <ProductInCartRow key={idx} idx={idx} />
      ))}
    </div>
  );
}

export default UserInCartProductList;
