import { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';
import { getInCartOrder } from '../api/user/order';

import { useAuthContext } from './AuthContext';

const OrderContext = createContext();
const OrderContextProvider = ({ children }) => {
  const { user } = useAuthContext();

  const [inCartOrderItems, setInCartOrderItems] = useState([]);
  const [selectedInCartItems, setSelectedInCartItems] = useState([]);
  const [allProductPrice, setAllProductPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [paymentSlip, setPaymentSlip] = useState(false);
  //| fetch In cart order that use to display
  const [placeOrderOrder, setPlaceOrderOrder] = useState({});

  useEffect(() => {
    if (user) {
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
    }
  }, [user]);

  return (
    <OrderContext.Provider
      value={{
        inCartOrderItems,
        setInCartOrderItems,
        selectedInCartItems,
        setSelectedInCartItems,
        allProductPrice,
        setAllProductPrice,
        deliveryPrice,
        setDeliveryPrice,
        placeOrderOrder,
        setPlaceOrderOrder,
        paymentSlip,
        setPaymentSlip,
      }}
    >
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
