import AllOrderLayout from '../../components/layout/order/layout/AllOrderLayout';
import OrderTopicSection from '../../components/order/OrderTopicSection';
import UserSelectedInCartOrder from '../../components/order/UserSelectedInCartOrder';
import { useOrderContext } from '../../contexts/OrderContext';
import Button from '../../components/button/Button';
import BankAccountReceivedMoney from '../../components/order/BankAccountReceivedMoney';
import TransactionSending from '../../components/order/TransactionSending';
import { updateOrderToPending } from '../../api/user/order';
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from '../../contexts/ErrorContext';
import LoadingPage from '../../pages/LoadingPage';
import { useState } from 'react';

function OrderPaymentPage() {
  const { setError } = useErrorContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { placeOrderOrder, deliveryPrice, paymentSlip, allProductPrice } =
    useOrderContext();
  const handleConfirmPaymentButton = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      // console.log(paymentSlip);
      formData.append('paymentSlip', paymentSlip);
      formData.append('deliveryPrice', deliveryPrice);
      formData.append('productPrice', allProductPrice);
      await updateOrderToPending(formData);
      setIsLoading(false);
      navigate('/order/completed');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="content-default-width mx-auto d-flex flex-column gap-4">
      <div>
        <BankAccountReceivedMoney></BankAccountReceivedMoney>
      </div>
      <div>
        <TransactionSending></TransactionSending>
      </div>
      <div>
        <AllOrderLayout>
          <OrderTopicSection
            textCol1={'Product'}
            textCol2={'Price per unit'}
            textCol3={'Quantity'}
            textCol4={'Item subtotal'}
            textCol5={'Action'}
          ></OrderTopicSection>
          <UserSelectedInCartOrder
            placeOrderOrder={placeOrderOrder}
          ></UserSelectedInCartOrder>
          <section className="d-flex px-5 bg-light1 py-3 align-items-center justify-content-end">
            <Button
              onClick={handleConfirmPaymentButton}
              className={'my-btn-primary w-25'}
            >
              Confirm
            </Button>
          </section>
        </AllOrderLayout>
      </div>
    </div>
  );
}

export default OrderPaymentPage;
