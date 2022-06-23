import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ORDER_STATUS_PENDING } from '../../../config/env';
import DigitWithBahtIcon from '../../common/DigitWithBahtIcon';

import EyeButton from '../../common/EyeButton';

function AdminProductRow({ product }) {
  const navigate = useNavigate();
  const { id: productId, quantity, price, name, mainPicture } = product;

  const handleEyeBtnClick = () => {
    navigate(`/admin/product/updateProduct/${productId}`);
  };
  return (
    <div className="d-flex px-2 py-2 text-center align-items-center justify-content-between bg-light1">
      <div className="col-2  align-items-center text-center">
        <img src={mainPicture} style={{ width: '150px', height: '120px' }} />
      </div>
      <div className="col-3  align-items-center text-center">
        <div>{`Product name: ${name}`}</div>
        <div>{`Product id: ${productId}`}</div>
      </div>
      <div className="col-2 align-items-center text-center">{quantity}</div>
      <div className="col-2 align-items-center text-center">
        <DigitWithBahtIcon digit={price}></DigitWithBahtIcon>
      </div>
      <div className="col-2 align-items-center text-center">
        <EyeButton onClick={handleEyeBtnClick}></EyeButton>
      </div>
    </div>
  );
}

export default AdminProductRow;
