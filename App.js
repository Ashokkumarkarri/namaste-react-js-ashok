// const heading = document.createElement("h1");
// heading.textContent = "hello from heading";
// const rootEl = document.getElementById("root");
// rootEl.appendChild(heading);

// const heading = React.createElement(
//   "h1",
//   { className: "heading-css" },
//   "hello from react heading....."
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// <div>
// <div>
//     <h1>child 1</h1>
//         <h1>child 2</h1>
// </div>
// <div>
//     <h1>child 1</h1>
//         <h1>child 2</h1>
// </div>

// </div>

const divElement = React.createElement("div", {}, [
  React.createElement("div", {}, [
    React.createElement("h1", { className: "heading" }, "child1"),
    React.createElement("h1", {}, "child2"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "child1"),
    React.createElement("h1", {}, "child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divElement);
