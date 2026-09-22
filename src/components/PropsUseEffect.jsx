import { useEffect, useState } from "react";

function PropsUseEffect() {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(0);

  function callOnce() {
    console.log("callOnce called");
  }

  function clickOnce() {
    console.log("clickOnce called");
  }

  useEffect(() => {
    callOnce();
  }, []);

  useEffect(() => {
    clickOnce();
  }, [click]);

  return (
    <div>
      <h1>Handle Props side effect with useEffect in component</h1>
      <h4>clickOnce called {click}</h4> <br />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setClick(click + 1)}>Click {click}</button>
    </div>
  );
}

export default PropsUseEffect;
