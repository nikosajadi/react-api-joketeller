import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState(''); // State to store the fetched joke

  // Fetch the categories from the API when the component mounts
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  // Function to fetch a random joke from the clicked category
  const handleCategoryClick = (category) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error('Error fetching joke:', error));
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

      {/* Display the joke if available */}
      {joke && (
        <div>
          <h2>Random Joke:</h2>
          <p>{joke}</p>
        </div>
      )}
    </div>
  );
}

export default App;