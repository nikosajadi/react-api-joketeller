import React from 'react';

const ErrorMessage = ({ error }) => {
  if (!error) return null; // Don't display anything if there's no error

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6">
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline ml-2">{error}</span>
    </div>
  );
};

export default ErrorMessage;
