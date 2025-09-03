# **3 - Laying The Foundation**

https://namastedev.com/blog/namaste-react-episode-2-laying-the-foundation/

**🛠️ Part 1 - Using NPM Scripts**

- To start your project with Parcel, you can either run:
  ```
  npx parcel index.html
  ```
- However, a more convenient way is to add scripts in `package.json`. This allows you to start the project with simple npm commands. Here's an example of the script section:
  ```
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  }
  ```
- You can now start your project using:
  ```
  npm start
  ```

---

**🖼️ Part 2 - Rendering Elements with React**

- In **React**, we use the `createElement` method to create elements, which are then rendered to the DOM using `root.render()`.
- **React.createElement** returns a JavaScript object, which gets transformed into an HTML element when rendered on the DOM.

---

**🔄 Part 3 - JSX vs React**

- **JSX** is a syntax that allows us to write HTML-like code within JavaScript. However, it’s not exactly HTML; it looks like HTML but behaves differently.
- **JSX** makes writing React components easier, but it's optional.

**Creating a Heading in React:**

- Without JSX (Core React):
  ```
  const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React Using Core React ✨"
  );
  ```
- With JSX:
  ```
  const jsxHeading = <h1>Namaste React using JSX ✨</h1>;
  ```
- Both methods output the same result under the hood: an object representation of the DOM.

**What Happens Behind the Scenes:**

1. JSX code is **transpiled** by Babel into React's `createElement` calls.
2. The result is a **React element**, which is essentially a JavaScript object.
3. The React element is then **rendered** into an **HTML element** in the browser.

**JSX Syntax Rules:**

- Use `className` instead of `class`.
- Wrap multiple lines of JSX in parentheses.
- Use **camelCase** for JSX attributes.

---

**🔧 Part 4 - Understanding React Components**

**Types of React Components:**

1. **Class-Based Components**: The old way of writing components using JavaScript classes.
2. **Functional Components**: The modern approach using JavaScript functions.

**Creating Functional Components:**

- With return statement:
  ```
  const HeadingComponent = () => {
    return <h1>Namaste React Functional Component ✨</h1>;
  };
  ```
- Without return statement:
  ```
  const HeadingComponent = () => (
    <div id="container">
      <h1 className="heading">Namaste React Functional Component ✨</h1>
    </div>
  );
  ```
- Both versions are valid. JSX can be returned directly from the arrow function.

---

**🏗️ Part 5 - Component Composition**

**Rendering Elements and Components:**

- **React Element**:
  ```
  const heading = (
    <h1 className="head" tabIndex="5">Namaste React Element!</h1>
  );
  root.render(heading);
  ```
- **Functional Component**:
  ```
  const HeadingComponent = () => (
    <div id="container">
      <h1 className="heading">Namaste React Functional Component ✨</h1>
    </div>
  );
  root.render(<HeadingComponent />);
  ```

**Composing Components:**

- Components can be composed by nesting them within each other.

Example:

```
const Title = () => (
  <h1 className="heading">Namaste React Title ✨</h1>
);

const Heading = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component ✨</h1>
  </div>
);
```

- This is called **Component Composition**, where one component renders another.

---

**📝 Part 6 - Using Arrow Functions vs Normal Functions**

- You can use regular functions instead of arrow functions to define components:
  ```
  const Title = function () {
    return <h1>This is done using a normal function!</h1>;
  };
  ```
- Arrow functions are the modern standard (introduced in ES6) and preferred for their cleaner syntax.

---

**🔐 Part 7 - Security in JSX**

- JSX helps prevent cross-site scripting (XSS) attacks by escaping values automatically.
- You can pass JavaScript expressions within `{}` in JSX.

**Ways to Write Components in JSX:**

1. `{Title()}`
2. `<Title />`
3. `<Title></Title>`

All these are valid methods for rendering components in JSX.
