import CompletedAction from '../../components/common/CompletedAction';
import { useNavigate } from 'react-router-dom';
function UserInfoUpdatedPage() {
  const navigate = useNavigate();
  return (
    <div className="content-default-width mx-auto">
      <CompletedAction
        displayText={'Your information is updated'}
        buttonText={'Back to Home page'}
        buttonOnClick={() => navigate('/')}
      ></CompletedAction>
    </div>
  );
}

export default UserInfoUpdatedPage;
