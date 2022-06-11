import { createContext, useState, useContext, useEffect } from 'react';
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [page, setPage] = useState('1');
  return (
    <UserContext.Provider value={{ page, setPage }}>
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
