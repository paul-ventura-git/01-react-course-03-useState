import { useState, useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  /**
   * It will trigger each time the STATE "COUNT" is changed.
   */
  useEffect(() => {
    setCalculation(() => count * 2);
    console.log("State has been changed.")

  }, [count]); // <- add the count variable here.

  return (
    <>
      <h1>Use Effect Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default UseEffectExample