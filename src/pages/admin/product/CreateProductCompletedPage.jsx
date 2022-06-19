import { useNavigate } from 'react-router-dom';
import CompletedAction from '../../../components/common/CompletedAction';

function CreateProductCompletedPage() {
  const navigate = useNavigate();
  return (
    <div className="content-default-width mx-auto">
      <CompletedAction
        displayText={'Create product completed'}
        buttonText={'Back to Home page'}
        buttonOnClick={() => navigate('/admin/order')}
      ></CompletedAction>
    </div>
  );
}

export default CreateProductCompletedPage;
