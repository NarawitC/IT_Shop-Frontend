import { useEffect } from 'react';

import SignUpForm1 from '../../components/auth/SignUpForm1';
import SignUpForm2 from '../../components/auth/SignUpForm2';
import SignUpFormYup from "../../components/auth/SignUpFormYup";
import { useAuthContext } from '../../contexts/AuthContext';

function SignUpPage() {
  const { signUpPage, setSignUpPage } = useAuthContext();
  useEffect(() => {
    setSignUpPage('1');
  }, []);
  return (
    <div className="container-fluid content-default-width mx-auto">
      <SignUpFormYup></SignUpFormYup>
      {/* {signUpPage === '1' ? <SignUpForm1 /> : null}
      {signUpPage === '2' ? <SignUpForm2 /> : null} */}
    </div>
  );
}

export default SignUpPage;
