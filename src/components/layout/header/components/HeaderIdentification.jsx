import Category from '../../sidebar/Category';
import ITShop from '../../logo/ITShop';

function HeaderIdentification() {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{ width: '220px' }}
    >
      <Category></Category>
      <ITShop color={'white'}></ITShop>
    </div>
  );
}

export default HeaderIdentification;
