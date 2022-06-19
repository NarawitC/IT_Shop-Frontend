import { useState } from 'react';
import SignInFormYup from '../../../components/auth/SignInFormYup';
import ITShop from '../../../components/layout/logo/ITShop';
import LoadingPage from '../../LoadingPage';

function AdminSignInPage() {
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

export default AdminSignInPage;
