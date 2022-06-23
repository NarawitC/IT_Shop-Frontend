import { useEffect, useState } from 'react';
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

  let inCartOrderItemIdx;
  //| Check product in inCartOrderItems by product id
  function findInCartOrder(productId) {
    const inCartOrderItem = inCartOrderItems.find((item, idx) => {
      if (item.product.id === productId) {
        inCartOrderItemIdx = idx;
        return item;
      }
    });
    return inCartOrderItem;
  }

  //| update inCartOrderItems inputQuantity
  function handleUpdateInCartButton() {
    setInCartOrderItems((prev) => {
      prev[inCartOrderItemIdx].inputQuantity = inputQuantity;
      // console.log(prev);
      return prev;
    });
  }

  const productInCart = findInCartOrder(id);
  //| fetch inputQuantity inCartOrderItem
  useEffect(() => {
    if (productInCart) {
      setInputQuantity(productInCart.inputQuantity);
    }
  }, [productInCart]);
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
        state={maxQuantity && inputQuantity}
      ></Counter>
      <hr />
      {maxQuantity > 0 ? (
        <>
          {productInCart ? (
            <Button
              onClick={handleUpdateInCartButton}
              className={'my-btn-primary '}
            >
              Update In-Cart product
            </Button>
          ) : (
            <Button
              onClick={handleAddToCartButton}
              className={'btn btn-primary'}
            >
              Add to cart
            </Button>
          )}
        </>
      ) : null}
    </div>
  );
}

export default ProductAddToCartSection;
