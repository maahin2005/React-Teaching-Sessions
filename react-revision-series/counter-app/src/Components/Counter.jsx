import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
    // if counter = 20
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  // Incre => count shoul be increase
  // dec => count shoul be decrease
  // so here we need => one counter variable => at every btn click => counter should change

  return (
    <div>
      <h1>Counter App</h1>
      <h1>Counter : {counter}</h1>

      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
