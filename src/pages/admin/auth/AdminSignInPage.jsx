import SignInFormYup from "../../../components/auth/SignInFormYup";
import ITShop from "../../../components/layout/logo/ITShop";

function AdminSignInPage() {
  return (
    <div className="container-fluid content-default-width d-flex justify-content-between align-items-center mx-auto">
      <ITShop fontSize={'4rem'}></ITShop>
      <SignInFormYup></SignInFormYup>
    </div>
  );
}

export default AdminSignInPage;
