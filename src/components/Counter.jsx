import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;
