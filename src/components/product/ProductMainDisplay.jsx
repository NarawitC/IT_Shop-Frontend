import { useNavigate } from 'react-router-dom';
import { LineIcon } from '../icon/icon';

import ProductFacility from './ProductFacility';
function ProductMainDisplay({ product }) {
  const navigate = useNavigate();
  const {
    mainPicture,
    subPicture1,
    subPicture2,
    subPicture3,
    subPicture4,
    name,
    description,
  } = product;
  return (
    <div className="bg-light1 d-flex justify-content-center gap-3 p-4">
      <div className="col-6 d-flex flex-column gap-2">
        <div className="d-flex justify-content-around">
          <img
            src={mainPicture}
            alt=""
            style={{ width: '375px', height: '300px' }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <img
            src={subPicture1}
            alt=""
            style={{ width: '80px', height: '64px' }}
          />
          <img
            src={subPicture2}
            alt=""
            style={{ width: '80px', height: '64px' }}
          />
          <img
            src={subPicture3}
            alt=""
            style={{ width: '80px', height: '64px' }}
          />
          <img
            src={subPicture4}
            alt=""
            style={{ width: '80px', height: '64px' }}
          />
        </div>
      </div>
      <div className="col-6 d-flex flex-column gap-3">
        <section>
          <div className="font-size-24 font-weight-500 text-primary">
            {name}
          </div>
          <div className="ms-4 font-size-14">{description}</div>
        </section>
        <section>
          <div className="font-size-20 ">Chat with us</div>
          <button className="btn-green-i" onClick={() => navigate('/line')}>
            <LineIcon style={{ fontSize: '20px' }}></LineIcon>
          </button>
        </section>
        <section>
          <ProductFacility></ProductFacility>
        </section>
      </div>
    </div>
  );
}

export default ProductMainDisplay;
