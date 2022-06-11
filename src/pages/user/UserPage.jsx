import { useNavigate } from 'react-router-dom';

import { getUserInfo } from '../../api/user/user';
import LeftSection from '../../components/user/leftSection/LeftSection';
import RightSection from '../../components/user/rightSection/RightSection';
import { getAccessToken, removeToken } from '../../services/localStorage';
import { useAuthContext } from '../../contexts/AuthContext';

function UserPage() {
  return (
    <div className="container-fluid content-default-width d-flex justify-content-between gap-3">
      <LeftSection></LeftSection>
      <RightSection></RightSection>
    </div>
  );
}

export default UserPage;
