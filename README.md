# Oneflow - Frontend Assignment

Create a web-application using React as presented below.

## General

You can use this boilerplate as the starting point of your project. All of your commits must be here, we want to see how you work.

**Register everything** including your tests/spikes, ideas if you had more time (explain how would you solve things), decisions you've made (and why) and the architecture you chose. 

- We want you to show us how you work; break down bigger problems and prioritize them.
- It's an option to not implement everything, mock anything if you think it's gonna save you time.
- We prefer if you show us something small that works and is well factored rather than something complete but "buggy".
- We prefer if you use open-source libraries and explain why you chose them.
- Add a `COMMENTS.md` to show us your thoughts and ideas.
- If you have any questions, please send us a message :)

## Assignment

![](https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png)

You should design and implement a minimalistic web-application that would let the user browse, search and navigate through [Chuck Norris jokes](https://api.chucknorris.io/) and that works within a standard modern web-browser.
We expect you to at least implement these three endpoints:

- https://api.chucknorris.io/jokes/categories
- https://api.chucknorris.io/jokes/random?category={category}
- https://api.chucknorris.io/jokes/search?query={query}

which would allow:

- listing all the categories.
- navigating into a category and showing a random joke in that category.
- searching through all the jokes using free text search.

## Requirements

- We want you to use React library.
- We want you to use Yarn for your dependenices.
- We expect you to use modern JavaScript features in your `.js` code.
- We prefer React functional components and hooks instead of class-based components but it is *not* a must.
- We expect to see described features and requirements work without any buggy behavior.
- We’ll evaluate bonus implementations and any other creative thing or feature you added.
- We expect to see a simple, clear implementation (code, architecture, documentation) which could be found in a real-world project.

## Bonus points

Focus on the basics and on solving the main problem, but you can also:

- Use any third-party library you want (with the exception of jQuery and jQuery-dependent stuff).
- Test everything that makes sense to be tested.
- Implement a caching mechanism.
- Spend some extra time on your design and style implementation.  

________________________
## Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so you don't need to worry about minor details. But still, you are free to `eject` from it and create your own setup, if you want.

### Available Scripts

In the project directory, you can run:

- `yarn start` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.
- `yarn test` launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- `yarn build` builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!
- `yarn eject` **Note: this is a one-way operation. Once you `eject`, you can’t go back!** If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own. You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
