import axios from '../../config/axios';
import { useState } from 'react';

import Button from '../button/Button';
import Form from '../layout/form/Form';
import Header from '../layout/form/Header';
import Input from '../layout/form/Input';
import { InputTextArea } from '../layout/form/Input';
import { useAuthContext } from '../../contexts/AuthContext';

function SignUpForm2() {
  const {
    setSignUpPage,
    setStreetName,
    setProvince,
    setDistrict,
    setPostalCode,
    setAddressDescription,
    signUp,
  } = useAuthContext();

  const handleSignUpBtn = async (e) => {
    e.preventDefault();
    await signUp();
  };

  return (
    <Form>
      <Header text={'Address'}>
        <Input
          text={'Street name, Building, House no.'}
          setState={setStreetName}
        ></Input>
        <Input text={'Province'} setState={setProvince}></Input>
        <Input text={'District'} setState={setDistrict}></Input>
        <Input text={'PostalCode'} setState={setPostalCode}></Input>

        <InputTextArea
          text={'Address description'}
          setState={setAddressDescription}
        ></InputTextArea>
      </Header>

      <div className="col d-flex flex-column gap-3">
        <Button
          className=" btn btn-primary"
          onClick={handleSignUpBtn}
          text="Sign Up"
        ></Button>
      </div>
    </Form>
  );
}

export default SignUpForm2;
