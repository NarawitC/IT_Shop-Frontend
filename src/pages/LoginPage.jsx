import LoginForm from '../components/auth/SignInForm';
import ITShop from '../components/layout/logo/ITShop';


function LoginPage() {
  return (
    <div className="container-fluid content-default-width d-flex justify-content-between align-items-center mx-auto">
      <ITShop fontSize={'4rem'}></ITShop>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
