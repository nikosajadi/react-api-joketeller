import React, { useState, useEffect } from 'react';
import './App.css';
import CategoryList from './components/categoryList'; 




function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');  // State to store the fetched joke
  const [searchQuery, setSearchQuery] = useState(''); // Holds the user input for searching jokes.
  const [searchResults, setSearchResults] = useState([]);  // Stores the list of jokes from the search
  const [loading, setLoading] = useState(false);  // State to manage loading status
  const [error, setError] = useState('');  // State to store any error messages
 

// Define the duration for storing data in localStorage (2 hours in milliseconds)
  const STORAGE_DURATION = 2 * 60 * 60 * 1000; 

  useEffect(() => {
    // Function to fetch categories from API or retrieve from localStorage if still valid
    const fetchCategories = async () => {
      setLoading(true);
      const currentTime = new Date().getTime();

      // Retrieve stored categories and the timestamp from localStorage
      const storedData = localStorage.getItem('categories');
      const storedTime = localStorage.getItem('categories_time');

      // Check if data exists in localStorage and is within the valid storage duration
      if (storedData && storedTime) {
        const elapsedTime = currentTime - storedTime;
        if (elapsedTime < STORAGE_DURATION) {
          setCategories(JSON.parse(storedData));// Use stored categories if still valid
          setLoading(false);
          return;
        }
      }
       // If no valid data in localStorage, fetch categories from the API
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        
        // Store the fetched categories and timestamp in localStorage
        localStorage.setItem('categories', JSON.stringify(data));
        localStorage.setItem('categories_time', currentTime);

        setCategories(data); // Update the state with fetched categories
      } catch (error) {
        setError('Failed to load categories. Please try again.');
       // console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [STORAGE_DURATION]);

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

        {/* Display categories using CategoryList component */}
        <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />

        {/* Display the random joke */}
        {joke && (
          <div className="mt-8 p-4 bg-green-100 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Random Joke:</h2>
            <p className="text-lg">{joke}</p>
          </div>
        )}


        {/* Display loading state */}
        {loading && <p className="text-gray-500 text-center mb-4">Loading...</p>}

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
