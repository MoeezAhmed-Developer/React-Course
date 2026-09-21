import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase plus 1</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : count)}>
        Decrease minus 1
      </button>
    </div>
  );
}

export default Count; 
