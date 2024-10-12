 # Oneflow - Frontend Assignment# 
 # Tools and Libraries Used
  In this file, I will detail the steps and decisions I made throughout the implementation of the task.
Steps Taken:

**Step 1**
Added the necessary files and configuration: I created a file named `COMMENTS.md` to document the steps and decisions during the task implementation. and First, I installed the core React library using the Yarn package manager.

**Step 2**
## package manager Yarn:
Installed the core React libraries: I used Yarn as my package manager to install the necessary React libraries.


**Step 3**
## Fetch API vs. Axios:
I decided to use the Fetch API for fetching data from the API endpoint rather than other methods such as XMLHttpRequest or Axios. My reasoning is as follows:

I have experience using Axios in different projects, and I recognize that it is a highly professional and feature-rich library. However, for this particular project and after conducting some research (for instance, [on this website](https://builtin.com/software-engineering-perspectives/react-api)), 
* I believe that using the Fetch API is more appropriate because:
- Fetch API provides a simple and modern way to make API requests, which aligns well with the minimal requirements of this project.
Axios offers additional features, but considering the scope of this project, it seemed unnecessary to add another library when Fetch API is sufficient.
XMLHttpRequest is an older method, and Fetch API offers better functionality for modern JavaScript applications.
In my opinion, the Fetch API is a more suitable choice for this project, allowing for clean and efficient API requests while keeping the codebase lightweight.


**Step 4**
## Chose React Hooks and useEffect for API Management :
`const [categories, setCategories] = useState([]);`
- used React hooks, especially useEffect in component mounts, for API calls because of its simplicity in handling side effects. useEffect triggers data fetching when the component renders and automatically re-runs when dependencies change, making the code cleaner and easier to maintain. Combined with useState, it provides efficient state management, ensuring the component responds smoothly to data changes
* you can see the result of this step in this image:
![image step 4](/public/steps/1.png)


**Step 5** 
After fetching the categories and displaying them as a list on the page, I proceeded to implement the click functionality for the categories. I wrote a function `handleCategoryClick` that gets triggered when a category is clicked, passing the selected category value to the function. Then, the relevant API is called, and the result is stored in a separate variable. Finally, once the joke is retrieved, it is displayed on the screen.
using usestate:
  `const [joke, setJoke] = useState('');`
* you can find the result of this step in this image:
    ![image step 5](/public/steps/2.png)


**Step 6**  
After completing the previous steps, I implemented an input field for searching jokes. I added both an input field and a button to the page. Then, I wrote a function that calls the relevant API `handleSearch` , passing the search query as input. The API response is stored in a variable, and this value is displayed on the page. Additionally, I added a variable to store the text entered in the input field.  

  `const [searchQuery, setSearchQuery] = useState(''); //searchQuery: Holds the user input for searching jokes.`
  `const [searchResults, setSearchResults] = useState([]);//searchResults: Stores the list of jokes `
* you can find the result of this step in this image:
  ![image step 6](/public/steps/3.png)



**Step 7** 
## Error Handling:  
I revisited the APIs and focused on handling potential errors. To do this, I added a variable to store any error messages. For each of the three API calls, if an error occurred, the error message was stored in this variable with an appropriat message and displayed on the page.
**Async/Await vs.promise-based** 
At this point, I preferred to use the `Async/Await` method instead of the traditional promise-based approach. The reason for this choice is that Async/Await simplifies the structure of the code and makes it more readable. Additionally, with Async/Await, API requests wait for the data to be fetched before continuing, which improves code clarity and avoids the long chains of `.then()` methods typical of promise-based syntax.

* you can find the result of this step in this image:
  ![image step 7](/public/steps/4.png)

  `const [error, setError] = useState(''); // State to store any error messages`
        {/* Display error messages */}
     ` {error && <p style={{ color: 'red' }}>{error}</p>}`



**Step 8**  
## Addressing Common Issues and Adding Loading Feedback for Better UX:
After conducting manual tests, I noticed a few issues that needed to be addressed. For example, if the user clicks the search button without entering any text, it could cause problems. To improve the user experience, I decided to add a few features: First, displaying a loading indicator while the APIs are being called, and second, handling the error when no text is entered for the search. Additionally, I implemented a way to manage the case where no category is found for the jokes.
  ` const [loading, setLoading] = useState(false);  // State to manage loading status`  
* you can find the result of this step in this image:
 ![image step 8](/public/steps/5.png)
![image step 8](/public/steps/6.png)


**Step 9**  
## Install Tailwind CSS:
At this stage, I am using Tailwind CSS for styling because it allows me to quickly apply styles directly in the HTML and provides great flexibility to customize the design without the need to write custom CSS, among other benefits.
  - Setting Up Tailwind CSS with Yarn:
   `yarn add -D tailwindcss postcss autoprefixer ` 
   -Then, generate the Tailwind configuration:
     `npx tailwindcss init -p`

   - In the tailwind.config.js:
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
- src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

**Step 10**
## Enhancing the UI Design:
* you can find the result of this step in this image:
 ![image step 10](/public/steps/7.png)
 
**Step 11**
## Implement a caching mechanism with LocalStorage Caching:
To improve page load time and avoid repeated API calls for data that is unlikely to change frequently, I implemented localStorage caching. The category data, which typically remains constant, is stored for a specific duration (set to 2 hours in this case). When the method for fetching categories is called, it first checks localStorage. If the data exists and has not expired (i.e., it was stored less than 2 hours ago), the cached data is retrieved. If neither of these conditions is met, the API is called, and the returned data is displayed on the page and stored in localStorage for 2 hours. To track the expiration time, an additional field is used in localStorage.
* you can find the result of this step in this image:
 ![image step 11](/public/steps/8.png)


**Step 12**
## Organizing the Project by Separating the Categories Component
  To write cleaner code and reduce complexity, I created a separate component for the categories. I separated the UI for displaying the categories from the main page and placed it in a different file. 
  While I could have moved the code for fetching the categories to this new component as well, I decided to keep it in the main page. This was because the categories might need to be accessed again on the main page in the future. Therefore, only the UI was moved, and the logic for fetching the categories remains in the main page.

I believe that in larger projects, it's essential to break down the code into more components. For example, even a button can be a separate component to keep the codebase modular and easier to maintain but here it is unnecessary.








# Tools and Libraries Used:
 * Tailwind CSS: Used for styling and creating a visually appealing design.
