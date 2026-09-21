import { useState } from "react";

function HandleFruits() {
  const [fruit, setFruit] = useState("Apple");
  function handleChange() {
    setFruit("Banana");
  }

  return (
    <div>
      <h1>{fruit}</h1>
      <button onClick={() => handleChange()}>Change fruit name</button>
    </div>
  );
}

export default HandleFruits;
