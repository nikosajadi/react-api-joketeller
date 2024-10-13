import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock the fetch function globally for all tests
beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.resetAllMocks();
  global.fetch.mockClear();
});

// Basic test to ensure the App renders without crashing
it('renders without crashing', () => {
  render(<App />);
});

// Test to check if categories are fetched and rendered correctly
it('fetches and displays categories', async () => {
  // Mock the API response for categories
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ['animal', 'career', 'celebrity'],
  });

  await act(async () => {
    render(<App />);

    // Ensure the loading text is displayed while fetching
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // Wait for categories to load and check if they are rendered correctly
    await waitFor(() => {
      expect(screen.getByText('animal')).toBeInTheDocument();
      expect(screen.getByText('career')).toBeInTheDocument();
      expect(screen.getByText('celebrity')).toBeInTheDocument();
    });
  });
});

// Test for fetching and displaying a random joke
it('fetches and displays a random joke when category is clicked', async () => {
  // Mock the API response for categories and a random joke
  global.fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ['animal', 'career', 'celebrity'],
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ value: 'Chuck Norris joke' }),
    });

  await act(async () => {
    render(<App />);

    // Wait for categories to load
    await waitFor(() => screen.getByText('animal'));

    // Simulate a click on the 'animal' category
    fireEvent.click(screen.getByText('animal'));

    // Wait for the joke to be displayed
    await waitFor(() => {
      expect(screen.getByText('Chuck Norris joke')).toBeInTheDocument();
    });
  });
});

// Test for searching jokes
it('fetches and displays search results based on user input', async () => {
  // Mock the API response for search
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ result: [{ value: 'Funny Chuck Norris joke' }] }),
  });

  await act(async () => {
    render(<App />);

    // Simulate user input for searching a joke
    fireEvent.change(screen.getByPlaceholderText(/Enter a search term/i), {
      target: { value: 'funny' },
    });

    // Simulate clicking the search button
    fireEvent.click(screen.getByRole('button', { name: /Search/i }));

    // Wait for search results to be displayed
    await waitFor(() => {
      expect(screen.getByText('Funny Chuck Norris joke')).toBeInTheDocument();
    });
  });
});
