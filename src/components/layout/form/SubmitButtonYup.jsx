import React from 'react';

function SubmitButtonYup({ children, className }) {
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
}

export default SubmitButtonYup;
