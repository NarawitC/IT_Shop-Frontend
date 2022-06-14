import { useState } from 'react';
import Button from '../button/Button';
import Counter from '../common/Counter';
import { useOrderContext } from '../../contexts/OrderContext';

function ProductAddToCartSection({ product }) {
  const { inCartOrderItems, setInCartOrderItems } = useOrderContext();
  const { name, price, quantity: maxQuantity, id } = product;
  const [inputQuantity, setInputQuantity] = useState(1);
  const handleAddToCartButton = () => {
    setInCartOrderItems((prev) => {
      return [...prev, { product, inputQuantity }];
    });
  };
  function findInCartOrder(productId) {
    return inCartOrderItems.some((item) => item.product.id === productId);
  }
  const isProductInCart = findInCartOrder(id);
  return (
    <div className="bg-light1 px-5 py-3 d-flex flex-column gap-3">
      <div className="font-text-primary font-weight-500 font-size-20">
        {name}
      </div>
      <div>
        Store price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="font-weight-500 font-size-20">{price}</span>
      </div>
      <hr />
      <Counter
        maxQuantity={maxQuantity}
        onClickDecrease={() => setInputQuantity((prev) => prev - 1)}
        onClickIncrease={() => setInputQuantity((prev) => prev + 1)}
        state={inputQuantity}
      ></Counter>
      <hr />
      {isProductInCart ? null : (
        <Button onClick={handleAddToCartButton} className={'btn btn-primary'}>
          Add to cart
        </Button>
      )}
    </div>
  );
}

export default ProductAddToCartSection;
