import SignInForm from '../../components/auth/SignInForm';
import ITShop from '../../components/layout/logo/ITShop';

function SignInPage() {
  return (
    <div className="container-fluid content-default-width d-flex justify-content-between align-items-center mx-auto">
      <ITShop fontSize={'4rem'}></ITShop>
      <SignInForm />
    </div>
  );
}

export default SignInPage;
