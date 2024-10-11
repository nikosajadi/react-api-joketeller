 # Oneflow - Frontend Assignment# 
 # Tools and Libraries Used
  In this file, I will detail the steps and decisions I made throughout the implementation of the task.
Steps Taken:

**1**-Added the necessary files and configuration: I created a file named `COMMENTS.md` to document the steps and decisions during the task implementation. and First, I installed the core React library using the Yarn package manager.

**2**-Installed the core React libraries: I used Yarn as my package manager to install the necessary React libraries.

**Fetch API vs. Axios:**
**3**I decided to use the Fetch API for fetching data from the API endpoint rather than other methods such as XMLHttpRequest or Axios. My reasoning is as follows:

I have experience using Axios in different projects, and I recognize that it is a highly professional and feature-rich library. However, for this particular project and after conducting some research (for instance, [on this website](https://builtin.com/software-engineering-perspectives/react-api)), 
* I believe that using the Fetch API is more appropriate.

- Fetch API provides a simple and modern way to make API requests, which aligns well with the minimal requirements of this project.
Axios offers additional features, but considering the scope of this project, it seemed unnecessary to add another library when Fetch API is sufficient.
XMLHttpRequest is an older method, and Fetch API offers better functionality for modern JavaScript applications.
In my opinion, the Fetch API is a more suitable choice for this project, allowing for clean and efficient API requests while keeping the codebase lightweight.

**I Chose React Hooks and useEffect for API Management**
**4** used React hooks, especially useEffect, for API calls because of its simplicity in handling side effects. useEffect triggers data fetching when the component renders and automatically re-runs when dependencies change, making the code cleaner and easier to maintain. Combined with useState, it provides efficient state management, ensuring the component responds smoothly to data changes
* you can see the result of this step in this image:
![image step 1](/public/steps/1.png)


**5**After fetching the categories and displaying them as a list on the page, I proceeded to implement the click functionality for the categories. I wrote a function `handleCategoryClick` that gets triggered when a category is clicked, passing the selected category value to the function. Then, the relevant API is called, and the result is stored in a separate variable. Finally, once the joke is retrieved, it is displayed on the screen.
* you can see the result of this step in this image:
![image step 1](/public/steps/2.png)

**6**  





# Tools and Libraries Used:
 * Tailwind CSS: Used for styling and creating a visually appealing design.