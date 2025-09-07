# 6. Exploring the World

# 🏗️ Monolith vs Microservices

## 🏗️ What is Architecture?

- **Architecture** is the **overall structure and design of an application**.
- It defines **how different parts of the app interact**, how **data flows**, and how the app is **organized**.
- Determines **scalability, maintainability, and performance**.

⚡ **In short:**

Architecture = **plan + structure + communication flow** of an app.

# 📦 Monolith Architecture

### What it means

- **“Monolith” = one big unit**.
- Everything (UI, business logic, database, APIs) is bundled together in a **single codebase** and deployed as **one unit**.

### Example (Amazon style)

- Product listing
- Cart
- Payments
- User profile

👉 In a **monolith**, all these features are inside **one project** and deployed together.

### ✅ Advantages

- Simple to build at the start
- Easy to deploy (only one unit to manage)
- Good for small projects/startups

### ❌ Disadvantages

- As the app grows → code becomes **large & complex**
- Hard to scale (must scale the whole app, not individual features)
- If one part fails (e.g., payment), it can affect the **whole app**
- Slower development when many devs work on the same big codebase

⚡ **In short**:

Monolith = **One big app** → Easy to start, **hard to scale** as it grows.

---

# 🧩 Microservices Architecture

### What it means

- The app is broken into **smaller, independent services**.
- Each service handles **one feature/responsibility** (auth, cart, payments, etc).
- Services talk to each other via **APIs** (REST, GraphQL, gRPC, etc).

### Example (Amazon style)

- **Auth Service** → Login/Signup
- **Product Service** → List products
- **Cart Service** → Add/Remove items
- **Payment Service** → Handle payments

👉 Each service is its **own project**, has its **own database**, and can be **deployed independently**.

### ✅ Advantages

- Easier to scale → scale only the service that needs more power (e.g., Payment service during festival sales).
- Faster development → teams work **independently**.
- More reliable → if one service fails, rest still works.
- Easier to maintain → smaller, focused codebases.

### ❌ Disadvantages

- More **complex setup** (API communication, load balancing, etc).
- Harder to test (since multiple services interact).
- Requires **DevOps knowledge** (Docker, Kubernetes, CI/CD).

---

# 🔄 Monolith vs Microservices

| Feature        | Monolith 🏠         | Microservices 🏗️                 |
| -------------- | ------------------- | -------------------------------- |
| Codebase       | Single big project  | Many small projects              |
| Scaling        | Scale whole app     | Scale only one service           |
| Deployment     | One unit            | Multiple independent deployments |
| Best for       | Small apps/startups | Large, complex apps              |
| Failure impact | Whole app may crash | Only that service fails          |

---

⚡ **Summary**

- **Monolith** = One big app → Easy to start, but **hard to scale**.
- **Microservices** = Many small apps → Harder to set up, but **great for large apps**.

---

# ⚛️ React Data Fetching Approaches

React apps often need to **fetch data from the backend** to create dynamic UIs.

There are **two common approaches**:

## 🔹 Approach 1: Fetch First, Then Render

**Flow:**

App Loads → Make API Call → Render the UI

- User waits until data comes back.
- Example: API takes **500ms**, so the UI shows up only after that.

❌ **Downside**: User sees a blank screen for some time.

---

## 🔹 Approach 2: Render First, Then Fetch (Better UX 🎉)

**Flow:**

App Loads → Render the UI → Make API Call → Re-render the UI with data

- User sees a **basic UI immediately**.
- Once data arrives, UI updates with real info.
- Improves **perceived performance** (app feels faster).

✅ **Why we chose this?**

Because showing something quickly (like placeholders, skeleton loaders, or empty states) keeps the user engaged.

---

⚡ **Summary**

- **Approach 1** = Wait → then show UI. (Slower experience)
- **Approach 2** = Show UI first → then update with data. (Better user experience ✅)

---

---

# ⚛️ useEffect Hook

## 📌 What is `useEffect`?

- A **React Hook** that lets you run code **after the component is rendered**.
- Useful for tasks like:
  - Fetching data from API
  - Setting up subscriptions/listeners
  - Updating the DOM manually
  - Cleaning up when component unmounts

## 📌 Parameters of `useEffect`

```jsx
import { useEffect } from "react";

useEffect(callback, dependencyArray);
```

1. **Callback function** → The code you want to run.
2. **Dependency array (`[]`)** → Controls **when** the effect runs.

---

## 📌 When does `useEffect` run?

- After the **render cycle finishes** (not during rendering).
- Think of it as: _"Do this after the UI is painted."_

---

## 📌 Examples

### 1. Run only once (on mount)

```jsx
useEffect(() => {
  console.log("Runs only once after first render");
}, []);
```

### 2. Run on every render

```jsx
useEffect(() => {
  console.log("Runs on every render");
});
```

### 3. Run when specific data changes

```jsx
useEffect(() => {
  console.log("Runs whenever count changes");
}, [count]);
```

---

✅ In short:

`useEffect` = _"Do something after render, and re-do it when dependencies change."_

---

# 📌 Handling `fetch()` in React/JS

### 1. **Old way → `.then()` & `.catch()`**

```jsx
fetch("https://api.example.com/data")
  .then((res) => res.json()) // convert response to JSON
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
```

### 2. **Modern way → `async/await` & `try...catch`**

```jsx
const getData = async () => {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log("Fetched data:", data);
  } catch (err) {
    console.error("Error:", err);
  }
};

getData();
```

---

✅ Both ways work the same, but:

- `.then().catch()` → older style, sometimes harder to read.
- `async/await` → modern, cleaner, looks like synchronous code.

---

## what fetch returns?

When you do:

```jsx
const data = await fetch("...");
```

👉 `fetch()` itself returns a **Promise** that resolves to a **Response object**.

So after the `await`,

- `data` is a **Response object**, not JSON and not plain text.
- This object contains metadata about the HTTP response (status, headers, etc.) and methods (`.json()`, `.text()`, `.blob()`, etc.) to **read the actual body**.

Example:

```jsx
console.log(data);
// Response { type: "cors", url: "...", redirected: false, status: 200, ok: true, ... }
```

Then you do:

```jsx
const json = await data.json();
```

👉 `.json()` also returns a **Promise**, which resolves to the parsed JSON (a plain JavaScript object).

---

So the flow is:

1. `fetch()` → Promise → Response object ✅
2. `response.json()` → Promise → Parsed JavaScript object ✅

---

# 🌐 CORS (Cross-Origin Resource Sharing)

## 🔹 What is CORS?

- Browsers allow requests **only from the same origin** (domain + protocol + port).
- **CORS** lets servers **allow other origins** to access their resources using headers like `Access-Control-Allow-Origin`.

---

## 🔹 Key Points

- Enforced **only by browsers**. Node.js or curl is not restricted.
- **Server controls CORS**, frontend cannot bypass it.
- Preflight requests (OPTIONS) are sent for custom headers or methods (PUT, DELETE).

---

## 🔹 Scenarios

| Scenario                            | Result            |
| ----------------------------------- | ----------------- |
| Same-origin                         | ✅ Works          |
| Different origin, server **blocks** | ❌ Browser blocks |
| Different origin, server **allows** | ✅ Works          |

---

## 🔹 Handling CORS in React

1. **Browser extension** – only for development testing.
2. **Proxy URL** – e.g.,

```jsx
const data = fetch("https://corsproxy.io/?url=<API_URL>");
```

- Lets frontend access APIs that **don’t send CORS headers**.

---

## ⚡ In Short

- CORS = **browser security**.
- Server must **allow cross-origin requests**.
- Frontend can only use **proxies or extensions** to bypass during development.

---

# Optional chaining

Optional chaining (`?.`) is a safe way in JavaScript to access nested properties without throwing an error if something is `null` or `undefined`.

👉 Example without optional chaining:

```jsx
const user = {};
console.log(user.address.city); // ❌ Error: Cannot read properties of undefined
```

👉 With optional chaining:

```jsx
const user = {};
console.log(user.address?.city); // ✅ undefined (no error)
```

It basically means:

- If the property before `?.` exists → continue.
- If it doesn’t → return `undefined` instead of crashing.

Would you like me to also explain how you used `?.` in your Swiggy API code (like `json.data.cards[4]?.card.card...`)?

---

# ❓ Why is React fast?

🔹 Many say **“because of Virtual DOM”**, but that’s only half true.

✅ The real reason: **Reconciliation Algorithm (Diffing)**

### ⚡ How React works fast:

1. React builds a **Virtual DOM** (UI in memory).
2. On state/prop change → it makes a **new Virtual DOM**.
3. React uses **Reconciliation** to compare (diff) the old vs new tree.
4. Only the **changed parts** are updated in the real DOM.

---

### 🚀 Why it’s faster:

- React’s diffing is **O(n)** (efficient).
- It updates only **minimum required nodes**, not the whole DOM.
- Uses **keys** in lists to avoid unnecessary re-renders.

---

✅ **In short:**

React is fast **not just because of Virtual DOM**,

but mainly because of its **Reconciliation Algorithm** that updates only what’s needed.
