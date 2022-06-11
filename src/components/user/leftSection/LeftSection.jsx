import { useAuthContext } from '../../../contexts/AuthContext';
import { useUserContext } from '../../../contexts/UserContext';

import { UserIcon, LockIcon, LocationIcon, DollarIcon } from '../../icon/icon';
import MenuItem from './components/MenuItem';
function LeftSection() {
  const { page, setPage } = useUserContext();

  const {
    user: { firstName, lastName },
  } = useAuthContext();
  return (
    <div className="col-3 bg-light1 px-2 py-3 d-flex flex-column gap-3">
      <div className="ms-3">{firstName + ' ' + lastName}</div>
      <div className="hr-gray"></div>
      <div className="d-flex flex-column gap-2 ms-2">
        <MenuItem menuName={'Profile'} thisPage={'1'}>
          <UserIcon className={'font-size-12'}></UserIcon>
        </MenuItem>
        <MenuItem menuName={'Password'} thisPage={'2'}>
          <LockIcon className={'font-size-12'}></LockIcon>
        </MenuItem>
        <MenuItem menuName={'Address'} thisPage={'3'}>
          <LocationIcon className={'font-size-12'}></LocationIcon>
        </MenuItem>
        <MenuItem menuName={'My purchase'} thisPage={'4'}>
          <DollarIcon className={'font-size-12'}></DollarIcon>
        </MenuItem>
      </div>
    </div>
  );
}

export default LeftSection;
