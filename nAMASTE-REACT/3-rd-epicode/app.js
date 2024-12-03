import React from "react";
import ReactDOM from "react-dom/client";

const codeJsx_singleLine_Element = <h1 className="heading">Namaste React using JSX-SLC</h1>;

// const codeJsx_multiLine_Element = (
//   <h1 className="heading">Namaste React using JSX-MLC</h1>
// );

const JsxReactComponent = () => (
  <h1 className="heading">Namaste React using JSX-Component</h1>
);

const JsxReactComposition = () => (
  <div>
    {codeJsx_singleLine_Element}
    <JsxReactComponent />
    <h1 className="heading">Namaste React using JSX-ReactComposition</h1>
    <JsxReactComponent></JsxReactComponent>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("myDev"));

console.log(myDev);
//console.log(codeJsx);

// root.render(codeJsx_singleLine_Element);
// root.render(codeJsx_multiLine_Element);

root.render(<JsxReactComposition />);