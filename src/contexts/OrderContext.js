import { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';
import { getInCartOrder } from '../api/user/order';

const OrderContext = createContext();
const OrderContextProvider = ({ children }) => {
  const [inCartOrderItems, setInCartOrderItems] = useState([]);
  useEffect(() => {
    const fetchInCartOrder = async () => {
      const {
        data: {
          order: { OrderItems },
        },
      } = await getInCartOrder();

      OrderItems.forEach((orderItem) => {
        setInCartOrderItems((prev) => {
          return [
            ...prev,
            { product: orderItem.Product, inputQuantity: orderItem.quantity },
          ];
        });
      });
    };
    fetchInCartOrder();
  }, []);

  return (
    <OrderContext.Provider value={{ inCartOrderItems, setInCartOrderItems }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

const useOrderContext = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) {
    throw new Error(
      'useOrderContext must be used within a OrderContextProvider'
    );
  }
  return ctx;
};
export { useOrderContext };
