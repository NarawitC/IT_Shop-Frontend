import { createContext, useState, useContext, useEffect } from 'react';

import { updateUserInfo } from '../api/user/user';

const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [page, setPage] = useState('Profile');
  const updateInfo = async ({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirmPassword,
    address,
    addressDescription,
  }) => {
    if (!address.trim()) {
      address = undefined;
    }
    if (!addressDescription.trim()) {
      addressDescription = undefined;
    }
    if (!password.trim()) {
      password = undefined;
    }
    if (!confirmPassword.trim()) {
      confirmPassword = undefined;
    }
    await updateUserInfo({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
      address,
      addressDescription,
    });
  };
  const [purchasedOrders, setPurchasedOrders] = useState([]);
  const [selectedPurchasedOrder, setSelectedPurchasedOrder] = useState(null);
  return (
    <UserContext.Provider
      value={{
        page,
        setPage,
        updateInfo,
        purchasedOrders,
        setPurchasedOrders,
        selectedPurchasedOrder,
        setSelectedPurchasedOrder,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

const useUserContext = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return ctx;
};
export { useUserContext };
