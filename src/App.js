import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');  // State to store the fetched joke
  const [searchQuery, setSearchQuery] = useState(''); //searchQuery: Holds the user input for searching jokes.
  const [searchResults, setSearchResults] = useState([]);  //searchResults: Stores the list of jokes 
  const [error, setError] = useState(''); // State to store any error messages

  // Fetch the categories from the API when the component mounts
    useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
        setError(''); // Clear any previous errors
      } catch (err) {
        setError('Error fetching categories: ' + err.message);
      }
    };

    fetchCategories();
  }, []);


  // Function to fetch a random joke from a clicked category
  const handleCategoryClick = async (category) => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      const data = await response.json();
      setJoke(data.value);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Error fetching joke: ' + err.message);
    }
  };

 // Function to search jokes based on a query
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      setSearchResults(data.result);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Error fetching search results: ' + err.message);
    }
  };

  return (
    <div className="App">
      <h1>Chuck Norris Joke Categories</h1>
      {/* Display error messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

         {/* Display categories */}
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>

      {/* Display the random joke */}
      {joke && (
        <div>
          <h2>Random Joke:</h2>
          <p>{joke}</p>
        </div>
      )}

      {/* Search Input */}
      <div>
        <h2>Search for Jokes</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter a search term"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((joke, index) => (
              <li key={index}>{joke.value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
