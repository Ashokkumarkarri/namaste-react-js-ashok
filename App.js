import React from "react";
import ReactDOM from "react-dom/client";

const divElement = React.createElement("div", { key: "1" }, [
  React.createElement("div", { key: "2" }, [
    React.createElement("h1", { className: "heading", key: "3" }, "child1"),
    React.createElement("h1", { key: "4" }, "child2"),
  ]),
  React.createElement("div", { key: "5" }, [
    React.createElement("h1", { key: "6" }, "child1"),
    React.createElement("h1", { key: "7" }, "child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divElement);
