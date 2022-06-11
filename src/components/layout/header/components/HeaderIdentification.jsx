import Category from '../../sidebar/Category';
import ITShop from '../../logo/ITShop';
import { useAuthContext } from '../../../../contexts/AuthContext';

function HeaderIdentification({ pageStatus }) {
  const { user } = useAuthContext();
  const {
    isAuthPage,
    isUserPage,
    isProductPage,
    isOrderPage,
    isAdminPage,
    isHomePage,
  } = pageStatus;
  let { identificationText } = pageStatus;
  if (isUserPage) {
    identificationText = user.firstName + ' ' + user.lastName;
  }
  return (
    <div className="d-flex align-items-center justify-content-between ">
      {isAuthPage || isAdminPage ? null : <Category></Category>}
      <ITShop color={'white'}></ITShop>
      {
        (isAuthPage || isAdminPage || isOrderPage,
        isUserPage ? (
          <div>&nbsp;=&gt;&nbsp;{`${identificationText}`}</div>
        ) : null)
      }
    </div>
  );
}

export default HeaderIdentification;
