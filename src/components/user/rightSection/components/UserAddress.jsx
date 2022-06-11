import { useState } from 'react';

import Header from '../../../layout/form/Header';
import InputYup from '../../../layout/form/InputYup';
import TextAreaYup from '../../../layout/form/TextAreaYup';
import SubmitButtonYup from '../../../layout/form/SubmitButtonYup';
import Button from '../../../button/Button';

function UserAddress() {
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
    <Header text={'Address'}>
      <InputYup
        disabled={!edited}
        name="address"
        text={'Address'}
        placeholder="Address"
      ></InputYup>
      <TextAreaYup
        disabled={!edited}
        name="addressDescription"
        text={'Address description'}
        placeholder="Address description"
      ></TextAreaYup>
      <Button className={'btn btn-primary'} onClick={handleEditButtonClick}>
        Edit
      </Button>
      <SubmitButtonYup className={'btn btn-success'}>Submit</SubmitButtonYup>
    </Header>
  );
}

export default UserAddress;
