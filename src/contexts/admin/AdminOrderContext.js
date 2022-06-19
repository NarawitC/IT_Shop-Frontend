import { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';

import { getAllOrders } from '../../api/admin/order';
import { ORDER_STATUS_PENDING } from '../../config/env';
import { useAdminAuthContext } from './AdminAuthContext';

const AdminOrderContext = createContext();
const AdminOrderContextProvider = ({ children }) => {
  const { admin } = useAdminAuthContext();

  const [allOrders, setAllOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    if (admin) {
      const fetchAllOrders = async () => {
        const {
          data: { orders },
        } = await getAllOrders();
        setAllOrders(orders);
      };
      fetchAllOrders();
    }
  }, [admin]);
  // console.log(allOrders);
  // console.log(pendingOrders);

  useEffect(() => {
    if (allOrders.length > 0) {
      const pendingOrders = allOrders.filter(
        (order) => order.status === ORDER_STATUS_PENDING
      );
      setPendingOrders(pendingOrders);
    }
  }, [allOrders]);

  return (
    <AdminOrderContext.Provider value={{ pendingOrders }}>
      {children}
    </AdminOrderContext.Provider>
  );
};

export default AdminOrderContextProvider;

const useAdminOrderContext = () => {
  const ctx = useContext(AdminOrderContext);
  if (!ctx) {
    throw new Error(
      'useAdminOrderContext must be used within a AdminOrderContextProvider'
    );
  }
  return ctx;
};
export { useAdminOrderContext };
