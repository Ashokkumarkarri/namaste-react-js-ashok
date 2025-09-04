# 5. Let’s get hooked

---

own notes:

### 1. **File Structure**

- React projects are organized into folders and files to **keep code clean and maintainable**.
- Learn more: [React FAQ - Structure](https://legacy.reactjs.org/docs/faq-structure.html?utm_source=chatgpt.com)
- Proper file structure helps you **find components, utils, and configs easily** as your project grows.

---

### 2. **React Fiber**

- Fiber is **React’s engine for rendering and updating the UI efficiently**.
- It breaks rendering into **small units of work**, allowing React to:
  - Pause and resume work
  - Handle high-priority updates (like user input)
  - Update the UI smoothly without freezing
- Learn more: [React Fiber Architecture](http://github.com/acdlite/react-fiber-architecture?utm_source=chatgpt.com)

---

### 3. **`utils`, `common`, `config` Folders**

- **Purpose:** Store reusable code and avoid hardcoding inside components.
- Examples:
  1. `utils/` → helper functions used across the app (math functions, API calls, formatting)
  2. `common/` → reusable UI components (buttons, cards, headers)
  3. `config/` → constants, API URLs, environment variables

**Benefit:**

- Makes your components **clean, maintainable, and reusable**.

---

### 4. **Exports and Imports**

1. **Default Export** – export one main thing from a file

```jsx
export default Component;
import Component from "./path";
```

1. **Named Export** – export multiple things from a file

```jsx
export const variableName = {};
import { variableName } from "./path";
```

**Tip:** Use **default export** for main components and **named exports** for helpers/constants.

---

### 5. **React Hooks**

- Hooks let functional components use **state and lifecycle features**.
- Most common hooks:

1. **`useState()`** – store and update state in a component
2. **`useEffect()`** – run side effects like API calls, timers, or subscriptions

**Example:**

```jsx
const [count, setCount] = useState(0); // state variable + setter
```

---

### 6. **Reconciliation Algorithm**

- **Virtual DOM** – a lightweight JavaScript object representing the real DOM.
- **How it works:**
  1. When **state or props change**, React creates a **new Virtual DOM**.
  2. Compares it with the **old Virtual DOM** using the **Diff Algorithm**.
  3. Finds the **minimal changes** required.
  4. Updates **only the changed parts** in the real DOM.

**Key Point:**

- This makes React **fast**, avoids unnecessary re-renders, and keeps UI **in sync** with state/props.

---

💡 **Summary of Core Concepts**

- **Component-based** → UI made of reusable pieces
- **Declarative** → describe _what_ the UI should look like
- **Virtual DOM + Diff Algorithm** → efficient updates
- **Hooks** → state and lifecycle in functional components
- **Reusable folders (`utils`, `common`, `config`)** → clean, maintainable code

---

# Other’s Notes

**📚 Episode 05: Let's Get Hooked! 🎣**

**🚀 Understanding ES6 Exports & Imports**

**🔹 Named Export**

✅ Multiple exports per file. ✅ Must use `{}` while importing. ✅ Name should match the exported name.

```
// Exporting
export const MyComponent = () => {};
export const MyComponent2 = () => {};

// Importing
import { MyComponent, MyComponent2 } from "./MyComponent";
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

**🔹 Default Export**

✅ Only one default export per file. ✅ No `{}` required while importing. ✅ Can be imported with any name.

```
// Exporting
default MyComponent = () => {};
export default MyComponent;

// Importing
import MyComponent from "./MyComponent";
```

**🔹 \* as Export**

✅ Imports everything from the module. ✅ Access components using dot notation.

```
// Exporting
export const MyComponent = () => {};
export const MyComponent2 = () => {};
export const MyComponent3 = () => {};

// Importing
import * as MainComponents from "./MyComponent";

// Using
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```

**🔹 Named & Default Export Together**

```
export const MyComponent2 = () => {};
const MyComponent = () => {};
export default MyComponent;

// Importing
import MyComponent, { MyComponent2 } from "./MyComponent";
```

---

**🎣 What are React Hooks?**

📌 Introduced in React 16.8 🚀 📌 Reusable JavaScript functions for managing state & side effects 📌 No need to change component hierarchy 📌 Enhances component reusability

**🛠 Common Built-in Hooks**

- 🔹 `useState` → Manages state 🏗️
- 🔹 `useEffect` → Handles side effects 🌊
- 🔹 `useContext` → Provides access to context 📦
- 🔹 `useReducer` → Alternative for complex state management 🤹
- 🔹 `useCallback` → Memoizes functions ⚡
- 🔹 `useMemo` → Memoizes values 🏎️
- 🔹 `useRef` → Creates a mutable reference 🎯
- 🔹 `useLayoutEffect` → Fires after all DOM mutations 🏗️
- 🔹 `useDebugValue` → Adds debug info 🐞

---

**🔥 Why Do We Need `useState`?**

✅ Maintains state in functional components 🔄 ✅ Tracks state changes dynamically 🧐 ✅ Returns an array with state and an updater function ⚙️

**📝 Syntax**

```
const [state, setState] = useState(initialState);
```

**🛠 Importing**

```
import React, { useState } from "react";
```

**💡 Example**

```
const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

🚀 Happy Coding! 🎉

---

**Namaste React Course by Akshay Saini**

**Chapter 05 - Let's get Hooked!**

**Q: What is the difference between `Named export`, `Default export`, and `* as export`?**

A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`. In `Named export`, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module. In `Named export`, the component is exported from MyComponent.js file like:

```
export const MyComponent = () => {}
export const MyComponent2 = () => {}

```

and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.

```
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";

```

In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like. In `Default export`, the component is exported from MyComponent.js file like:

```
const MyComponent = () => {}
export default MyComponent;

```

and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.

```
import MyComponent from "./MyComponent";

```

In `* as export`, it is used to import the whole module as a component and access the components inside the module. In `* as export`, the component is exported from MyComponent.js file like:

```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}

```

and the component is imported from MyComponent.js file like:

```
import * as MainComponents from "./MyComponent";

```

Now we can use them in JSX as:

```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />

```

We can use `Named export` and `Default export` together. So you should export like:

```
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;

```

and import like:

```
import MyComponent, {MyComponent2} from "./MyComponent";

```

**Q: What is the importance of `config.js` file?**

A: `config.js` files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way, formatted to be user configurable. Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces. Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user. For example:

```
Chetan

```

Usually, though, an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:

```
NAME='Chetan'
SURNAME='Nada'

```

**Q: What are `React Hooks`?**

A: In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

**React provides a bunch of standard in-built hooks:**

- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.

**Q: Why do we need `useState Hook`?**

A: `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

**Syntax for useState hook**

```
const [state, setState] = useState(initialstate);

```

**Importing: To use useState you need to import useState from react as shown below:**

```
import React, { useState } from "react";

```

we can use Hooks in Functional Components

```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}

```

---
