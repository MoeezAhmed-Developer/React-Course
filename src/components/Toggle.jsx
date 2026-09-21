import { useState } from "react";

function Toggle() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <h2>Toggling</h2>
      <h1>{display ? "Show component" : "Hide component"}</h1>
      <button onClick={() => setDisplay(!display)}>toggle</button>
    </div>
  );
}

export default Toggle;
