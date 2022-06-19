import CompletedAction from '../../components/common/CompletedAction';
import { useNavigate } from 'react-router-dom';
function OrderCompletedPage() {
  const navigate = useNavigate();
  return (
    <div className="content-default-width mx-auto">
      <CompletedAction
        displayText={'Your payment is completed'}
        buttonText={'Back to Home page'}
        buttonOnClick={() => navigate('/product')}
      ></CompletedAction>
    </div>
  );
}

export default OrderCompletedPage;
