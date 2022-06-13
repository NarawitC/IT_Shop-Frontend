import { BahtIcon } from '../icon/icon';
function DigitWithBahtIcon({ digit, className }) {
  return (
    <div className="d-flex gap-1 justify-content-center">
      <BahtIcon className={`m-auto ${className}`}></BahtIcon>
      <div className={`${className}`}>{digit.toLocaleString('en-US')}</div>
    </div>
  );
}

export default DigitWithBahtIcon;
