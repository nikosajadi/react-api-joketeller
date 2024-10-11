import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');  // State to store the fetched joke
  const [searchQuery, setSearchQuery] = useState(''); // Holds the user input for searching jokes.
  const [searchResults, setSearchResults] = useState([]);  // Stores the list of jokes from the search
  const [loading, setLoading] = useState(false);  // State to manage loading status
  const [error, setError] = useState('');  // State to store any error messages

  // Fetch the categories from the API when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
        setError(''); // Clear any previous errors
      } catch (err) {
        setError('Error fetching categories: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Function to fetch a random joke from a clicked category
  const handleCategoryClick = async (category) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      const data = await response.json();
      setJoke(data.value);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Error fetching joke: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to search jokes based on a query
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a search term');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      if (data.result.length === 0) {
        setError('No results found for the search term.');
        setSearchResults([]);
      } else {
        setSearchResults(data.result);
        setError(''); // Clear any previous errors
      }
    } catch (err) {
      setError('Error fetching search results: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Chuck Norris Joke Categories
        </h1>

        {/* Display error messages */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Display loading state */}
        {loading && <p className="text-gray-500 text-center mb-4">Loading...</p>}

        {/* Display categories */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="cursor-pointer bg-white shadow-md rounded-lg p-4 text-center hover:bg-blue-100"
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Display the random joke */}
        {joke && (
          <div className="mt-8 p-4 bg-green-100 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Random Joke:</h2>
            <p className="text-lg">{joke}</p>
          </div>
        )}

        {/* Search Input */}
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
        </div>

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
    </div>
  );
}

export default App;
