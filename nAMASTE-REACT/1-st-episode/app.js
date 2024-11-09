const heading = React.createElement("dev", { class: "master" }, [
  React.createElement(
    "dev",
    { class: "parentDev-1" },
    React.createElement("dev", { class: "childDev-1" }, [
      React.createElement("h1", { id: "hed-1" }, "heading-1"),
      React.createElement("h2", { id: "hed-2" }, "heading-2"),
      React.createElement("h3", { id: "hed-3" }, "heading-3"),
    ])
  ),
  React.createElement(
    "dev",
    { class: "parentDev-2" },
    React.createElement("dev", { class: "childDev-2" }, [
      React.createElement("h4", { id: "hed-4" }, "heading-4"),
      React.createElement("h5", { id: "hed-5" }, "heading-5"),
      React.createElement("h6", { id: "hed-6" }, "heading-6"),
    ])
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("myDev"));

console.log(myDev);
console.log(heading);

root.render(heading);
