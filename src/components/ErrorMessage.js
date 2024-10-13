// components/ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ error }) => {
  return (
    <>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
    </>
  );
};

export default ErrorMessage;
