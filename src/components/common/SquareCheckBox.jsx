import { useState } from 'react';
import { CheckIcon } from '../icon/icon';
function SquareCheckBox({
  onClickWhenChecked,
  onClickWhenNotChecked,
  state,
  setState,
  className,
  style,
  isSelectAllInCartItems,
  isSelectAllButton,
}) {
  const [checked, setChecked] = useState(false);
  const borderColor = checked || state ? '' : '#7e7f83';
  const backgroundColor = checked || state ? '#0057e4' : '';

  return (
    <button
      onClick={() => {
        if (isSelectAllButton) {
          if (checked) {
            setChecked(false);
            onClickWhenChecked && onClickWhenChecked();
          } else {
            setChecked(true);
            onClickWhenNotChecked && onClickWhenNotChecked();
          }
        } else {
          if (checked) {
            setChecked(false);
            onClickWhenChecked && onClickWhenChecked();
          } else {
            setChecked(true);
            onClickWhenNotChecked && onClickWhenNotChecked();
          }
        }
      }}
      className={`${
        checked || state ? '' : 'border'
      } text-center align-items-center justify-content-center d-flex checkbox-bg-primary ${className}`}
      style={{
        width: '20px',
        height: '20px',
        borderColor,
        backgroundColor,
        ...style,
      }}
    >
      {checked || state ? (
        <CheckIcon className={'font-size-8 text-font1 m-auto '} />
      ) : (
        <div></div>
      )}
    </button>
  );
}

export default SquareCheckBox;
