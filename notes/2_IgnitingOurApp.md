https://namastedev.com/blog/igniting-our-app/

**📦 Part 1 - NPM and Package Management**

**What is NPM?**

- **NPM** stands for more than just Node Package Manager. It's a package manager, but it also encompasses many things around JavaScript project management.
- It's a central **repository** for all packages that your project might need.

**How to Initialize NPM in Your Project**

- Run the command `npm init` to create an npm configuration in your project.
- You'll answer a few questions:
  - **Test command**: Use `jest` (covered in future episodes).
  - Other options can be left as default.
- After the initialization, a file called `package.json` is created, which holds your project's dependencies and configuration.

**What is `package.json`?**

- It stores **dependencies** for your project and other important project configurations.

**Installing Dependencies**

- One crucial dependency is a **bundler**.
  - A bundler packages your app for production use.
  - Tools like **Webpack** and **Babel** are used in **Create React App**.
  - In this project, we'll use **Parcel**.
- Install Parcel using the following command:
  ```
  npm install -D parcel
  ```
- There are two types of dependencies:
  1. **Normal Dependencies**: Required for the app to run.
  2. **Development Dependencies**: Needed only during development (e.g., testing, bundling).

**Difference between `package-lock.json` and `package.json`**

- **`package.json`** specifies the project dependencies and their acceptable version ranges (e.g., `^2.12.0`, meaning only minor updates).
- **`package-lock.json`** locks down the exact version of all dependencies used by the project to ensure consistent builds.

**Dependency Tree and Node Modules**

- Dependencies often depend on other dependencies, forming a **dependency tree**.
- The `node_modules` directory can get very large, so it's recommended to add it to `.gitignore` to avoid uploading it to GitHub.

---

**🚀 Part 2 - Setting Up React and Using Parcel**

**Running the App with Parcel**

- To ignite the app, run the following command:
  ```
  npx parcel index.html
  ```
- **npm** is used for installing packages, while **npx** is used to execute packages.

**CDN vs. NPM for React**

- It's better to install **React** and **ReactDOM** via npm instead of using CDN links.
  ```
  npm install react
  npm install react-dom
  ```

**Importing React in Your Project**

- Once React is installed, you'll need to import it into your files:
  ```
  import React from "react";
  import ReactDOM from "react-dom";
  ```
- If you try to use the above code, you might see an error: **"Browser Scripts cannot have import or export"**.
- To fix this, specify that your JavaScript files are **modules**:
  ```
  <script type="module" src="App.js"></script>
  ```

**Why Use Parcel?**

Parcel provides several advantages for development:

- **Dev Build**: Automatically sets up a local server.
- **Hot Module Replacement (HMR)**: Auto-refreshes the page when changes are made.
- **File Watching Algorithm**: Tracks file changes and is written in C++ for efficiency.
- **Faster Development**: Uses cache to speed up rebuilds.
- **Image Optimization**: Automatically optimizes images during development.
- **Production Build**: Minifies and compresses files for optimal performance.
- **Consistent Hashing**: Ensures efficient caching of assets.
- **Code Splitting**: Automatically splits code into smaller bundles for faster loading.
- **Differential Bundling**: Creates optimized bundles for different environments (e.g., modern vs. legacy browsers).

---

**🌟 Key Takeaways**

- **NPM** is crucial for managing project dependencies.
- **Parcel** makes development faster and easier by bundling assets, optimizing files, and offering great developer experience features like Hot Module Replacement.
- **React** should be installed using npm, and you'll need to configure your project to support ES module imports.

```jsx



npm init

npm install -D parcel
npx parcel index.html

npm parcel build index.html

npm i react
npm i react-dom

import react from 'react'
import ReactDom from 'react-dom'

<script  type="module" src="">

.gitignore = /node-modules
/dist
.parcel-cache


```
