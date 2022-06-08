import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Button from '../button/Button';
import Form from '../layout/form/Form';
import Input from '../layout/form/Input';
import Header from '../layout/form/Header';
import { useAuthContext } from '../../contexts/AuthContext';

function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuthContext();
  const handleSignInBtn = async (e) => {
    e.preventDefault();
    await signIn({ email, password });
    navigate('/');
  };
  const handleSignUpBtn = () => {
    navigate('/auth/signUp');
  };

  return (
    <Form width={'400px'}>
      <Header text={'Sign In'}>
        <Input
          text={'Email address'}
          inputType={'email'}
          setState={setEmail}
        ></Input>
        <Input
          text={'Password'}
          inputType={'password'}
          setState={setPassword}
        ></Input>
      </Header>

      <div className="col d-flex flex-column gap-3">
        <Button
          className=" btn btn-primary"
          onClick={handleSignInBtn}
          text="Sign In"
        ></Button>
        <Button
          className="btn btn-primary"
          onClick={handleSignUpBtn}
          text="Sign Up"
        ></Button>
      </div>
    </Form>
  );
}

export default SignInForm;
