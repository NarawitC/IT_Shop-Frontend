import { useNavigate } from 'react-router-dom';
import CompletedAction from '../../../../components/common/CompletedAction';

function AdminConfirmedCompletedPage() {
  const navigate = useNavigate();
  return (
    <div className="content-default-width mx-auto">
      <CompletedAction
        displayText={'Confirm order completed'}
        buttonText={'Back to Home page'}
        buttonOnClick={() => navigate('/admin')}
      ></CompletedAction>
    </div>
  );
}

export default AdminConfirmedCompletedPage;
