import { useEffect } from 'react';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useUserContext } from '../../../contexts/UserContext';
import { UserIcon, LockIcon, LocationIcon, DollarIcon } from '../../icon/icon';
import MenuItem from './components/MenuItem';

function LeftSection() {
  const { page, setPage } = useUserContext();
  const {
    user: { firstName, lastName },
  } = useAuthContext();
  useEffect(() => {
    setPage('Profile');
  }, []);

  return (
    <div className="col-2 bg-light1 px-2 py-3 d-flex flex-column gap-3 h-25">
      <div className="ms-3 font-size-24 font-weight-500">
        {firstName + ' ' + lastName}
      </div>
      <div className="hr-gray"></div>
      <div className="d-flex flex-column gap-2 ms-2">
        <MenuItem menuName={'Profile'} thisPage={'Profile'}>
          <UserIcon className={'font-size-12'}></UserIcon>
        </MenuItem>
        <MenuItem menuName={'Password'} thisPage={'Password'}>
          <LockIcon className={'font-size-12'}></LockIcon>
        </MenuItem>
        <MenuItem menuName={'Address'} thisPage={'Address'}>
          <LocationIcon className={'font-size-12'}></LocationIcon>
        </MenuItem>
        <MenuItem menuName={'My purchase'} thisPage={'My purchase'}>
          <DollarIcon className={'font-size-12'}></DollarIcon>
        </MenuItem>
      </div>
    </div>
  );
}

export default LeftSection;
