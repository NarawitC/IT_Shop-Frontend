import { useEffect } from 'react';

import SignUpForm1 from '../../components/auth/SignUpForm1';
import SignUpForm2 from '../../components/auth/SignUpForm2';
import SignUpYup from '../../components/auth/SignInYup';
import { useAuthContext } from '../../contexts/AuthContext';

function SignUpPage() {
  const { signUpPage, setSignUpPage } = useAuthContext();
  useEffect(() => {
    setSignUpPage('1');
  }, []);
  return (
    <div className="container-fluid content-default-width mx-auto">
      <SignUpYup></SignUpYup>
      {/* {signUpPage === '1' ? <SignUpForm1 /> : null}
      {signUpPage === '2' ? <SignUpForm2 /> : null} */}
    </div>
  );
}

export default SignUpPage;
