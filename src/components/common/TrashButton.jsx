import { TrashIcon } from '../icon/icon';
function TrashButton({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-red-i">
      <TrashIcon className={'font-size-16'}></TrashIcon>
    </button>
  );
}

export default TrashButton;
