import { ActionCheckIcon } from '../icon/icon';
import Button from '../button/Button';
function CompletedAction({ displayText, buttonText, buttonOnClick }) {
  return (
    <div className="align-items-center d-flex flex-column bg-light1 p-5 gap-3">
      <div>
        <ActionCheckIcon
          className={'btn-green-i font-size-96'}
        ></ActionCheckIcon>
      </div>
      <div className="font-size-24">{displayText}</div>
      <div className="w-25">
        <Button className={'my-btn-primary'} onClick={buttonOnClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default CompletedAction;
