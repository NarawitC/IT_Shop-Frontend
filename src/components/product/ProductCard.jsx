import { Link } from 'react-router-dom';
import DigitWithBahtIcon from '../common/DigitWithBahtIcon';
function ProductCard({ product }) {
  const { id, name, price = 'xxx', mainPicture, description } = product;
  const defaultMainPicture =
    'https://res.cloudinary.com/narawit/image/upload/v1655109981/IT_Shop/Default%20photo/defaultSubPicture_e1uec8.png';
  const testPic = 'https://picsum.photos/700/700';
  const shortDescription =
    description.length > 100
      ? description.substring(0, 100) + '...'
      : description;
  return (
    <div className="card p-1 my-2" style={{ width: ' 250px' }}>
      <img
        src={`${mainPicture || testPic}`}
        className="card-img-top img-fluid"
        style={{ height: '200px' }}
      ></img>
      <div className="px-1 py-1 d-flex flex-column justify-content-between gap-1">
        <div className="font-weight-500 font-size-20">{name}</div>
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
