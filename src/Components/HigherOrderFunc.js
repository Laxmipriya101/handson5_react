import React, { useState } from "react";
const HigherOrderFunc = (WrappedComponent) => {
  function HocComponent() {
    const [value, setValue] = useState(0);

    const Hover = () => {
      setValue(value + 1);
    };
    return (
      <div>
        HigherOrderFunc
        <WrappedComponent value={value} submit={Hover} />
      </div>
    );
  }
  return HocComponent;
};

export default HigherOrderFunc;
