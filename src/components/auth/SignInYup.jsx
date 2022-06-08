import { useAuthContext } from '../../contexts/AuthContext';
// ------------------------------------------ Yup ------------------------------------------

import { FormYup } from '../layout/form/FormYup';
import * as yup from 'yup';
import InputYup from '../layout/form/InputYup';
import SubmitButton from '../layout/form/SubmitButton';
import { Navigate } from 'react-router-dom';

function SignUpYup() {
  const { signIn } = useAuthContext();

  // ------------------------------------------ Yup ------------------------------------------

  const schema = yup.object().shape({
    email: yup.string().required('Email is requied').email('Email'),
    Password: yup.string().required('Password is requied'),
  });

  const handleSubmitLogin = async (data, reset) => {
    console.log(data);
    try {
      const loginAccess = await signIn({
        email: data.Email,
        password: data.Password,
      });
      if (loginAccess) {
        Navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormYup
      onSubmit={handleSubmitLogin}
      defaultValues={{ email: '', Password: '' }}
      schema={schema}
    >
      <InputYup name="email" placeholder="Email Address"></InputYup>
      <InputYup name="Password" placeholder="Password"></InputYup>
      <SubmitButton>Sign Up</SubmitButton>
    </FormYup>
  );
}

export default SignUpYup;
