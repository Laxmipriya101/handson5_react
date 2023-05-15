import React, { useState, useMemo } from "react";

const PureComponent = () => {
  const [count, setCounter] = useState(0);
  const memoCount = useMemo(() => count, [count]);

  const handleclick = () => {
    setCounter(count + 1);
  };
  return (
    <div>
      <h2>Pure Component</h2>
      <h1>{memoCount}</h1>
      <button onClick={handleclick}>Increment</button>
    </div>
  );
};

export default PureComponent;
