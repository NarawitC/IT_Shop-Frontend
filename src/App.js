import { Toast } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';
import Router from './routes/Router';

import { useErrorContext } from './contexts/ErrorContext';

import UserContextProvider from './contexts/UserContext';
import OrderContextProvider from './contexts/OrderContext';
import AdminOrderContextProvider from './contexts/admin/AdminOrderContext';

function App() {
  const { error, setError } = useErrorContext();
  const toastEl = useRef();
  useEffect(() => {
    if (error) {
      const toast = new Toast(toastEl.current);
      toast.show();
      setTimeout(() => setError(null), 6000);
    }
  }, [error]);
  return (
    <UserContextProvider>
      <AdminOrderContextProvider>
        <OrderContextProvider>
          <Router />
          <div className={`toast-container fixed-bottom pb-5 mx-auto`}>
            <div
              className="toast align-items-center text-white bg-danger border-0"
              ref={toastEl}
            >
              <div className="d-flex">
                <div className="toast-body">{error}</div>
                <button
                  type="button"
                  className="btn-close btn-close-white me-2 m-auto"
                  data-bs-dismiss="toast"
                ></button>
              </div>
            </div>
          </div>
        </OrderContextProvider>
      </AdminOrderContextProvider>
    </UserContextProvider>
  );
}

export default App;
