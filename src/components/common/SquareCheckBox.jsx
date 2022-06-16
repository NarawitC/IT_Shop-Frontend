import { useState } from 'react';
import { CheckIcon } from '../icon/icon';
function SquareCheckBox({
  onClickWhenChecked,
  onClickWhenNotChecked,
  className,
  style,
}) {
  const [checked, setChecked] = useState(false);
  const borderColor = checked ? '' : '#7e7f83';
  const backgroundColor = checked ? '#0057e4' : '';

  return (
    <button
      onClick={() => {
        if (checked) {
          onClickWhenChecked();
          setChecked(false);
        } else {
          onClickWhenNotChecked();
          setChecked(true);
        }
      }}
      className={`${
        checked ? '' : 'border'
      } text-center align-items-center justify-content-center d-flex checkbox-bg-primary ${className}`}
      style={{
        width: '20px',
        height: '20px',
        borderColor,
        backgroundColor,
        ...style,
      }}
    >
      {checked ? (
        <CheckIcon className={'font-size-8 text-font1 m-auto '} />
      ) : (
        <div></div>
      )}
    </button>
  );
}

export default SquareCheckBox;
