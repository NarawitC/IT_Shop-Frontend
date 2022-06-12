import { BahtIcon } from '../icon/icon';
function DigitWithBahtIcon({ digit }) {
  return (
    <div className="d-flex gap-1 justify-content-center">
      <BahtIcon className={'mt-1'}></BahtIcon>
      <div>{digit.toLocaleString('en-US')}</div>
    </div>
  );
}

export default DigitWithBahtIcon;
