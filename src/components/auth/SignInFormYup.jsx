import * as yup from 'yup';

import FormYup from '../layout/form/FormYup';
import InputYup from '../layout/form/InputYup';
import SubmitButtonYup from '../layout/form/SubmitButtonYup';
import Header from '../layout/form/Header';
import Button from '../button/Button';
import { useAuthContext } from '../../contexts/AuthContext';
import { useAdminAuthContext } from '../../contexts/admin/AdminAuthContext';
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from '../../contexts/ErrorContext';
import { checkLocation } from '../../services/checkLocation';
import { useLocation } from 'react-router-dom';

function SignInFormYup() {
  const location = useLocation();
  const { isAdminPage } = checkLocation(location.pathname);
  const navigate = useNavigate();
  const { signIn } = useAuthContext();
  const { signInAdmin } = useAdminAuthContext();
  const { setError } = useErrorContext();

  const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Email'),
    password: yup.string().required('Password is required'),
  });

  const handleSignInSubmit = async (data, reset) => {
    try {
      if (isAdminPage) {
        await signInAdmin({
          email: data.email,
          password: data.password,
        });
      } else {
        await signIn({
          email: data.email,
          password: data.password,
        });
      }
      navigate('/');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleSignUpBtn = () => {
    navigate('/auth/signUp');
  };
  return (
    <FormYup
      onSubmit={handleSignInSubmit}
      defaultValues={{ email: '', password: '' }}
      schema={schema}
      style={{ width: '400px' }}
    >
      <Header text={'Sign In'}>
        <InputYup
          name="email"
          text={'Email address'}
          placeholder="Email Address"
          autoComplete="false"
        ></InputYup>
        <InputYup
          name="password"
          text={'Password'}
          placeholder="Password"
          type="password"
          autoComplete="false"
        ></InputYup>
      </Header>
      <SubmitButtonYup className={'btn btn-primary'}>Sign In</SubmitButtonYup>
      {!isAdminPage && (
        <Button className={'btn btn-primary'} onClick={handleSignUpBtn}>
          Sign Up
        </Button>
      )}
    </FormYup>
  );
}

export default SignInFormYup;
