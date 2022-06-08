import * as yup from 'yup';

import FormYup from '../layout/form/FormYup';
import InputYup from '../layout/form/InputYup';
import SubmitButtonYup from '../layout/form/SubmitButtonYup';
import Header from '../layout/form/Header';
import Button from '../button/Button';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function SignInFormYup() {
  const navigate = useNavigate();
  const { signIn } = useAuthContext();

  const schema = yup.object().shape({
    email: yup.string().required('Email is requied').email('Email'),
    password: yup.string().required('Password is requied'),
  });

  const handleSignInSubmit = async (data, reset) => {
    try {
      await signIn({
        email: data.email,
        password: data.password,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  const handleSignUpBtn = () => {
    navigate('/auth/signUp');
  };
  return (
    <FormYup
      style={{ width: '400px' }}
      onSubmit={handleSignInSubmit}
      defaultValues={{ email: '', password: '' }}
      schema={schema}
    >
      <Header text={'Sign In'}>
        <InputYup
          name="email"
          text={'Email address'}
          placeholder="Email Address"
        ></InputYup>
        <InputYup
          name="password"
          text={'Password'}
          placeholder="Password"
        ></InputYup>
      </Header>
      <SubmitButtonYup className={'btn btn-primary'}>Sign In</SubmitButtonYup>
      <Button className={'btn btn-primary'} onClick={handleSignUpBtn}>
        Sign Up
      </Button>
    </FormYup>
  );
}

export default SignInFormYup;
