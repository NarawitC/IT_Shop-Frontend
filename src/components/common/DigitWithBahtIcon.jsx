import { BahtIcon } from '../icon/icon';
function DigitWithBahtIcon({ digit, className }) {
  return (
    <div className="d-flex justify-content-center ">
      <BahtIcon className={`my-auto me-1 ${className}`}></BahtIcon>
      <div className={`${className} my-auto`}>
        {digit.toLocaleString('en-US')}
      </div>
    </div>
  );
}

export default DigitWithBahtIcon;
