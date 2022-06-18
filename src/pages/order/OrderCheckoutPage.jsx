import AllOrderLayout from '../../components/layout/order/layout/AllOrderLayout';
import OrderTopicSection from '../../components/order/OrderTopicSection';
import UserInCartProductList from '../../components/order/UserInCartProductList';
import CheckOutInCartOrder from '../../components/order/CheckoutInCartOrder';
function OrderCheckoutPage() {
  return (
    <div className="content-default-width mx-auto">
      <AllOrderLayout>
        <OrderTopicSection
          backgroundColor="#0057e4"
          textColor="#ffffff"
          textCol1={'Product'}
          textCol2={'Price per unit'}
          textCol3={'Quantity'}
          textCol4={'Item subtotal'}
          textCol5={'Action'}
        ></OrderTopicSection>
        <UserInCartProductList />
        <CheckOutInCartOrder />
      </AllOrderLayout>
    </div>
  );
}

export default OrderCheckoutPage;
