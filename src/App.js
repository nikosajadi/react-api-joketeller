import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');  // State to store the fetched joke
  const [searchQuery, setSearchQuery] = useState(''); //searchQuery: Holds the user input for searching jokes.
  const [searchResults, setSearchResults] = useState([]);  //searchResults: Stores the list of jokes 

  // Fetch the categories from the API when the component mounts
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  // Function to fetch a random joke from a clicked category
  const handleCategoryClick = (category) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error('Error fetching joke:', error));
  };

  // Function to search jokes based on a query
  const handleSearch = () => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.result))
      .catch((error) => console.error('Error fetching search results:', error));
  };

  return (
    <div className="App">
      <h1>Chuck Norris Joke Categories</h1>
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
