import { useNavigate } from 'react-router-dom';
import CompletedAction from '../../../components/common/CompletedAction';

function UpdateProductCompletedPage() {
  const navigate = useNavigate();
  return (
    <div className="content-default-width mx-auto">
      <CompletedAction
        displayText={'Update product completed'}
        buttonText={'Back to Home page'}
        buttonOnClick={() => navigate('/admin')}
      ></CompletedAction>
    </div>
  );
}

export default UpdateProductCompletedPage;
