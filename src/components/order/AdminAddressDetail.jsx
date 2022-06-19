import { LocationIcon } from '../icon/icon';
import AddressHr from '../layout/order/components/AddressHr';
function AdminAddressDetail({ order }) {
  const {
    deliveryAddress,
    User: { phoneNumber, firstName, lastName },
  } = order;

  return (
    <div className="bg-light1 d-flex flex-column gap-4 justify-content-between pb-4 ">
      <AddressHr></AddressHr>
      <div className="d-flex ps-5 gap-3 font-text-secondary align-items-center">
        <LocationIcon></LocationIcon>
        <div className="font-weight-500">Delivery address</div>
      </div>

      <div className="d-flex ps-4">
        <div className="d-flex flex-column justify-content-between gap-1 col-5">
          <div>
            Name: {firstName} {lastName}
          </div>
          <div>Phone number: {phoneNumber}</div>
        </div>
        <div className="font-text2">Delivery address: {deliveryAddress}</div>
      </div>
    </div>
  );
}

export default AdminAddressDetail;
