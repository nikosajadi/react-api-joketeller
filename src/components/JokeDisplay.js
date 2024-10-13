// components/JokeDisplay.js
import React from 'react';

const JokeDisplay = ({ joke }) => {
  return (
    <div className="mt-8 p-4 bg-green-100 rounded-lg text-center">
    <h2 className="text-2xl font-semibold mb-2">Random Joke:</h2>
    <p className="text-lg">{joke}</p>
  </div>
  );
};

export default JokeDisplay;
