import DigitWithBahtIcon from '../common/DigitWithBahtIcon';
import { useOrderContext } from '../../contexts/OrderContext';

function BankAccountReceivedMoney() {
  const { allProductPrice, deliveryPrice } = useOrderContext();
  return (
    <div className="px-2 bg-light1 py-3 d-flex flex-column gap-3 ">
      <div className="d-flex w-75 justify-content-between mx-auto ">
        <div className="d-flex gap-3">
          <div className="col-3">
            <img
              src="https://res.cloudinary.com/narawit/image/upload/v1655454457/IT_Shop/Bank/Bank_logo_py20tk.png"
              alt=""
              width={'100%'}
            />
          </div>
          <div className="d-flex flex-column justify-content-evenly">
            <div className="font-size-20 font-weight-500">KASIKORNBANK</div>
            <div>Bank account: xxx-x-xxxxx-x</div>
            <div>Account name: IT_SHOP co. ltd</div>
          </div>
        </div>
        <div className="flex-fill d-flex justify-content-evenly flex-column gap-1">
          <div className="d-flex justify-content-between align-items-center font-text2">
            <div>Product price:</div>
            <div>{allProductPrice}</div>
          </div>
          <div className="d-flex justify-content-between align-items-center font-text2">
            <div>Delivery price:</div>
            <div>{deliveryPrice}</div>
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className="font-text2">Total Payment:</div>
            <div className="font-text-secondary font-size-20 font-weight-500">
              <DigitWithBahtIcon
                digit={allProductPrice + deliveryPrice}
              ></DigitWithBahtIcon>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img
          src="https://res.cloudinary.com/narawit/image/upload/v1655454213/IT_Shop/Bank/QR-code_cbjgun.jpg"
          alt=""
          width={'300px'}
        />
      </div>
    </div>
  );
}

export default BankAccountReceivedMoney;
