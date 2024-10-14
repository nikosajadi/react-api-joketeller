
// JUST FPT TET COMMPONENTS
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
  



import React from 'react';
import { render, screen, fireEv, waitFor, act } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  // Mock localStorage
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => store[key] = value.toString(),
      removeItem: (key) => delete store[key],
      clear: () => store = {},
    };
  })();

  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
});

afterEach(() => {
  localStorage.clear(); // Clear localStorage between tests
  jest.clearAllMocks(); // Clear mocks between tests
});

describe('App component tests with localStorage', () => {
  
  it('fetches and displays categories successfully, and stores them in localStorage', async () => {
    const mockCategories = ['animal', 'career'];

    // Mock fetch for API call
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockCategories),
    });

    // Render component
    await act(async () => {
      render(<App />);
    });

    // Wait for data to be fetched and categories to be displayed
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(screen.getByText('animal')).toBeInTheDocument();
      expect(screen.getByText('career')).toBeInTheDocument();
    });

    // Check if data is stored in localStorage
    expect(localStorage.getItem('categories')).toEqual(JSON.stringify(mockCategories));
  });

  it('loads categories from localStorage if data is still valid', async () => {
    const mockCategories = ['animal', 'career'];

    // Simulate stored data in localStorage before test starts
    localStorage.setItem('categories', JSON.stringify(mockCategories));
    localStorage.setItem('categories_time', new Date().getTime().toString()); // Current time

    // Render component
    await act(async () => {
      render(<App />);
    });

    // Ensure fetch is not called because data is loaded from localStorage
    expect(fetch).not.toHaveBeenCalled();

    // Wait for categories loaded from localStorage to be displayed
    await waitFor(() => {
      expect(screen.getByText('animal')).toBeInTheDocument();
      expect(screen.getByText('career')).toBeInTheDocument();
    });
  });

  it('fetches new categories if localStorage data is expired', async () => {
    const mockCategories = ['animal', 'career'];

    // Simulate expired data in localStorage
    localStorage.setItem('categories', JSON.stringify(mockCategories));
    const expiredTime = new Date().getTime() - 3 * 60 * 60 * 1000; // Three hours ago
    localStorage.setItem('categories_time', expiredTime.toString());

    // Mock fetch for API call
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockCategories),
    });

    // Render component
    await act(async () => {
      render(<App />);
    });

    // Wait for data to be fetched and API to be called because localStorage data is expired
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(screen.getByText('animal')).toBeInTheDocument();
      expect(screen.getByText('career')).toBeInTheDocument();
    });
  });

  // Uncomment this test if you want to test the error case
  // it('shows error when fetching categories fails', async () => {
  //   // Mock fetch to simulate API failure
  //   global.fetch = jest.fn().mockRejectedValueOnce(new Error('API fetch failed'));
  
  //   await act(async () => {
  //     render(<App />);
  //   });
  
  //   // Use getAllByText to check if only one error message is displayed
  //   await waitFor(() => {
  //     const errorMessages = screen.getAllByText('Failed to load categories. Please try again.');
  //     expect(errorMessages).toHaveLength(1); // Expect only one error message
  //   });
  // });


});