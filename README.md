# React Testing

1. Test Component Rendering
2. Test Events - Fire Events & User Events
3. Test API - Async Loading
4. Test Page Component - Wrapper

**Recommended Read:**
https://www.robinwieruch.de/react-testing-library/

Documentation:
https://testing-library.com/docs/react-testing-library/intro/
https://jestjs.io/docs/getting-started

---

**Types of Queries** (search variants)

- Single Elements
- `getBy…` _//Element or Error_
- `queryBy…` _//Element or null_
- `findBy…` _//Promise or Promise_
- Multiple Elements
- `getAllBy…` _//Element[] or Error_
- `queryAllBy…` _//Element[] or []_
- `findAllBy…` _//Promise<Element[]> or Promise<rejection>_

Detailed: https://testing-library.com/docs/queries/about

Search Types (result)

- Role `<div role='dialog'>...</div>`
- LabelText `<label for=“element” />`
- PlaceholderText `<input placeholder=“username” />`
- Text `<a href='/about'>About</a>`
- DisplayValue `<input value=”display value” />`
- AltText `<img alt=“movie poster” />`
- Title `<span title='Delete' /> or <title />`
- TestId `<input data-testid='username-input' />`

**Expect**

- `toBeTruthy()`
- `toBe(value)`
- `toBeInTheDocument()`
- `not.toBeInTheDocument()`
- `toHaveLength(value)`

Detailed: https://jestjs.io/docs/expect

**User Event** (interact with element)

- Click
  `userEvent.click(element);`
- Type
  `userEvent.type(element, text);`

Detailed:
https://testing-library.com/docs/ecosystem-user-event/#api
https://testing-library.com/docs/user-event/intro

**Fire Event** (interact with element)

- Click
  `fireEvent.click(event);`

Detailed: https://testing-library.com/docs/dom-testing-library/api-events/#fireevent

**Async Method**

- // the element isn't available yet, so wait for it:
  `await screen.getByTestId("headline");`
- // we want to wait until an assertion passes
  `await waitFor(() => expect(getByTestId("headline")).toBeTruthy());`

**Cheatsheet**

- https://github.com/testing-library/react-testing-library/raw/main/other/cheat-sheet.pdf

---

**Common Doubts:**

- What is the difference between 'it' and 'test' in Jest?
  https://stackoverflow.com/questions/45778192/what-is-the-difference-between-it-and-test-in-jest

- What's the Difference Between findBy*, getBy* and queryBy\*?
  https://www.designcise.com/web/tutorial/whats-the-difference-between-findby-getby-and-queryby-in-react-testing-library

- Testing async stuff,
  https://dev.to/lennythedev/testing-async-stuff-in-react-components-with-jest-and-react-testing-library-mag

---

---

---

**Common Errors:**

- https://davidwcai.medium.com/react-testing-library-and-the-not-wrapped-in-act-errors-491a5629193b
- https://heygabriel.medium.com/how-to-fix-error-usehref-may-be-used-only-in-the-context-of-a-router-component-de3109b8b711

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
