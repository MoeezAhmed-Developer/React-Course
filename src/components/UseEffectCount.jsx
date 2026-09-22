import { useEffect, useState } from "react";

function UseEffectCount() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    callOnce();
  }, []);

  function callOnce() {
    // alert("callOnce function called");
    console.log("callOnce function called");
  }

  return (
    <div>
      <h1>useEffect Hook</h1>
      <p>
        Download the React DevTools for a better development experience:
        {
          <a href="https://react.dev/link/react-devtools">
            https://react.dev/link/react-devtools
          </a>
        }
      </p>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
    </div>
  );
}

export default UseEffectCount;
