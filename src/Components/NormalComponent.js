import React, { useState } from "react";

const NormalComponent = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h2>NormalComponent</h2>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

export default NormalComponent;
