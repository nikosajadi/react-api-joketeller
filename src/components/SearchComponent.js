// components/SearchComponent.js
import React, { useState } from 'react';

const SearchComponent = ({ onSearch, loading, error, searchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Search for Jokes</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter a search term"
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Display error messages */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Display loading state */}
      {loading && <p className="text-gray-500 text-center mt-4">Loading...</p>}

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Search Results:</h2>
          <ul className="list-disc list-inside">
            {searchResults.map((joke, index) => (
              <li key={index} className="text-lg mb-2">
                {joke.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
