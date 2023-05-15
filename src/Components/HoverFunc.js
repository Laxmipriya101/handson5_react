import React from "react";
import HigherOrderFunc from "./HigherOrderFunc";

const HoverFunc = (props) => {
  console.log(props);
  return (
    <div className="hover">
      HoverFunc
      <h1>{props.value}</h1>
      <button onMouseOver={props.submit}>Hover Me!</button>
    </div>
  );
};

export default HigherOrderFunc(HoverFunc);
