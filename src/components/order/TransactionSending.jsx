import { useOrderContext } from '../../contexts/OrderContext';
function TransactionSending() {
  const { setPaymentSlip } = useOrderContext();
  const handleInputChange = (e) => {
    setPaymentSlip(e.target.files[0]);
  };
  return (
    <div className="px-2 bg-light1 py-3 d-flex flex-column gap-3 mx-auto w-50">
      <div className="font-size-24 font-text-primary font-weight-500">
        &lt;Transaction evidence/&gt;
      </div>
      <div className="bg-primary" style={{ height: '0.2rem' }}></div>
      <div className="ms-5">
        <input
          className="form-control"
          type="file"
          onChange={handleInputChange}
        ></input>
      </div>
    </div>
  );
}

export default TransactionSending;
