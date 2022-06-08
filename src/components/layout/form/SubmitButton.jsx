import React from 'react';

function SubmitButton({ children, className }) {
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
}

export default SubmitButton;
