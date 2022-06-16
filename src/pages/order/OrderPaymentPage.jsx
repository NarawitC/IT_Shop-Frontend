import AllOrderLayout from '../../components/layout/order/layout/AllOrderLayout';
import OrderTopicSection from '../../components/layout/order/OrderTopicSection';
import UserSelectedInCartOrder from '../../components/layout/order/UserSelectedInCartOrder';
import { useOrderContext } from '../../contexts/OrderContext';
import Button from '../../components/button/Button';
import BankAccountReceivedMoney from './BankAccountReceivedMoney';

function OrderPaymentPage() {
  const { inCartOrder } = useOrderContext();
  return (
    <div className="content-default-width mx-auto">
      <div>
        <BankAccountReceivedMoney></BankAccountReceivedMoney>
      </div>
      <div></div>
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
            selectedInCartOrder={inCartOrder}
          ></UserSelectedInCartOrder>
          <section className="d-flex px-5 bg-light1 py-3 align-items-center justify-content-end">
            <Button className={'my-btn-primary w-25'}>Confirm</Button>
          </section>
        </AllOrderLayout>
      </div>
    </div>
  );
}

export default OrderPaymentPage;
