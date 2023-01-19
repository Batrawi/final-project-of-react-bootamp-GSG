import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter(counter + 1);
  };
  const dec = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
export default Counter;
