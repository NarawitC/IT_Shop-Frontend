import { EyeIcon } from '../icon/icon';
function EyeButton({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-green-i">
      <EyeIcon className={'font-size-12'}></EyeIcon>
    </button>
  );
}

export default EyeButton;
