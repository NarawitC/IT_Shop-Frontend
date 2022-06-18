import { useNavigate } from 'react-router-dom';
import CompletedAction from '../../components/common/CompletedAction';

function SignUpCompletedPage() {
  const navigate = useNavigate();
  return (
    <div className="content-default-width mx-auto">
      <CompletedAction
        displayText={'Sign Up completed'}
        buttonText={'Back to Home page'}
        buttonOnClick={() => navigate('/')}
      ></CompletedAction>
    </div>
  );
}

export default SignUpCompletedPage;
