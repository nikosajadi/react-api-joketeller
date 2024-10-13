import React, { useState, useEffect } from 'react';
import './App.css';
import CategoryList from './components/categoryList'; // Component for categories
import SearchComponent from './components/SearchComponent'; // Component for search
import JokeDisplay from './components/JokeDisplay'; // Component for displaying jokes
import ErrorMessage from './components/ErrorMessage'; // Component for displaying errors
import LoadingSpinner from './components/LoadingSpinner'; // Component for loading spinner

function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const STORAGE_DURATION = 2 * 60 * 60 * 1000;

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const currentTime = new Date().getTime();

      const storedData = localStorage.getItem('categories');
      const storedTime = localStorage.getItem('categories_time');

      if (storedData && storedTime) {
        const elapsedTime = currentTime - storedTime;
        if (elapsedTime < STORAGE_DURATION) {
          setCategories(JSON.parse(storedData));
          setLoading(false);
          return;
        }
      }

      try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        localStorage.setItem('categories', JSON.stringify(data));
        localStorage.setItem('categories_time', currentTime);

        setCategories(data);
      } catch (error) {
        setError('Failed to load categories. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [STORAGE_DURATION]);

  const handleCategoryClick = async (category) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      const data = await response.json();
      setJoke(data.value);
      setError('');
    } catch (err) {
      setError('Error fetching joke: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchQuery) => {
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
        setError('');
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

        {/* Display errors */}
        <ErrorMessage error={error} />

        {/* Display categories */}
        <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />

        {/* Display joke */}
        {joke && <JokeDisplay joke={joke} />}

        {/* Display loading state */}
        {loading && <LoadingSpinner />}

        {/* Search component */}
        <SearchComponent
          onSearch={handleSearch}
          loading={loading}
          error={error}
          searchResults={searchResults}
        />
      </div>
    </div>
  );
}

export default App;
