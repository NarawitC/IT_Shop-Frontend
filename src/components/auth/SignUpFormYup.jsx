import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import FormYup from '../layout/form/FormYup';
import InputYup from '../layout/form/InputYup';
import SubmitButtonYup from '../layout/form/SubmitButtonYup';
import TextAreaYup from '../layout/form/TextAreaYup';
import Header from '../layout/form/Header';
import { useAuthContext } from '../../contexts/AuthContext';
import { useErrorContext } from '../../contexts/ErrorContext';

function SignUpFormYup() {
  const { signUp } = useAuthContext();
  const { setError } = useErrorContext();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup
      .string()
      .required('Phone number is required')
      .min(10, 'Phone number must be 10 characters')
      .max(10, 'Phone number must be 10 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid format'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().required('Confirm password is required'),
    streetName: yup.string().trim().nullable(),
    province: yup.string().trim().nullable(),
    district: yup.string().trim().nullable(),
    postalCode: yup.string().trim().nullable(),
    addressDescription: yup.string().trim().nullable(),
  });

  const handleSignUpSubmit = async (data, reset) => {
    try {
      const { streetName, province, district, postalCode } = data;
      data.address =
        streetName + ' ' + province + ' ' + district + ' ' + postalCode;
      await signUp(data);
      navigate('/');
      reset();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <FormYup
      onSubmit={handleSignUpSubmit}
      defaultValues={{
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        streetName: '',
        province: '',
        district: '',
        postalCode: '',
        addressDescription: '',
      }}
      schema={schema}
    >
      <Header text={'Sign Up'}>
        <InputYup
          name="firstName"
          text={'First name'}
          placeholder="First name"
        ></InputYup>
        <InputYup
          name="lastName"
          text={'Last name'}
          placeholder="Last name"
        ></InputYup>
        <InputYup
          name="phoneNumber"
          text={'Phone number'}
          placeholder="Phone number"
        ></InputYup>
        <InputYup
          name="email"
          text={'Email address'}
          placeholder="Email Address"
        ></InputYup>
        <InputYup
          name="password"
          text={'Password'}
          placeholder="Password"
          type="password"
        ></InputYup>
        <InputYup
          name="confirmPassword"
          text={'Confirm password'}
          placeholder="Confirm password"
          type="password"
        ></InputYup>
        <InputYup
          name="streetName"
          text={'Street name, Building, House no.'}
          placeholder="Street name, Building, House no."
        ></InputYup>
        <InputYup
          name="province"
          text={'Province'}
          placeholder="Province"
        ></InputYup>
        <InputYup
          name="district"
          text={'District'}
          placeholder="District"
        ></InputYup>
        <InputYup
          name="postalCode"
          text={'Postal code'}
          placeholder="Postal code"
        ></InputYup>
        <TextAreaYup
          name="addressDescription"
          text={'Address description'}
          placeholder="Address description"
        ></TextAreaYup>
      </Header>
      <SubmitButtonYup className={'btn btn-primary'}>Sign Up</SubmitButtonYup>
    </FormYup>
  );
}

export default SignUpFormYup;
