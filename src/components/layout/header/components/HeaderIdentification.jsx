import Category from '../../sidebar/Category';
import ITShop from '../../logo/ITShop';

function HeaderIdentification({ pageStatus }) {
  const {
    isAuthPage,
    isProfilePage,
    isProductPage,
    isOrderPage,
    isAdminPage,
    isHomePage,
    identificationText,
  } = pageStatus;
  return (
    <div className="d-flex align-items-center justify-content-between ">
      {isAuthPage || isAdminPage ? null : <Category></Category>}
      <ITShop color={'white'}></ITShop>
      {isAuthPage || isAdminPage || isOrderPage ? (
        <div>&nbsp;=&gt;&nbsp;{`${identificationText}`}</div>
      ) : null}
    </div>
  );
}

export default HeaderIdentification;
