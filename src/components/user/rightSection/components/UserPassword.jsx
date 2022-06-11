import Header from '../../../layout/form/Header';
import InputYup from '../../../layout/form/InputYup';
import SubmitButtonYup from '../../../layout/form/SubmitButtonYup';

function UserPassword() {
  return (
    <Header text={'Password'}>
      <InputYup
        name="password"
        text={'New password'}
        placeholder="New password"
        autoComplete="false"
        type="password"
      ></InputYup>
      <InputYup
        name="confirmPassword"
        text={'Confirm password'}
        placeholder="Confirm password"
        autoComplete="false"
        type="password"
      ></InputYup>
      <SubmitButtonYup className={'btn btn-success'}>Submit</SubmitButtonYup>
    </Header>
  );
}

export default UserPassword;
