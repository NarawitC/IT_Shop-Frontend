import { useState } from 'react';
import Header from '../../../layout/form/Header';
import InputYup from '../../../layout/form/InputYup';
import SubmitButtonYup from '../../../layout/form/SubmitButtonYup';
import Button from '../../../button/Button';

function UserProfile() {
  const [edited, setEdited] = useState(false);
  const handleEditButtonClick = (e) => {
    e.preventDefault();
    if (edited) {
      setEdited(false);
    } else {
      setEdited(true);
    }
  };

  return (
    <Header text={'Profile'}>
      <InputYup
        disabled={!edited}
        name="firstName"
        text={'First name'}
        placeholder="First name"
      ></InputYup>
      <InputYup
        disabled={!edited}
        name="lastName"
        text={'Last name'}
        placeholder="Last name"
      ></InputYup>
      <InputYup
        disabled={!edited}
        name="phoneNumber"
        text={'Phone number'}
        placeholder="Phone number"
      ></InputYup>
      <InputYup
        disabled={!edited}
        name="email"
        text={'Email address'}
        placeholder="Email Address"
      ></InputYup>
      <Button className={'btn btn-primary'} onClick={handleEditButtonClick}>
        Edit
      </Button>
      <SubmitButtonYup className={'btn btn-success'}>Submit</SubmitButtonYup>
    </Header>
  );
}

export default UserProfile;
