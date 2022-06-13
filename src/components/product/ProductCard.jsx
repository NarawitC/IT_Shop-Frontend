import { Link } from 'react-router-dom';
import DigitWithBahtIcon from '../common/DigitWithBahtIcon';
function ProductCard({ product }) {
  const { id, name, price = 'xxx', mainPicture, description } = product;

  const shortDescription =
    description.length > 100
      ? description.substring(0, 100) + '...'
      : description;
  return (
    <div className="card p-1 my-2" style={{ width: ' 250px' }}>
      <Link to={`/product/info/${id}`}>
        <img
          src={`${mainPicture}`}
          className="card-img-top img-fluid"
          style={{ height: '200px' }}
          alt="..."
        ></img>
      </Link>
      <div className="px-1 py-1 d-flex flex-column justify-content-between gap-1">
        <Link
          to={`/product/${id}`}
          className="link-text2  font-weight-500 font-size-20"
        >
          {name}
        </Link>
        <div className="font-size-12">{shortDescription}</div>
        <div className=" d-flex justify-content-end me-3">
          <DigitWithBahtIcon
            className=" font-text-primary"
            digit={price}
          ></DigitWithBahtIcon>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
