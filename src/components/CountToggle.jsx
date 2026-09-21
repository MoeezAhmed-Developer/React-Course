import { useState } from "react";

function CountToggle() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count Toggle</h1>
      <h2>{count}</h2>
      <h2>
        {count == 0
          ? "Condition 0"
          : count == 1
            ? "Condition 1"
            : "not in range"}
      </h2>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default CountToggle;
