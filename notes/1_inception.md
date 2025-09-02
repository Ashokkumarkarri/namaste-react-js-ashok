**📘 React Basics Project**

This project is a walkthrough of how to use React, starting with a simple "Hello World" heading and moving on to more complex concepts like JSX and React DOM manipulation.

**🚀 Steps**

**1. Basic HTML Setup**

- In **VS Code**, you can use **Emmet** to quickly generate an HTML skeleton. Just type `!` and press Enter.
- We start by creating a basic HTML page with an `h1` tag that displays **"Hello World"**.

```
<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Basics</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

**2. Manipulating HTML with JavaScript**

- Next, we dynamically create the heading using JavaScript:
  - First, create a `div` with the ID `root`.
  - Use JavaScript to append an `h1` tag to the `div`.

```
<div id="root"></div>
<script>
    const rootElement = document.getElementById('root');
    const heading = document.createElement('h1');
    heading.innerText = 'Hello World from JavaScript!';
    rootElement.appendChild(heading);
</script>
```

**3. Adding React to the Project**

- Include React using **CDN** links to load the required scripts:
  - `react.development.js` (Core React framework)
  - `react-dom.development.js` (DOM manipulation with React)

```
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

**4. Using `React.createElement()`**

- Create an `h1` element using React:

```
const heading = React.createElement('h1', {}, 'Hello World from React!');
```

**5. Rendering the Element with React DOM**

- Use `ReactDOM.createRoot()` to render the React element into the `root` div:

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
```

**6. Creating a Nested Tree Structure in React**

- We can create nested elements in React by using `React.createElement()` recursively:

```
const parent = React.createElement(
  'div', { id: 'parent' },
  React.createElement(
    'div', { id: 'child' },
    React.createElement('h1', {}, 'This is an H1 tag inside a child div')
  )
);
root.render(parent);
```

**7. Adding Sibling Elements**

- To add siblings to the structure, use arrays inside `React.createElement()`:

```
const parent = React.createElement(
  'div', { id: 'parent' },
  [
    React.createElement('div', { id: 'child1' }, [
      React.createElement('h1', {}, 'First Title from React! 1'),
      React.createElement('h1', {}, 'Second Title from React! 1'),
    ]),
    React.createElement('div', { id: 'child2' }, [
      React.createElement('h1', {}, 'First Title from React! 2'),
      React.createElement('h1', {}, 'Second Title from React! 2'),
    ])
  ]
);
root.render(parent);
```

**8. Why Use JSX? 🤔**

- Using `React.createElement()` can get messy, especially with nested elements.
- **JSX** simplifies the syntax, making your code more readable and intuitive.

**9. How React Renders DOM 🎯**

- React manipulates only the portion of the DOM where it is mounted, allowing partial updates rather than re-rendering the entire page.

---

**🌟 Key Takeaways**

- **React Elements** are just JavaScript objects.
- React uses the **Virtual DOM** to efficiently update the UI.
- **JSX** makes writing React components easier by letting you use HTML-like syntax within JavaScript.

---

---

---

# Learn More:

### **1. React (`react` package)**

- **What it is:** The core library of React.
- **Purpose:** Lets you **create React Elements, components, and manage state & props**.
- **Key points:**
  - Provides **React API** like `React.createElement`, `useState`, `useEffect`, `Component`, etc.
  - React **does NOT directly touch the browser DOM**.
  - It's like the **brain** of your UI—it decides _what should be on the screen_, but doesn’t render it itself.

**Example:**

```jsx
const heading = React.createElement(
  "h1",
  { className: "title" },
  "Hello React"
);
```

- Creates a **JavaScript object** describing the element.
- Doesn’t show anything on the browser yet.

---

### **2. ReactDOM (`react-dom` package)**

- **What it is:** The library that **connects React to the actual browser DOM**.
- **Purpose:** Lets you **render React Elements/components to the real HTML page**.
- **Key points:**
  - Provides methods like `ReactDOM.createRoot` and `render`.
  - Translates the React Elements (JS objects) into **real DOM nodes**.

**Example:**

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // Now the <h1>Hello React</h1> appears on the page
```

---

### **Quick Summary Table**

| Package     | Role                              | Key Feature                                       |
| ----------- | --------------------------------- | ------------------------------------------------- |
| `react`     | Core React logic                  | Create elements, components, manage state & props |
| `react-dom` | Connects React to the browser DOM | Render React elements to actual HTML              |

### **What is `crossorigin`?**

- `crossorigin` is an **HTML attribute** used when your browser loads resources (like scripts, fonts, or images) from a **different origin** (domain) than your website.
- This is related to **CORS (Cross-Origin Resource Sharing)**, which is a browser security feature.
- It tells the browser **how to handle requests and credentials** when fetching resources from another domain.
