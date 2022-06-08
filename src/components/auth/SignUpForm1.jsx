import { useState } from 'react';

import Button from '../button/Button';
import Form from '../layout/form/Form';
import Header from '../layout/form/Header';
import Input from '../layout/form/Input';
import { useAuthContext } from '../../contexts/AuthContext';

function SignUpForm1() {
  const {
    setSignUpPage,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setEmail,
    setPassword,
    setConfirmPassword,
  } = useAuthContext();

  const handleSignUpNextBtn = async (e) => {
    e.preventDefault();
    setSignUpPage('2');
  };

  return (
    <Form>
      <Header text={'Sign Up'}>
        <Input text={'First name'} setState={setFirstName}></Input>
        <Input text={'Last name'} setState={setLastName}></Input>
        <Input text={'Phone number'} setState={setPhoneNumber}></Input>
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
        <Input
          text={'Confirm password'}
          inputType={'password'}
          setState={setConfirmPassword}
        ></Input>
      </Header>

      <div className="col d-flex flex-column gap-3">
        <Button
          className=" btn btn-primary"
          onClick={handleSignUpNextBtn}
          text="Next"
        ></Button>
      </div>
    </Form>
  );
}

export default SignUpForm1;
