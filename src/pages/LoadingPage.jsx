import React from 'react';
import ReactLoading from 'react-loading';

function LoadingPage() {
  return (
    <div className="w-100 bg-dark2 d-flex flex-column justify-content-center align-items-center">
      <ReactLoading
        type={'bars'}
        color={'#ff6130'}
        height={'25%'}
        width={'25%'}
      />
      <div className="font-text-secondary font-size-48">... LOADING</div>
    </div>
  );
}

export default LoadingPage;
