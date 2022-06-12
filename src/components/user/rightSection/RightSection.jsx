import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import FormYup from '../../layout/form/FormYup';
import UserProfile from './components/UserProfile';
import UserPassword from './components/UserPassword';
import UserAddress from './components/UserAddress';
import UserMyPurchase from './components/UserMyPurchase';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useErrorContext } from '../../../contexts/ErrorContext';
import { useUserContext } from '../../../contexts/UserContext';
function RightSection() {
  const { page, updateInfo } = useUserContext();
  const navigate = useNavigate();
  const { setError } = useErrorContext();
  const { signUp, user } = useAuthContext();

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    addressDescription,
  } = user;

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
    password: yup.string().nullable(),
    confirmPassword: yup.string().nullable(),
    address: yup.string().trim().nullable(),
    addressDescription: yup.string().trim().nullable(),
  });

  const handleEditSubmit = async (data, reset) => {
    try {
      console.log('first');
      await updateInfo(data);
      navigate('/');
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="col-9 ">
      {page === 'Profile' || page === 'Password' || page === 'Address' ? (
        <FormYup
          onSubmit={handleEditSubmit}
          defaultValues={{
            firstName,
            lastName,
            phoneNumber,
            email,
            password: '',
            confirmPassword: '',
            address,
            addressDescription: addressDescription ? addressDescription : '',
          }}
          schema={schema}
        >
          {page === 'Profile' && <UserProfile />}
          {page === 'Password' && <UserPassword />}
          {page === 'Address' && <UserAddress />}
        </FormYup>
      ) : null}
      {page === 'My purchase' && <UserMyPurchase />}
    </div>
  );
}

export default RightSection;
