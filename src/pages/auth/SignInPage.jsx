import ITShop from '../../components/layout/logo/ITShop';
import SignInFormYup from '../../components/auth/SignInFormYup';
import { useState } from 'react';
import LoadingPage from '../LoadingPage';

function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="container-fluid content-default-width d-flex justify-content-between align-items-center mx-auto">
      <ITShop fontSize={'4rem'}></ITShop>
      <SignInFormYup setIsLoading={setIsLoading}></SignInFormYup>
    </div>
  );
}

export default SignInPage;
