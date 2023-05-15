import React from "react";
import HigherOrderFunc from "./HigherOrderFunc";

const ClickedFunc = (props) => {
  console.log(props);
  return (
    <div className="click">
      ClickedFunc
      <h1>{props.value}</h1>
      <button onClick={props.submit}>Click Me!</button>
    </div>
  );
};

export default HigherOrderFunc(ClickedFunc);
