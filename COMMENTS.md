This project is a React-based application that fetches jokes from APIs, allows users to search through the results, and offers a streamlined user experience with caching, loading indicators, and error handling.

# Table of Contents
Overview
Steps Taken
Tools and Libraries Used
Installation
Usage
Testing
# Overview
This application enables users to search for jokes using an input field and displays results from multiple APIs. Various enhancements, such as loading indicators, error messages, and caching with localStorage, have been implemented to improve the user experience.

# Steps Taken
- Step 2: Package Manager (Yarn)
Used Yarn to install core React libraries for managing packages efficiently.

- Step 3: API Choice (Fetch API)
Opted to use the Fetch API instead of Axios due to its simplicity and alignment with project requirements.

- Step 6: Search Input
Added an input field with search functionality, allowing users to search for jokes. State management with useState is used for storing user input and displaying search results.

- Step 7: Error Handling
Implemented error handling for each API call and added error messages to enhance user feedback.

- Step 8: Loading Indicator and UX Enhancements
Added a loading spinner for API calls and implemented checks for empty input. The input field clears after each search for better UX.

- Step 9: Tailwind CSS Installation
Installed Tailwind CSS for styling and configured it using Yarn for flexibility and ease of use.

- Step 10: UI Design
Enhanced the user interface design using Tailwind CSS for a cleaner, responsive look.

- Step 11: LocalStorage Caching
Implemented caching for category data in localStorage to minimize redundant API calls and improve page load time.

- Step 12: Component-Based Structure
Refactored the code by creating smaller components: CategoryList, SearchComponent, JokeDisplay, ErrorMessage, and LoadingSpinner to simplify and organize the code.

- Step 13: Testing
Developed a test plan with Jest, focusing on testing core functionalities of components and the App component.

# Tools and Libraries Used
Yarn: For managing dependencies.
Fetch API: Chosen for making API requests.
React Hooks (useState, useEffect): Utilized for managing state and API calls.
Tailwind CSS: Applied for styling and enhancing the UI design.
LocalStorage: Used for caching API data.
Testing Libraries:
@testing-library/react
@testing-library/dom
@testing-library/jest-dom
Jest: For writing and running tests.
